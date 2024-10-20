from flask import Flask
from flask_pymongo import PyMongo

app = Flask(__name__)

# MongoDB configuration
app.config["MONGO_URI"] = "mongodb+srv://ahmedbensalem:azer1234@cluster0.omvq3.mongodb.net/Deepflow?retryWrites=true&w=majority&appName=Cluster0"
mongo = PyMongo(app)

# Check MongoDB connection
@app.route('/')
def index():
    try:
        collections = mongo.db.list_collection_names()  
        if collections: 
            return "Connected to MongoDB! Collections: " + ", ".join(collections)
        else:
            return "Connected to MongoDB! But no collections found."
    except Exception as e:
        return f"Failed to connect to MongoDB: {str(e)}"

if __name__ == "__main__":
    app.run(debug=True)
