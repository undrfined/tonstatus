import { FC } from "react";

import { Provider } from "use-react-modal";
import styles from "./Home.module.scss";
import WebserviceStatusCard from "../WebserviceStatusCard";
import useWebservices from "../../reducers/useWebservices";
import useTps from "../../reducers/useTps";
import useValidators from "../../reducers/useValidators";
import useBlocks from "../../reducers/useBlocks";
import useLiteservers from "../../reducers/useLiteservers";
import Skeleton from "../Skeketon";

const Home: FC = () => {
  const webservices = useWebservices();
  const tps = useTps();
  const validators = useValidators();
  const blocks = useBlocks();
  const liteservers = useLiteservers();

  return (
    <div>
      {tps ? (
        <div className={styles.statusGrid}>
          <div
            data-tip={`Last update: ${new Date(
              tps?.last.date ?? 0
            ).toLocaleString()}`}
            data-background-color="var(--defaultTextColor)"
            data-text-color="var(--mainBackgroundColor)"
            className={styles.statusInfo}
          >
            <div className={styles.statusInfoValue}>
              {Math.round(tps?.last.tps1minute ?? 0)}
              {" / "}
              {Math.round(tps?.last.tps5minute ?? 0)}
              {" / "}
              {Math.round(tps?.last.tps15minute ?? 0)}
            </div>
            <div className={styles.statusInfoName}>TPS (1/5/15 min)</div>
          </div>
          <div
            data-tip={`Last update: ${new Date(
              validators?.last.date ?? 0
            ).toLocaleString()}`}
            data-background-color="var(--defaultTextColor)"
            data-text-color="var(--mainBackgroundColor)"
            className={styles.statusInfo}
          >
            <div className={styles.statusInfoValue}>
              {Math.round(validators?.last.onlineValidators ?? 0)}
              {" / "}
              {Math.round(validators?.last.totalValidators ?? 0)}
            </div>
            <div className={styles.statusInfoName}>
              Validators (online/total)
            </div>
          </div>
          <div
            data-tip={`Last update: ${new Date(
              blocks?.last.date ?? 0
            ).toLocaleString()}`}
            data-background-color="var(--defaultTextColor)"
            data-text-color="var(--mainBackgroundColor)"
            className={styles.statusInfo}
          >
            <div className={styles.statusInfoValue}>
              {Math.round(blocks?.last.blocks1minute ?? 0)}
              {" / "}
              {Math.round(blocks?.last.blocks5minute ?? 0)}
              {" / "}
              {Math.round(blocks?.last.blocks15minute ?? 0)}
            </div>
            <div className={styles.statusInfoName}>Blocks (1/5/15 min)</div>
          </div>
        </div>
      ) : (
        <div className={styles.statusGrid}>
          <div style={{ height: "100px", borderRadius: "12px" }}>
            <Skeleton />
          </div>
          <div style={{ height: "100px", borderRadius: "12px" }}>
            <Skeleton />
          </div>
          <div style={{ height: "100px", borderRadius: "12px" }}>
            <Skeleton />
          </div>
        </div>
      )}
      <div className={styles.home}>
        {webservices.length ? (
          webservices.map((webservice) => (
            <Provider background="rgba(0, 0, 0, 0.5)">
              <WebserviceStatusCard performance={webservice} />
            </Provider>
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
      {liteservers ? (
        <div className={styles.statusGrid}>
          <div
            data-tip={`Last update: ${new Date(
              liteservers?.last.date ?? 0
            ).toLocaleString()}`}
            data-background-color="var(--defaultTextColor)"
            data-text-color="var(--mainBackgroundColor)"
            className={styles.statusInfo}
          >
            <div className={styles.statusInfoValue}>
              {Math.round(liteservers?.last.averageResponseTime ?? 0)}ms
            </div>
            <div className={styles.statusInfoName}>
              Liteservers average response time
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.statusGrid}>
          <div style={{ height: "100px", borderRadius: "12px" }}>
            <Skeleton />
          </div>
        </div>
      )}
      {liteservers ? (
        <div className={styles.statusGrid}>
          <div className={styles.liteserversBlock}>
            <div className={styles.liteserversBlockTitle}>
              Online liteservers
            </div>
            <div className={styles.liteserversBlockData}>
              {liteservers?.last.online.map((item) => (
                <div className={styles.liteserversBlockDataItem}>{item}</div>
              ))}
            </div>
          </div>
          <div className={styles.liteserversBlock}>
            <div className={styles.liteserversBlockTitle}>
              Offline liteservers
            </div>
            <div className={styles.liteserversBlockData}>
              {liteservers?.last.offline.map((item) => (
                <div className={styles.liteserversBlockDataItem}>{item}</div>
              ))}
            </div>
          </div>
          <div className={styles.liteserversBlock}>
            <div className={styles.liteserversBlockTitle}>
              Out of sync liteservers
            </div>
            <div className={styles.liteserversBlockData}>
              {liteservers?.last.outOfSync.map((item) => (
                <div className={styles.liteserversBlockDataItem}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.statusGrid}>
          <div style={{ height: "400px", borderRadius: "12px" }}>
            <Skeleton />
          </div>
          <div style={{ height: "400px", borderRadius: "12px" }}>
            <Skeleton />
          </div>
          <div style={{ height: "400px", borderRadius: "12px" }}>
            <Skeleton />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
