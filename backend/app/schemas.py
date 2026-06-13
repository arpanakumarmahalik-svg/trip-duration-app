from pydantic import BaseModel

class TripInput(BaseModel):
    vendor_id: int
    passenger_count: int
    pickup_longitude: float
    pickup_latitude: float
    dropoff_longitude: float
    dropoff_latitude: float
    hour: int
    day: int
    month: int
    weekday: int
    is_weekend: int
    distance_km: float