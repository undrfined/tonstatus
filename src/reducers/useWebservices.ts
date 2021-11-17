import { useEffect, useState } from "react";
import { getWebservices, ServicePerformanceV1 } from "../api";

export default function useWebservices(): ServicePerformanceV1[] {
  const [webservices, setWebservices] = useState<ServicePerformanceV1[]>([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    getWebservices().then((data) => {
      setWebservices(data);
    });

    setTimeout(() => {
      setI(i + 1);
    }, 60 * 1000);
  }, [i]);

  return webservices;
}
