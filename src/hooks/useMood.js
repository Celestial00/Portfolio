import { useEffect, useState } from "react";

export default function useMood() {
  const [themeData, setThemeData] = useState(false); // always start in dark mode

  function toggleTheme() {
    setThemeData((prev) => !prev);
  }

  if (themeData) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }

  return [themeData, toggleTheme];
}
