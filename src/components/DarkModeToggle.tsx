import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty("--mainBackgroundColor", "#111111");
      root.style.setProperty("--defaultTextColor", "#ffffff");

      localStorage.setItem("darkMode", "true");
    } else {
      root.style.setProperty("--mainBackgroundColor", "#ffffff");
      root.style.setProperty("--defaultTextColor", "#111111");

      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)} className="dark-mode-toggle">
      <span className="material-icons">
        {darkMode ? "brightness_7" : "brightness_4"}
      </span>
    </button>
  );
}
