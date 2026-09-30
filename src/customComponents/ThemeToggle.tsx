import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const theme = !dark;
    setDark(theme);
    document.documentElement.classList.toggle("dark", theme);
    localStorage.setItem("theme", theme ? "dark" : "light");
  }

  return (
    <Button
      variant="ghost"
      style={{ cursor: "pointer" }}
      size="icon"
      onClick={toggleTheme}
      aria-label={`Use ${dark ? "light" : "dark"} theme`}
    >
      {dark ? <Sun /> : <Moon />}
    </Button>
  );
};
