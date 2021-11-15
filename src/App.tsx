import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import classNames from "classnames";

import Home from "./components/routes/Home";

import styles from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={classNames("App", styles.root)}>
      <div className={styles.header}>TeamV TON Status</div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
