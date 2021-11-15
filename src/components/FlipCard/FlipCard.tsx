import { FC, useState } from "react";
import ReactCardFlip from "react-card-flip";

import { AverageInfo, GraphInfo } from "../../types/types";

import styles from "./FlipCard.module.scss";

type OwnProps = {
  title: string | FC;
  averageInfo: AverageInfo;
  graphInfo?: GraphInfo;
};

const FlipCard: FC<OwnProps> = ({ title, averageInfo, graphInfo }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      containerClassName={styles.card}
    >
      <div className={styles.front}>
        <div className={styles.title}>{title}</div>
        <div className={styles.current}>
          <div className={styles.value}>{averageInfo.current}</div>
          <div className={styles.description}>Current</div>
        </div>
        <div className={styles.day}>
          <div className={styles.value}>{averageInfo.dayAverage}</div>
          <div className={styles.description}>Today average</div>
        </div>
        <div className={styles.month}>
          <div className={styles.value}>{averageInfo.monthAverage}</div>
          <div className={styles.description}>This month average</div>
        </div>
        <div className={styles.controls} onClick={() => setIsFlipped(true)}>
          Graph
        </div>
      </div>
      <div className={styles.back}>
        <img
          className={styles.image}
          src="https://memepedia.ru/wp-content/uploads/2019/06/stonks-template.png"
          alt="stonks"
        />
        <div className={styles.controls} onClick={() => setIsFlipped(false)}>
          Values
        </div>
      </div>
    </ReactCardFlip>
  );
};

FlipCard.defaultProps = {
  graphInfo: { dataset: [] },
};

export default FlipCard;
