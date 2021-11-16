import { FC } from "react";

import styles from "./Home.module.scss";
import WebserviceStatusCard from "../WebserviceStatusCard";
import useWebservices from "../../reducers/useWebservices";

const Home: FC = () => {
  const webservices = useWebservices();

  return (
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
  );
};

export default Home;
