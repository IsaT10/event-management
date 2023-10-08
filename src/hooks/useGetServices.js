import { useEffect, useState } from "react";

const useService = (id) => {
  const [services, setServices] = useState([]);
  const [service, setService] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();
        setServices(data);
        setLoading(false);
        setError("");
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data");
        setService(null);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const findDon = services.find((item) => item.id === Number(id));
    setService(findDon);
    setLoading(false);
  }, [services, id]);

  return { services, service, error, loading };
};

export default useService;
