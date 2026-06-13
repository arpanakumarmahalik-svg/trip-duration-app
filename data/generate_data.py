import pandas as pd
import numpy as np

np.random.seed(42)
n = 5000  # number of trips

df = pd.DataFrame({
    "vendor_id":           np.random.randint(1, 3, n),
    "passenger_count":     np.random.randint(1, 7, n),
    "pickup_longitude":    np.random.uniform(-74.05, -73.75, n),
    "pickup_latitude":     np.random.uniform(40.63, 40.85, n),
    "dropoff_longitude":   np.random.uniform(-74.05, -73.75, n),
    "dropoff_latitude":    np.random.uniform(40.63, 40.85, n),
    "hour":                np.random.randint(0, 24, n),
    "day":                 np.random.randint(1, 29, n),
    "month":               np.random.randint(1, 13, n),
    "weekday":             np.random.randint(0, 7, n),
    "is_weekend":          np.random.randint(0, 2, n),
    "distance_km":         np.round(np.random.uniform(0.5, 30.0, n), 2),
})

# Generate realistic trip duration based on distance + hour
noise = np.random.normal(0, 120, n)
df["trip_duration"] = (
    df["distance_km"] * 180          # ~3 min per km base
    + df["hour"].apply(lambda h: 300 if 7 <= h <= 10 or 16 <= h <= 19 else 0)  # rush hour
    + df["passenger_count"] * 10
    + noise
).clip(120, 7000).astype(int)        # between 2 min and ~2 hours

df.to_csv("train.csv", index=False)
print(f"Saved train.csv with {len(df)} rows.")
print(df.head())