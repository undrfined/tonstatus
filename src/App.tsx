import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";
import logo from "./images/logo.svg";

import Home from "./components/routes/Home";

import styles from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={classNames("app", styles.root)}>
      <img alt="Logo" className={styles.logo} src={logo} />
      <div className={styles.header}>
        The Open Network{" "}
        <span
          data-class="ReactTooltip-Custom"
          data-tip="All systems operational"
          className={styles.headerStatus}
        >
          Status
        </span>
      </div>
      <div className={styles.page}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <ReactTooltip backgroundColor="#00c853" />
    </div>
  );
};

export default App;
