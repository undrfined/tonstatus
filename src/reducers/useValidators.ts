import { useEffect, useState } from "react";
import { getValidators, ValidatorsPerformanceV1 } from "../api";

export default function useValidators(): ValidatorsPerformanceV1 | null {
  const [validators, setValidators] = useState<ValidatorsPerformanceV1 | null>(
    null
  );

  useEffect(() => {
    getValidators().then((data) => {
      setValidators(data);
    });
  }, []);

  return validators;
}
