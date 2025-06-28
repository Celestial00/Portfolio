import { useEffect, useState } from "react";

export default function useMood() {
  const [themeData, setThemeData] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

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
