import { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Users, Star, Play, ChevronDown, Smartphone, Laptop, Award, BarChart3, Lock, Clock, CheckCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const cryptoStats = [
  { name: "Bitcoin", symbol: "BTC", price: "$67,432.50", change: "+2.34%", positive: true, volume: "$28.5B" },
  { name: "Ethereum", symbol: "ETH", price: "$3,245.80", change: "-0.89%", positive: false, volume: "$14.2B" },
  { name: "Cardano", symbol: "ADA", price: "$0.485", change: "+5.67%", positive: true, volume: "$892M" },
  { name: "Polygon", symbol: "MATIC", price: "$0.923", change: "+1.23%", positive: true, volume: "$445M" },
  { name: "Solana", symbol: "SOL", price: "$145.32", change: "+3.45%", positive: true, volume: "$2.1B" },
  { name: "Chainlink", symbol: "LINK", price: "$14.87", change: "-1.12%", positive: false, volume: "$587M" },
];

const advancedFeatures = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Professional trading tools with real-time charts, technical indicators, and market analysis.",
    items: ["TradingView Charts", "50+ Indicators", "Price Alerts", "Portfolio Analytics"]
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Trade on-the-go with our award-winning mobile app available on iOS and Android.",
    items: ["iOS & Android Apps", "Biometric Security", "Push Notifications", "Offline Mode"]
  },
  {
    icon: Lock,
    title: "Institutional Grade Security",
    description: "Bank-level security with multi-signature wallets and cold storage protection.",
    items: ["Multi-Sig Wallets", "Cold Storage", "Insurance Coverage", "SOC 2 Compliance"]
  },
  {
    icon: Globe,
    title: "Global Liquidity",
    description: "Access deep liquidity across 200+ trading pairs with minimal slippage.",
    items: ["200+ Trading Pairs", "24/7 Trading", "Instant Settlement", "Cross-Chain Support"]
  }
];

const tradingPairs = [
  { pair: "BTC/USDT", price: "67,432.50", change: "+2.34", volume: "28.5B" },
  { pair: "ETH/USDT", price: "3,245.80", change: "-0.89", volume: "14.2B" },
  { pair: "ADA/USDT", price: "0.485", change: "+5.67", volume: "892M" },
  { pair: "SOL/USDT", price: "145.32", change: "+3.45", volume: "2.1B" },
];

