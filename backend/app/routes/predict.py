from fastapi import APIRouter
from app.schemas import TripInput
import numpy as np
import joblib
import os

router = APIRouter()

# Load model once when server starts
MODEL_PATH = os.path.join(os.path.dirname(__file__), "../../model/xgb_model.pkl")
model = joblib.load(MODEL_PATH)

@router.post("/predict")
def predict_duration(trip: TripInput):
    features = np.array([[
        trip.vendor_id,
        trip.passenger_count,
        trip.pickup_longitude,
        trip.pickup_latitude,
        trip.dropoff_longitude,
        trip.dropoff_latitude,
        trip.hour,
        trip.day,
        trip.month,
        trip.weekday,
        trip.is_weekend,
        trip.distance_km
    ]])

    log_prediction = model.predict(features)[0]
    duration_seconds = int(np.expm1(log_prediction))
    duration_minutes = round(duration_seconds / 60, 1)

    return {
        "duration_seconds": duration_seconds,
        "duration_minutes": duration_minutes,
        "message": f"Estimated trip duration is {duration_minutes} minutes"
    }