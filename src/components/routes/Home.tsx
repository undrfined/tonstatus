import { FC } from "react";

import styles from "./Home.module.scss";
import WebserviceStatusCard from "../WebserviceStatusCard";
import useWebservices from "../../reducers/useWebservices";
import useTps from "../../reducers/useTps";
import useValidators from "../../reducers/useValidators";

const Home: FC = () => {
  const webservices = useWebservices();
  const tps = useTps();
  const validators = useValidators();

  return (
    <div>
      <div className={styles.statusGrid}>
        <div className={styles.statusInfo}>
          <div className={styles.statusInfoValue}>
            {Math.round(tps?.last.tps1minute ?? 0)}
          </div>
          <div className={styles.statusInfoName}>TPS (1 min)</div>
        </div>
        <div className={styles.statusInfo}>
          <div className={styles.statusInfoValue}>
            {Math.round(tps?.last.tps5minute ?? 0)}
          </div>
          <div className={styles.statusInfoName}>TPS (5 min)</div>
        </div>
        <div className={styles.statusInfo}>
          <div className={styles.statusInfoValue}>
            {Math.round(validators?.last.onlineValidators ?? 0)}
          </div>
          <div className={styles.statusInfoName}>Online validators</div>
        </div>
        <div className={styles.statusInfo}>
          <div className={styles.statusInfoValue}>
            {Math.round(validators?.last.totalValidators ?? 0)}
          </div>
          <div className={styles.statusInfoName}>Total validators</div>
        </div>
      </div>
      <div className={styles.home}>
        {webservices.length ? (
          webservices.map((webservice) => (
            <WebserviceStatusCard performance={webservice} />
          ))
        ) : (
          <>
            <WebserviceStatusCard />
            <WebserviceStatusCard />
            <WebserviceStatusCard />
            <WebserviceStatusCard />
            <WebserviceStatusCard />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
