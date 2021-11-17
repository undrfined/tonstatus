import { useEffect, useState } from "react";
import { getLiteservers, LiteserversPerformanceV1 } from "../api";

export default function useLiteservers(): LiteserversPerformanceV1 | null {
  const [liteservers, setLiteservers] =
    useState<LiteserversPerformanceV1 | null>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    getLiteservers().then((data) => {
      setLiteservers(data);
    });

    setTimeout(() => {
      setI(i + 1);
    }, 60 * 1000);
  }, [i]);

  return liteservers;
}
