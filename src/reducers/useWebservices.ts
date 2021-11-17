import { useEffect, useState } from "react";
import { getWebservices, ServicePerformanceV1 } from "../api";

export default function useWebservices(): ServicePerformanceV1[] {
  const [webservices, setWebservices] = useState<ServicePerformanceV1[]>([]);

  useEffect(() => {
    getWebservices().then((data) => {
      setWebservices(data);
    });
  }, []);

  return webservices;
}
