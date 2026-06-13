import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error
from xgboost import XGBRegressor
import joblib
import os

# ── Load data ──────────────────────────────────────────────
df = pd.read_csv("../data/train.csv")
print("Data loaded. Shape:", df.shape)

# ── Features and target ────────────────────────────────────
features = [
    "vendor_id", "passenger_count",
    "pickup_longitude", "pickup_latitude",
    "dropoff_longitude", "dropoff_latitude",
    "hour", "day", "month", "weekday",
    "is_weekend", "distance_km"
]

X = df[features]
y = np.log1p(df["trip_duration"])

# ── Train / test split ─────────────────────────────────────
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print("Training samples:", len(X_train))

# ── Train XGBoost model ────────────────────────────────────
model = XGBRegressor(
    n_estimators=200,
    max_depth=6,
    learning_rate=0.1,
    subsample=0.8,
    random_state=42,
    n_jobs=-1
)
model.fit(X_train, y_train)

# ── Evaluate ───────────────────────────────────────────────
y_pred = model.predict(X_test)
mae = mean_absolute_error(np.expm1(y_test), np.expm1(y_pred))
print(f"MAE: {mae:.2f} seconds  ({mae/60:.2f} minutes)")

# ── Save model ─────────────────────────────────────────────
os.makedirs("../backend/model", exist_ok=True)
joblib.dump(model, "../backend/model/xgb_model.pkl")
print("Model saved to backend/model/xgb_model.pkl")