import axios from "axios";

const BASE_URL = "https://trip-duration-api.onrender.com";

export interface TripInput {
  vendor_id: number;
  passenger_count: number;
  pickup_longitude: number;
  pickup_latitude: number;
  dropoff_longitude: number;
  dropoff_latitude: number;
  hour: number;
  day: number;
  month: number;
  weekday: number;
  is_weekend: number;
  distance_km: number;
}

export interface PredictionResult {
  duration_seconds: number;
  duration_minutes: number;
  message: string;
}

export const predictDuration = async (
  data: TripInput
): Promise<PredictionResult> => {
  const response = await axios.post(`${BASE_URL}/predict`, data);
  return response.data;
};