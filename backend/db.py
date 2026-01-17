from motor.motor_asyncio import AsyncIOMotorClient

MONGO_URI = "mongodb://localhost:27017"  # or Atlas URI

client = AsyncIOMotorClient(MONGO_URI)
db = client["mom_os"]
user_collection = db["users"]
