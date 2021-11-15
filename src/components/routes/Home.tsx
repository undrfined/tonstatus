import { FC, useState } from "react";
import { AverageInfo } from "../../types/types";
import FlipCard from "../FlipCard/FlipCard";

import styles from "./Home.module.scss";

const Home: FC = () => {
  const [someInfo, setSomeInfo] = useState<AverageInfo>({
    current: 10,
    dayAverage: 9.8,
    monthAverage: 9.6,
  });

  return (
    <div className={styles.home}>
      <FlipCard title="Foo" averageInfo={someInfo} />
      <FlipCard title="Bar" averageInfo={someInfo} />
      <FlipCard title="Money" averageInfo={someInfo} />
      <FlipCard title="Desperation" averageInfo={someInfo} />
      <FlipCard title="Time" averageInfo={someInfo} />
    </div>
  );
};

export default Home;
