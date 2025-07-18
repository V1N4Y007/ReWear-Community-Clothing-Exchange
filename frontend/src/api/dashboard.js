// frontend/src/api/dashboard.js
import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

export const fetchDashboardData = async (token) => {
  const res = await axios.get(`${BASE_URL}/dashboard`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return res.data;
};
