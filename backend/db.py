from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")  # or Atlas URI
client = AsyncIOMotorClient(MONGO_URI)
db = client["mom_os"]
user_collection = db["users"]
