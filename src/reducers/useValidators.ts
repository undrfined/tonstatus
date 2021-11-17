import { useEffect, useState } from "react";
import { getValidators, ValidatorsPerformanceV1 } from "../api";

export default function useValidators(): ValidatorsPerformanceV1 | null {
  const [validators, setValidators] = useState<ValidatorsPerformanceV1 | null>(
    null
  );
  const [i, setI] = useState(0);

  useEffect(() => {
    getValidators().then((data) => {
      setValidators(data);
    });

    setTimeout(() => {
      setI(i + 1);
    }, 60 * 1000);
  }, [i]);

  return validators;
}
