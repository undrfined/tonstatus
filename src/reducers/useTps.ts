import { useEffect, useState } from "react";
import { getTps, TpsPerformanceV1 } from "../api";

export default function useTps(): TpsPerformanceV1 | null {
  const [tps, setTps] = useState<TpsPerformanceV1 | null>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    getTps().then((data) => {
      setTps(data);
    });

    setTimeout(() => {
      setI(i + 1);
    }, 60 * 1000);
  }, [i]);

  return tps;
}
