from pymongo import MongoClient
from app.config import Config

class MongoService:
    def __init__(self):
        # Initialize MongoDB client and select database/collection
        self.client = MongoClient(Config.MONGO_URI)
        self.db = self.client[Config.MONGO_DB_NAME]
        self.collection = self.db[Config.MONGO_COLLECTION_NAME]

    def save_prediction(self, data):
        """Save the wildfire prediction data into MongoDB."""
        return self.collection.insert_one(data)

# Initialize the MongoService once (singleton pattern)
mongo_service = MongoService()
