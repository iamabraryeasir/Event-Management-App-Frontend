import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const api = axios.create({
  baseURL: VITE_API_URL || "https://api.example.com",
  headers: { "Content-Type": "application/json" },
  timeout: 10000,
});

export function useApi(endpoint, options = {}) {
  const { method = "get", body = null, deps = [] } = options;

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const callApi = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const config = {
        method,
        url: endpoint,
        data: body,
      };
      const response = await api.request(config);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, [endpoint, method, body]);

  useEffect(() => {
    callApi();
  }, deps);

  return { data, error, loading, refetch: callApi };
}
