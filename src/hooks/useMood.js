import { useEffect, useState } from "react";

export default function useMood() {
  const [themeData, setThemeData] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark"; // defaults to false (light) if nothing is saved
  });

  const toggleTheme = () => {
    setThemeData((prev) => !prev);
  };

  useEffect(() => {
    if (themeData) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [themeData]);

  return [themeData, toggleTheme];
}
