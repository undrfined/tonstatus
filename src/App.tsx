import React, { FC } from "react";
import { Link, Route, Routes } from "react-router-dom";
import CurrencyInput from "./components/CurrencyInput/CurrencyInput";
import styles from "./App.module.scss";

const App: FC = () => {
  return (
    <div className="App">
      Global
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.white}>
              Base route
              <Link to="/about">Other route</Link>
            </div>
          }
        />
        <Route path="about" element={<CurrencyInput />} />
      </Routes>
    </div>
  );
};

export default App;
