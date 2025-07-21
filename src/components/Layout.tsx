import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, TrendingUp, Wallet, ArrowRightLeft, History, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: TrendingUp },
  { name: "Buy Crypto", href: "/buy", icon: Wallet },
  { name: "Exchange", href: "/exchange", icon: ArrowRightLeft },
  { name: "Transactions", href: "/transactions", icon: History },
  { name: "Profile", href: "/profile", icon: Settings },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isPublicRoute = ["/", "/about", "/login", "/register", "/contact"].includes(location.pathname);

  if (isPublicRoute) {
    return (
      <div className="min-h-screen crypto-bg">
        <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex items-center space-x-2">
                  <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-foreground">CryptoX</span>
                </Link>
              </div>

              <div className="hidden md:flex items-center space-x-8">
                <Link to="/" className="text-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
                  About
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
                <div className="flex items-center space-x-4">
                  <Link to="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button className="btn-crypto">Get Started</Button>
                  </Link>
                </div>
              </div>

              <div className="md:hidden flex items-center">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-border bg-card">
              <div className="px-4 py-6 space-y-4">
                <Link to="/" className="block text-foreground hover:text-primary">
                  Home
                </Link>
                <Link to="/about" className="block text-foreground hover:text-primary">
                  About
                </Link>
                <Link to="/contact" className="block text-foreground hover:text-primary">
                  Contact
                </Link>
                <div className="flex flex-col space-y-2 pt-4">
                  <Link to="/login">
                    <Button variant="outline" className="w-full">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button className="btn-crypto w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
        <main>{children}</main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/dashboard" className="flex items-center space-x-2">
                <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-foreground">CryptoX</span>
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center space-x-4">
              <Button size="icon" variant="ghost">
                <User className="w-5 h-5" />
              </Button>
              <div className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-card">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-smooth",
                      location.pathname === item.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
      <main>{children}</main>
    </div>
  );
}