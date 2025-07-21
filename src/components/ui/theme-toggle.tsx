import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden border-primary/30 hover:border-primary hover:scale-105 transition-all duration-300"
    >
      <motion.div
        initial={{ scale: 1, rotate: 0 }}
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: theme === "dark" ? 180 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="relative"
      >
        <motion.div
          animate={{
            opacity: theme === "dark" ? 0 : 1,
            scale: theme === "dark" ? 0.5 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun className="h-4 w-4" />
        </motion.div>
        <motion.div
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            scale: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.3 }}
          className="flex items-center justify-center"
        >
          <Moon className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </Button>
  );
}