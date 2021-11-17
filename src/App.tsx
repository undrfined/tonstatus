import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";

import Home from "./components/routes/Home";

import styles from "./App.module.scss";
import Header from "./components/Header";
import DarkModeToggle from "./components/DarkModeToggle";

const App: FC = () => {
  return (
    <div className={classNames("app", styles.root)}>
      <Header />
      <DarkModeToggle />

      <div className={styles.page}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>

      <ReactTooltip backgroundColor="var(--successColor)" />
    </div>
  );
};

export default App;
