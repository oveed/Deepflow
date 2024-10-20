from flask import Blueprint, request, jsonify
from app.gemini_service import get_wildfire_prediction
from app.services.mongo_service import mongo_service
from datetime import datetime

wildfire_bp = Blueprint('wildfire', __name__)

@wildfire_bp.route('/predict_wildfire', methods=['POST'])
def predict_wildfire():
    data = request.json
    temp = data.get('temperature')
    humidity = data.get('humidity')
    wind_speed = data.get('wind_speed')
    precipitation = data.get('precipitation')

    if not all([temp, humidity, wind_speed, precipitation]):
        return jsonify({"error": "Missing parameters"}), 400

    # Get the prediction from Gemini LLM API
    prediction = get_wildfire_prediction(temp, humidity, wind_speed, precipitation)

    # Add metadata for storage
    prediction_record = {
        "input_data": {
            "temperature": temp,
            "humidity": humidity,
            "wind_speed": wind_speed,
            "precipitation": precipitation
        },
        "prediction": prediction,
        "timestamp": datetime.utcnow()
    }

    # Save the prediction to MongoDB
    mongo_service.save_prediction(prediction_record)

    return jsonify(prediction)
