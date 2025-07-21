import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className="relative h-8 w-16 rounded-full bg-muted border border-border transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/20"
    >
      {/* Slider Track */}
      <motion.div
        className="absolute top-0.5 h-7 w-7 rounded-full bg-primary shadow-lg flex items-center justify-center"
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{ 
          duration: 0.3, 
          ease: "easeInOut" 
        }}
      >
        {/* Icons */}
        <motion.div
          animate={{
            opacity: isDark ? 0 : 1,
            rotate: isDark ? -180 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Sun className="h-4 w-4 text-primary-foreground" />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDark ? 1 : 0,
            rotate: isDark ? 0 : 180,
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <Moon className="h-4 w-4 text-primary-foreground" />
        </motion.div>
      </motion.div>
    </button>
  );
}