import { useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div 
      className="relative flex items-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        onClick={toggleTheme}
        className="relative h-8 w-16 rounded-full border-2 border-primary/20 bg-secondary transition-all duration-300 hover:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/20"
      >
        {/* Track */}
        <motion.div
          className="absolute inset-1 rounded-full bg-gradient-to-r from-primary/10 to-accent/10"
          animate={{
            background: theme === "dark" 
              ? "linear-gradient(to right, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.2))"
              : "linear-gradient(to right, hsl(var(--accent) / 0.2), hsl(var(--primary) / 0.2))"
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Slider */}
        <motion.div
          className="absolute top-1 h-6 w-6 rounded-full bg-primary shadow-md flex items-center justify-center"
          animate={{
            x: theme === "dark" ? "calc(100% + 4px)" : "0px",
            rotate: isHovered ? 360 : 0,
          }}
          transition={{ 
            x: { duration: 0.3, ease: "easeInOut" },
            rotate: { duration: 0.6, ease: "easeInOut" }
          }}
        >
          <motion.div
            animate={{
              opacity: theme === "dark" ? 1 : 0,
              scale: theme === "dark" ? 1 : 0.3,
            }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Moon className="h-3 w-3 text-primary-foreground" />
          </motion.div>
          <motion.div
            animate={{
              opacity: theme === "dark" ? 0 : 1,
              scale: theme === "dark" ? 0.3 : 1,
            }}
            transition={{ duration: 0.2 }}
            className="absolute"
          >
            <Sun className="h-3 w-3 text-primary-foreground" />
          </motion.div>
        </motion.div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: isHovered 
              ? `0 0 20px hsl(var(--primary) / 0.3)`
              : `0 0 0px hsl(var(--primary) / 0.3)`
          }}
          transition={{ duration: 0.3 }}
        />
      </button>
    </div>
  );
}