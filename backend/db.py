from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")  # or Atlas URI
client = AsyncIOMotorClient("mongodb://127.0.0.1:27017")
db = client["mom_os"]
user_collection = db["users"]
