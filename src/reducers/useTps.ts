import { useEffect, useState } from "react";
import { getTps, TpsPerformanceV1 } from "../api";

export default function useTps(): TpsPerformanceV1 | null {
  const [tps, setTps] = useState<TpsPerformanceV1 | null>(null);

  useEffect(() => {
    getTps().then((data) => {
      setTps(data);
    });
  }, [tps]);

  return tps;
}
