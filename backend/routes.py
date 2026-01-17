from fastapi import APIRouter, HTTPException
from models import User
from db import user_collection

router = APIRouter()

@router.post("/users")
async def create_user(user: User):
    existing = await user_collection.find_one({"email": user.email})
    if existing:
        raise HTTPException(status_code=400, detail="User already exists")

    await user_collection.insert_one(user.dict())
    return {"message": "User created"}

@router.get("/users/{email}")
async def get_user(email: str):
    user = await user_collection.find_one({"email": email}, {"_id": 0})
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.get("/users")
async def get_all_users():
    users = []
    async for user in user_collection.find({}, {"_id": 0}):
        users.append(user)
    return users
