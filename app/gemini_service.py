import requests
from app.config import Config

def get_wildfire_prediction(temp, humidity, wind_speed, precipitation):
    headers = {
        'Authorization': f'Bearer {Config.GEMINI_API_KEY}',
        'Content-Type': 'application/json'
    }

    # Construct the prompt for the Gemini LLM
    prompt = f"""
    Based on the following environmental conditions:
    - Temperature: {temp}°C
    - Humidity: {humidity}%
    - Wind Speed: {wind_speed} km/h
    - Precipitation: {precipitation} mm
    
    What is the likelihood of a wildfire occurring under these conditions?
    your response should be in the form of XX% - XX% with a range of 10% of the percentage of a fire rising
    """
    
    payload = {
        "model": "gemini-llm",  # Update with actual model name if necessary
        "prompt": prompt,
        "max_tokens": 100,  # Limit response tokens to control output length
        "temperature": 0.7  # Optional: adjust creativity of the LLM's response
    }
    
    try:
        response = requests.post(Config.GEMINI_API_URL, json=payload, headers=headers)
        response.raise_for_status()
        result = response.json()
        # Extract the response (assuming the result has 'choices' key like in GPT APIs)
        wildfire_risk = result['choices'][0]['text'].strip()
        return {"wildfire_risk": wildfire_risk}
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}
