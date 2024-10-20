import os

class Config:
    GEMINI_API_URL = os.getenv('GEMINI_API_URL', 'https://api.gemini.com/v1/completions')
    GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', 'AIzaSyAPHwDzixKbkDKNnjJXUhGOelTj5Fa92lM')




import os

class Config:
    GEMINI_API_URL = os.getenv('GEMINI_API_URL', 'https://api.gemini.com/v1/completions')
    GEMINI_API_KEY = os.getenv('GEMINI_API_KEY', '')

    # MongoDB configuration
    MONGO_URI = os.getenv('MONGO_URI', '')
    MONGO_DB_NAME = os.getenv('MONGO_DB_NAME', 'Test')
    MONGO_COLLECTION_NAME = os.getenv('MONGO_COLLECTION_NAME', 'testcoll')
