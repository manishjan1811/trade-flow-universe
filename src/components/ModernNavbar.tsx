import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TrendingUp, Wallet, ArrowRightLeft, History, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: TrendingUp },
  { name: "Buy Crypto", href: "/buy", icon: Wallet },
  { name: "Exchange", href: "/exchange", icon: ArrowRightLeft },
  { name: "Transactions", href: "/transactions", icon: History },
  { name: "Profile", href: "/profile", icon: Settings },
];

function ModernNavItem({ item, isActive, index }: { item: any; isActive: boolean; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [30, -30]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-30, 30]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative group perspective-1000"
    >
      <Link
        to={item.href}
        className={cn(
          "flex items-center space-x-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden",
          "transform-gpu hover:scale-105",
          isActive
            ? "text-primary bg-primary/10 shadow-lg shadow-primary/20"
            : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
        )}
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {/* 3D Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-xl opacity-0 group-hover:opacity-100"
          style={{
            transform: "translateZ(-10px)",
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
            opacity: isHovered ? 0.3 : 0,
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Icon with 3D effect */}
        <motion.div
          style={{
            transform: "translateZ(30px)",
          }}
          animate={{
            rotateY: isHovered ? [0, 360] : 0,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ 
            rotateY: { duration: 0.8, ease: "easeInOut" },
            scale: { duration: 0.3 }
          }}
        >
          <Icon className="w-4 h-4" />
        </motion.div>
        
        {/* Text with 3D effect */}
        <motion.span
          style={{
            transform: "translateZ(25px)",
          }}
          animate={{
            x: isHovered ? 5 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {item.name}
        </motion.span>
        
        {/* Active indicator */}
        {isActive && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 flex justify-center"
            style={{
              transform: "translateZ(40px)",
            }}
          >
            <motion.div
              className="w-6 h-0.5 bg-primary rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </motion.div>
        )}
      </Link>
    </motion.div>
  );
}

function Modern3DLogo() {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-100, 100], [15, -15]), {
    stiffness: 400,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-100, 100], [-15, 15]), {
    stiffness: 400,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className="perspective-1000"
    >
      <Link to="/" className="flex items-center space-x-3 group">
        <motion.div
          className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-accent to-primary overflow-hidden"
          style={{
            transform: "translateZ(30px)",
          }}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ 
            scale: { duration: 0.3 },
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10"
            animate={{
              rotate: isHovered ? 360 : 0,
            }}
            transition={{ duration: 2, ease: "linear", repeat: isHovered ? Infinity : 0 }}
          />
          
          {/* Modern geometric logo design */}
          <div className="absolute inset-2 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-white relative z-10" 
              style={{
                transform: "translateZ(10px)",
              }}
              viewBox="0 0 24 24" 
              fill="none"
            >
              {/* Central diamond */}
              <motion.path
                d="M12 2L7 7L12 12L17 7L12 2Z"
                fill="currentColor"
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0 }}
              />
              {/* Bottom diamond */}
              <motion.path
                d="M12 12L7 17L12 22L17 17L12 12Z"
                fill="currentColor"
                fillOpacity="0.7"
                animate={{
                  scale: isHovered ? [1, 0.8, 1] : 1,
                }}
                transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, delay: 0.2 }}
              />
              {/* Side accents */}
              <motion.circle
                cx="4"
                cy="12"
                r="2"
                fill="currentColor"
                fillOpacity="0.5"
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, delay: 0.4 }}
              />
              <motion.circle
                cx="20"
                cy="12"
                r="2"
                fill="currentColor"
                fillOpacity="0.5"
                animate={{
                  scale: isHovered ? [1, 1.5, 1] : 1,
                }}
                transition={{ duration: 0.8, repeat: isHovered ? Infinity : 0, delay: 0.4 }}
              />
            </svg>
          </div>
          
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            animate={{
              boxShadow: isHovered 
                ? "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(16, 185, 129, 0.3)"
                : "0 0 15px rgba(59, 130, 246, 0.2)"
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <motion.div
          style={{
            transform: "translateZ(20px)",
          }}
          className="flex flex-col"
        >
          <motion.span 
            className="text-xl font-bold relative"
            animate={{
              letterSpacing: isHovered ? "0.05em" : "0em",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 via-cyan-400 to-emerald-400 bg-clip-text text-transparent bg-size-200 animate-gradient-x">
              CryptoX
            </span>
          </motion.span>
          <motion.span 
            className="text-xs text-muted-foreground font-medium"
            animate={{
              opacity: isHovered ? 1 : 0.7,
            }}
            transition={{ duration: 0.3 }}
          >
            Exchange
          </motion.span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default function ModernNavbar({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isPublicRoute = ["/", "/about", "/login", "/register", "/contact"].includes(location.pathname);

  return (
    <div className="min-h-screen">
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-xl shadow-primary/5"
            : "bg-transparent"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        style={{
          perspective: "1000px",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo with 3D effect */}
            <Modern3DLogo />

            {/* Navigation Items */}
            {!isPublicRoute && (
              <div className="hidden md:flex items-center space-x-2">
                {navigation.map((item, index) => (
                  <ModernNavItem
                    key={item.name}
                    item={item}
                    isActive={location.pathname === item.href}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Public Route Navigation */}
            {isPublicRoute && (
              <div className="hidden md:flex items-center space-x-8">
                {[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                  { name: "Contact", href: "/contact" },
                ].map((item, index) => (
                  <ModernNavItem
                    key={item.name}
                    item={{ ...item, icon: TrendingUp }}
                    isActive={location.pathname === item.href}
                    index={index}
                  />
                ))}
              </div>
            )}

            {/* Theme Toggle & Auth Buttons / User Menu */}
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              {isPublicRoute ? (
                <motion.div
                  className="hidden md:flex items-center space-x-3"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <Link to="/login">
                    <Button 
                      variant="outline" 
                      className="hover:scale-105 transition-transform duration-300 border-primary/30 hover:border-primary backdrop-blur-sm"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="btn-crypto hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/30">
                      Get Started
                    </Button>
                  </Link>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Button 
                    size="icon" 
                    variant="ghost"
                    className="hover:scale-110 transition-transform duration-300 hover:bg-primary/10"
                  >
                    <User className="w-5 h-5" />
                  </Button>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              <motion.div
                className="md:hidden"
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="hover:scale-110 transition-transform duration-300"
                >
                  <motion.div
                    animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden"
          initial={false}
          animate={{
            height: mobileMenuOpen ? "auto" : 0,
            opacity: mobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          style={{ overflow: "hidden" }}
        >
          <div className="px-4 py-6 space-y-2 bg-background/95 backdrop-blur-xl border-t border-border/50">
            {(isPublicRoute 
              ? [{ name: "Home", href: "/", icon: TrendingUp }, { name: "About", href: "/about", icon: TrendingUp }, { name: "Contact", href: "/contact", icon: TrendingUp }]
              : navigation
            ).map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                    location.pathname === item.href
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              </motion.div>
            ))}
            
            {isPublicRoute && (
              <motion.div
                className="flex flex-col space-y-2 pt-4 border-t border-border/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <Link to="/login">
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/register">
                  <Button className="btn-crypto w-full">Get Started</Button>
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </motion.nav>

      {/* Content with proper padding */}
      <div className="pt-16">
        {children}
      </div>
    </div>
  );
}