import { useEffect, useState } from "react";
import { BlocksPerformanceV1, getBlocks } from "../api";

export default function useBlocks(): BlocksPerformanceV1 | null {
  const [blocks, setBlocks] = useState<BlocksPerformanceV1 | null>(null);
  const [i, setI] = useState(0);

  useEffect(() => {
    getBlocks().then((data) => {
      setBlocks(data);
    });

    setTimeout(() => {
      setI(i + 1);
    }, 60 * 1000);
  }, [i]);

  return blocks;
}
