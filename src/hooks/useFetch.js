import { useState, useEffect } from "react";
import instance from "../apiInstance/axios";

const useFetch = (api, method) => {
  const [data, setData] = useState([] );
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response;

        switch (method) {
          case "get":
            response = await instance.get(api);
            break;
          case "post":
            response = await instance.post(api);
            break;
          case "put":
            response = await instance.put(api);
            break;
          case "delete":
            response = await instance.delete(api);
            break;
          default:
            response = data;
        }

        setData(response?.data);
        setLoading(false);
      } catch (err) {
        console.error("ERROR: ", err);
        setError(true);
      }
    };

    fetchData();
  }, [api, method]);

  return [data, loading, error];
};

export default useFetch;