const testimonials = [
  {
    name: "Sarah Johnson", role: "Professional Trader", company: "Goldman Sachs",
    content: "CryptoX provides institutional-grade tools that I need for serious trading. The execution speed is unmatched.",
    rating: 5, avatar: "SJ"
  },
  {
    name: "Mike Chen", role: "DeFi Investor", company: "Blockchain Capital",
    content: "The P2P exchange feature revolutionized how I trade. Low fees and excellent security make it my go-to platform.",
    rating: 5, avatar: "MC"
  },
  {
    name: "Emily Rodriguez", role: "Crypto Enthusiast", company: "Independent",
    content: "Started as a beginner and CryptoX's educational resources helped me become a confident trader.",
    rating: 5, avatar: "ER"
  }
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const words = ["Crypto Trading", "DeFi Investing", "P2P Exchange", "Digital Assets"];
  
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const word = words[currentWord];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < word.length) {
          setDisplayText(word.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWord((currentWord + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentWord, words]);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Enhanced Animated Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center crypto-bg overflow-hidden">
        {/* Floating particles background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-accent/30 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-primary/40 rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-accent/20 rounded-full animate-pulse delay-700"></div>
        </div>
        
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Staggered Animation Container */}
          <div className="space-y-8">
            {/* Main Title with Split Animation */}
            <div className="overflow-hidden">
              <h1 className="text-6xl md:text-8xl font-bold text-foreground leading-tight">
                <span className="inline-block animate-fade-in" style={{ animationDelay: "0.2s" }}>
                  The Future of
                </span>
              </h1>
            </div>
            
            {/* Typewriter Effect Section */}
            <div className="overflow-hidden">
              <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="gradient-primary bg-clip-text text-transparent">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </h2>
            </div>

            {/* Animated Description */}
            <div className="overflow-hidden">
              <p 
                className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                Join <span className="text-accent font-semibold">10M+</span> traders worldwide on the most advanced cryptocurrency exchange. 
                <br />
                <span className="text-primary font-medium">Trade with confidence</span> using institutional-grade tools and bank-level security.
              </p>
            </div>

            {/* Animated Features Pills */}
            <div 
              className="flex flex-wrap justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "1.2s" }}
            >
              {["Lightning Fast", "Bank Security", "24/7 Trading", "200+ Coins"].map((feature, index) => (
                <div 
                  key={feature}
                  className="px-6 py-3 bg-card/50 border border-primary/20 rounded-full text-foreground font-medium hover:border-primary/50 transition-smooth hover:scale-105"
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                >
                  {feature}
                </div>
              ))}
            </div>

            {/* Call to Action Buttons */}
            <div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in"
              style={{ animationDelay: "1.8s" }}
            >
              <Link to="/register">
                <Button size="lg" className="btn-crypto text-xl px-12 py-8 crypto-glow hover:scale-110 transition-bounce group">
                  <span className="group-hover:animate-pulse">Start Trading Now</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-xl px-12 py-8 hover:scale-105 transition-bounce border-primary/30 hover:border-primary group">
                <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats Counter Animation */}
            <div 
              className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-8 animate-fade-in"
              style={{ animationDelay: "2.2s" }}
            >
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">$50B+</div>
                <div className="text-sm text-muted-foreground">Volume</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10M+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>
          
          {/* Animated Scroll Indicator */}
          <div 
            className="mt-20 animate-fade-in"
            style={{ animationDelay: "2.6s" }}
          >
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 mx-auto text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground mt-2">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* Live Market Data with Animations */}
      <section className="py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Live Market Data
            </h2>
            <p className="text-xl text-muted-foreground">Real-time prices from the world's top cryptocurrencies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cryptoStats.map((crypto, index) => (
              <Card 
                key={crypto.symbol} 
                className="crypto-card border-border/50 hover:border-primary/50 transition-smooth hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{crypto.name}</h3>
                      <p className="text-muted-foreground">{crypto.symbol}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:crypto-glow transition-smooth">
                      <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-3xl font-bold text-foreground">{crypto.price}</p>
                    <div className="flex items-center justify-between">
                      <span className={`flex items-center text-sm font-medium ${crypto.positive ? 'price-up' : 'price-down'}`}>
                        {crypto.positive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                        {crypto.change}
                      </span>
                      <span className="text-sm text-muted-foreground">Vol: {crypto.volume}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Professional Trading Tools
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access institutional-grade features designed for serious traders
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="crypto-card hover:border-primary/50 transition-smooth hover:scale-102 group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-4">{feature.title}</h3>
                        <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{feature.description}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {feature.items.map((item) => (
                            <div key={item} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-accent" />
                              <span className="text-sm text-muted-foreground">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trading Pairs Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Popular Trading Pairs</h2>
            <p className="text-xl text-muted-foreground">Trade the most liquid cryptocurrency pairs</p>
          </div>
          <Card className="crypto-card overflow-hidden">
            <div className="p-8">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 text-muted-foreground font-medium">Pair</th>
                      <th className="text-right py-4 text-muted-foreground font-medium">Price</th>
                      <th className="text-right py-4 text-muted-foreground font-medium">24h Change</th>
                      <th className="text-right py-4 text-muted-foreground font-medium">Volume</th>
                      <th className="text-center py-4 text-muted-foreground font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tradingPairs.map((pair, index) => (
                      <tr 
                        key={pair.pair} 
                        className="border-b border-border/50 hover:bg-muted/20 transition-smooth"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <td className="py-6">
                          <span className="font-semibold text-foreground text-lg">{pair.pair}</span>
                        </td>
                        <td className="text-right py-6">
                          <span className="font-medium text-foreground">${pair.price}</span>
                        </td>
                        <td className="text-right py-6">
                          <span className="price-up font-medium">+{pair.change}%</span>
                        </td>
                        <td className="text-right py-6">
                          <span className="text-muted-foreground">${pair.volume}</span>
                        </td>
                        <td className="text-center py-6">
                          <Button size="sm" className="btn-crypto">Trade</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Trusted Globally</h2>
            <p className="text-xl text-white/80">Join millions of users who trust CryptoX</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="group hover:scale-110 transition-bounce">
              <h3 className="text-5xl font-bold mb-4 group-hover:text-accent transition-smooth">10M+</h3>
              <p className="text-white/80 text-lg">Active Users</p>
            </div>
            <div className="group hover:scale-110 transition-bounce">
              <h3 className="text-5xl font-bold mb-4 group-hover:text-accent transition-smooth">$50B+</h3>
              <p className="text-white/80 text-lg">Trading Volume</p>
            </div>
            <div className="group hover:scale-110 transition-bounce">
              <h3 className="text-5xl font-bold mb-4 group-hover:text-accent transition-smooth">200+</h3>
              <p className="text-white/80 text-lg">Cryptocurrencies</p>
            </div>
            <div className="group hover:scale-110 transition-bounce">
              <h3 className="text-5xl font-bold mb-4 group-hover:text-accent transition-smooth">99.9%</h3>
              <p className="text-white/80 text-lg">Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">Join thousands of satisfied traders worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="crypto-card border-border/50 hover:border-primary/50 transition-smooth hover:scale-105 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-accent fill-current" />
                    ))}
                  </div>
                  <p className="text-foreground mb-8 text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Start Trading?
          </h2>
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join CryptoX today and experience the future of cryptocurrency trading with advanced tools and unmatched security.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-background hover:bg-white/90 text-xl px-12 py-8 hover:scale-105 transition-bounce">
                Create Your Account
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            <Link to="/login">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-background text-xl px-12 py-8 hover:scale-105 transition-bounce">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}