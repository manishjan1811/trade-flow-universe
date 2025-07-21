import { useState, useEffect } from "react";
import { ArrowRight, Shield, Zap, Globe, TrendingUp, Users, Star, Play, ChevronDown, Smartphone, Laptop, Award, BarChart3, Lock, Clock, CheckCircle, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CryptoHeroGeometric } from "@/components/ui/crypto-hero";

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
    items: ["TradingView Charts", "50+ Indicators", "Price Alerts", "Portfolio Analytics"],
    stats: { users: "2M+", accuracy: "94%", tools: "50+" },
    badge: "Most Popular",
    color: "primary"
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Trade on-the-go with our award-winning mobile app available on iOS and Android.",
    items: ["iOS & Android Apps", "Biometric Security", "Push Notifications", "Offline Mode"],
    stats: { downloads: "5M+", rating: "4.9", countries: "180+" },
    badge: "Editor's Choice",
    color: "accent"
  },
  {
    icon: Lock,
    title: "Institutional Security",
    description: "Bank-level security with multi-signature wallets and cold storage protection.",
    items: ["Multi-Sig Wallets", "Cold Storage", "Insurance Coverage", "SOC 2 Compliance"],
    stats: { secured: "$50B+", uptime: "99.9%", audits: "12+" },
    badge: "Enterprise Grade",
    color: "destructive"
  },
  {
    icon: Globe,
    title: "Global Liquidity",
    description: "Access deep liquidity across 200+ trading pairs with minimal slippage.",
    items: ["200+ Trading Pairs", "24/7 Trading", "Instant Settlement", "Cross-Chain Support"],
    stats: { volume: "$2B+", pairs: "200+", speed: "<1ms" },
    badge: "High Volume",
    color: "primary"
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
      {/* New Geometric Animated Hero Section */}
      <CryptoHeroGeometric />

      {/* Live Market Data with Enhanced Animations */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6">
              Live Market Data
            </h2>
            <p className="text-base md:text-xl text-muted-foreground px-4">Real-time prices from the world's top cryptocurrencies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {cryptoStats.map((crypto, index) => (
              <Card 
                 key={crypto.symbol} 
                className="crypto-card border-border/50 hover:border-primary/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 group cursor-pointer transform-gpu"
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animation: 'slideUp 0.6s ease-out forwards'
                }}
              >
                <div className="p-4 md:p-6 relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="flex items-center justify-between mb-6 relative z-10">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{crypto.name}</h3>
                      <p className="text-muted-foreground">{crypto.symbol}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <TrendingUp className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
                    </div>
                  </div>
                  <div className="space-y-3 relative z-10">
                    <p className="text-3xl font-bold text-foreground group-hover:scale-105 transition-transform duration-300">{crypto.price}</p>
                    <div className="flex items-center justify-between">
                      <span className={`flex items-center text-sm font-medium transition-all duration-300 ${crypto.positive ? 'price-up' : 'price-down'} group-hover:scale-105`}>
                        {crypto.positive ? <ArrowUpRight className="w-4 h-4 mr-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" /> : <ArrowDownRight className="w-4 h-4 mr-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform duration-300" />}
                        {crypto.change}
                      </span>
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">Vol: {crypto.volume}</span>
                    </div>
                  </div>
                  
                  {/* Animated border gradient */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-accent to-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Professional Features Section */}
      <section className="py-12 md:py-24 bg-card/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
              Professional Trading Tools
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Access institutional-grade features designed for serious traders and professional investors
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
            {advancedFeatures.map((feature, index) => {
              const Icon = feature.icon;
              const stats = Object.entries(feature.stats);
              
              return (
                <Card 
                  key={feature.title} 
                  className="crypto-card hover:border-primary/70 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20 group relative overflow-hidden cursor-pointer transform-gpu"
                  style={{ 
                    animationDelay: `${index * 150}ms`,
                    animation: 'slideUp 0.6s ease-out forwards'
                  }}
                >
                  {/* Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                      feature.color === 'primary' ? 'bg-primary/10 text-primary' :
                      feature.color === 'accent' ? 'bg-accent/10 text-accent' :
                      'bg-destructive/10 text-destructive'
                    }`}>
                      {feature.badge}
                    </div>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                    <Icon className="w-full h-full text-primary" />
                  </div>

                  <div className="p-4 md:p-8 relative z-10">
                    {/* Header Section */}
                    <div className="flex items-start space-x-6 mb-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-bounce ${
                        feature.color === 'primary' ? 'gradient-primary' :
                        feature.color === 'accent' ? 'bg-gradient-to-br from-accent to-accent/80' :
                        'bg-gradient-to-br from-destructive to-destructive/80'
                      }`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-foreground mb-3">{feature.title}</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">{feature.description}</p>
                      </div>
                    </div>

                    {/* Stats Section */}
                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {stats.map(([label, value]) => (
                        <div key={label} className="text-center p-4 bg-muted/20 rounded-lg hover:bg-muted/30 transition-smooth">
                          <div className={`text-2xl font-bold mb-1 ${
                            feature.color === 'primary' ? 'text-primary' :
                            feature.color === 'accent' ? 'text-accent' :
                            'text-destructive'
                          }`}>
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Features List */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {feature.items.map((item, itemIndex) => (
                        <div 
                          key={item} 
                          className="flex items-center space-x-3 p-3 bg-background/50 rounded-lg hover:bg-background/70 transition-smooth"
                          style={{ animationDelay: `${index * 150 + itemIndex * 50}ms` }}
                        >
                          <CheckCircle className={`w-4 h-4 ${
                            feature.color === 'primary' ? 'text-primary' :
                            feature.color === 'accent' ? 'text-accent' :
                            'text-destructive'
                          }`} />
                          <span className="text-sm font-medium text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="flex space-x-3">
                      <Button 
                        className={`flex-1 transition-smooth hover:scale-105 ${
                          feature.color === 'primary' ? 'btn-crypto' :
                          feature.color === 'accent' ? 'btn-success' :
                          'bg-destructive text-destructive-foreground hover:bg-destructive/90'
                        }`}
                      >
                        Learn More
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="icon" className="hover:scale-110 transition-bounce">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
                </Card>
              );
            })}
          </div>

          {/* Additional Features Grid */}
          <div className="mt-8 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {[
              { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance" },
              { icon: Award, title: "Award Winning", desc: "Industry recognition" },
              { icon: Users, title: "10M+ Users", desc: "Trusted globally" },
              { icon: Shield, title: "Insured Funds", desc: "$250M coverage" }
            ].map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <Card 
                  key={item.title}
                  className="crypto-card text-center hover:border-primary/50 transition-smooth hover:scale-105 group"
                  style={{ animationDelay: `${600 + index * 100}ms` }}
                >
                  <div className="p-3 md:p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:crypto-glow transition-smooth">
                      <ItemIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Trading Pairs Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-6 px-4">Popular Trading Pairs</h2>
            <p className="text-base md:text-xl text-muted-foreground px-4">Trade the most liquid cryptocurrency pairs</p>
          </div>
          <Card className="crypto-card overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group">
            <div className="p-4 md:p-8 relative">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="overflow-x-auto relative z-10">
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
                        className="border-b border-border/50 hover:bg-muted/20 transition-all duration-300 hover:scale-[1.01] cursor-pointer group/row"
                        style={{ 
                          animationDelay: `${index * 150}ms`,
                          animation: 'slideUp 0.6s ease-out forwards'
                        }}
                      >
                        <td className="py-6">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover/row:bg-primary/20 transition-all duration-300">
                              <span className="text-primary font-semibold text-xs">{pair.pair.split('/')[0]}</span>
                            </div>
                            <span className="font-semibold text-foreground text-lg group-hover/row:text-primary transition-colors duration-300">{pair.pair}</span>
                          </div>
                        </td>
                        <td className="text-right py-6">
                          <span className="font-medium text-foreground group-hover/row:scale-105 transition-transform duration-300 inline-block">${pair.price}</span>
                        </td>
                        <td className="text-right py-6">
                          <span className="price-up font-medium group-hover/row:scale-105 transition-transform duration-300 inline-block">+{pair.change}%</span>
                        </td>
                        <td className="text-right py-6">
                          <span className="text-muted-foreground group-hover/row:text-foreground transition-colors duration-300">${pair.volume}</span>
                        </td>
                        <td className="text-center py-6">
                          <Button size="sm" className="btn-crypto hover:scale-110 transition-transform duration-300">
                            Trade
                          </Button>
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