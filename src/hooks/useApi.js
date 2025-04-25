import { useState, useEffect } from "react";
import Client from "../utils/client";

export const useApi = (endpoint, options = {}) => {
  const { method = "get", body = null, deps = [] } = options;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await Client({
          method,
          url: endpoint,
          ...(body && { data: body }),
        });

        setData(response.data.data);
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, deps);

  return { data, loading, error };
};
