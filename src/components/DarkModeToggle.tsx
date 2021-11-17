import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.style.setProperty("--mainBackgroundColor", "#111111");
      root.style.setProperty("--defaultTextColor", "#ffffff");
    } else {
      root.style.setProperty("--mainBackgroundColor", "#ffffff");
      root.style.setProperty("--defaultTextColor", "#111111");
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
