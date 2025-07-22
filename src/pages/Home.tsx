import { useState, useEffect } from "react";
import { ArrowRight, DollarSign, TrendingUp, Users, Star, Shield, Zap, ArrowUpRight, ArrowDownRight, Clock, MessageCircle, Eye, Search, Filter, RefreshCw, Wallet, CreditCard, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { StaggeredCards } from '@/components/animations/StaggeredCards';
import { FloatingElement, PulsingElement } from '@/components/animations/FloatingElements';

const liveMarketData = [
  { symbol: "BTC", name: "Bitcoin", price: "$67,432.50", change: "+2.34%", positive: true, volume: "$28.5B", high24h: "$68,120", low24h: "$66,890" },
  { symbol: "ETH", name: "Ethereum", price: "$3,245.80", change: "-0.89%", positive: false, volume: "$14.2B", high24h: "$3,280", low24h: "$3,200" },
  { symbol: "USDT", name: "Tether", price: "$1.00", change: "+0.01%", positive: true, volume: "$45.2B", high24h: "$1.001", low24h: "$0.999" },
  { symbol: "BNB", name: "BNB", price: "$615.25", change: "+1.87%", positive: true, volume: "$2.1B", high24h: "$620", low24h: "$605" },
  { symbol: "ADA", name: "Cardano", price: "$0.485", change: "+5.67%", positive: true, volume: "$892M", high24h: "$0.492", low24h: "$0.458" },
  { symbol: "SOL", name: "Solana", price: "$145.32", change: "+3.45%", positive: true, volume: "$2.1B", high24h: "$148", low24h: "$142" },
];

const p2pOffers = [
  {
    id: 1,
    trader: "CryptoKing88",
    rating: 4.9,
    trades: 234,
    asset: "BTC",
    amount: "0.5 - 2.0",
    price: "$67,400",
    method: "Bank Transfer",
    type: "sell",
    verified: true,
    online: true,
    completionRate: "98%"
  },
  {
    id: 2,
    trader: "BitMaster",
    rating: 4.8,
    trades: 156,
    asset: "ETH",
    amount: "1.0 - 10.0",
    price: "$3,250",
    method: "UPI",
    type: "buy",
    verified: true,
    online: true,
    completionRate: "96%"
  },
  {
    id: 3,
    trader: "CoinTrader99",
    rating: 4.7,
    trades: 89,
    asset: "USDT",
    amount: "100 - 5000",
    price: "₹83.50",
    method: "IMPS",
    type: "sell",
    verified: false,
    online: true,
    completionRate: "94%"
  },
];

const quickStats = [
  { label: "24h Volume", value: "$2.8B", change: "+12.3%", positive: true },
  { label: "Active Traders", value: "45,672", change: "+8.9%", positive: true },
  { label: "P2P Orders", value: "1,234", change: "+23.1%", positive: true },
  { label: "Avg. Response", value: "2.3 min", change: "-15.2%", positive: true },
];

export default function Home() {
  const [selectedAsset, setSelectedAsset] = useState("BTC");
  const [orderType, setOrderType] = useState("buy");
  const [amount, setAmount] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section with Geometric Shapes */}
      <HeroGeometric 
        badge="CryptoTrade Pro"
        title1="Trade Crypto"
        title2="With Confidence"
      />

      {/* Live Market Data */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="py-8 md:py-16 bg-card/20 relative">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50" />
          
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="flex items-center justify-between mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Live Market</h2>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button variant="outline" size="sm" className="group">
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </motion.div>
                  Refresh
                </Button>
              </motion.div>
            </motion.div>
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="crypto-card overflow-hidden backdrop-blur-sm bg-card/80 border-primary/10">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-3 px-4 text-muted-foreground font-medium">Asset</th>
                        <th className="text-right py-3 px-4 text-muted-foreground font-medium">Price</th>
                        <th className="text-right py-3 px-4 text-muted-foreground font-medium">24h Change</th>
                        <th className="text-right py-3 px-4 text-muted-foreground font-medium hidden md:table-cell">24h Volume</th>
                        <th className="text-center py-3 px-4 text-muted-foreground font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {liveMarketData.map((crypto, index) => (
                        <motion.tr 
                          key={crypto.symbol} 
                          className="border-b border-border/50 hover:bg-muted/20 transition-colors"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          whileHover={{ 
                            backgroundColor: "rgba(0, 212, 255, 0.05)",
                            scale: 1.02,
                            transition: { duration: 0.2 }
                          }}
                        >
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                <span className="text-xs font-bold text-primary">{crypto.symbol}</span>
                              </div>
                              <div>
                                <div className="font-medium text-foreground">{crypto.symbol}</div>
                                <div className="text-xs text-muted-foreground hidden md:block">{crypto.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <div className="font-medium text-foreground">{crypto.price}</div>
                          </td>
                          <td className="py-4 px-4 text-right">
                            <span className={`flex items-center justify-end text-sm font-medium ${crypto.positive ? 'text-green-500' : 'text-red-500'}`}>
                              {crypto.positive ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                              {crypto.change}
                            </span>
                          </td>
                          <td className="py-4 px-4 text-right hidden md:table-cell">
                            <span className="text-sm text-muted-foreground">{crypto.volume}</span>
                          </td>
                          <td className="py-4 px-4 text-center">
                            <Button size="sm" variant="outline" className="text-xs">
                              Trade
                            </Button>
                          </td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>

      {/* Featured P2P Offers */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="py-8 md:py-16 relative">
          {/* Floating background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement delay={0} duration={6} intensity={30} className="absolute top-20 right-10">
              <div className="w-32 h-32 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-xl" />
            </FloatingElement>
            <FloatingElement delay={3} duration={8} intensity={20} className="absolute bottom-20 left-10">
              <div className="w-24 h-24 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg blur-xl rotate-45" />
            </FloatingElement>
          </div>
          
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="flex items-center justify-between mb-6 md:mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured P2P Offers</h2>
              <Link to="/exchange">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button variant="outline" className="group">
                    View All
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
            </motion.div>

            <StaggeredCards 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
              staggerDelay={0.15}
            >
              {p2pOffers.map((offer) => (
                <motion.div
                  key={offer.id}
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 5,
                    boxShadow: "0 20px 40px rgba(0, 212, 255, 0.15)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className="crypto-card hover:border-primary/50 transition-all duration-300 backdrop-blur-sm bg-card/80 group cursor-pointer">
                    <div className="p-3 md:p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-foreground">{offer.trader}</span>
                              {offer.verified && <Shield className="w-4 h-4 text-green-500" />}
                              <div className={`w-2 h-2 rounded-full ${offer.online ? 'bg-green-500' : 'bg-gray-400'}`} />
                            </div>
                            <div className="flex items-center space-x-2 mt-1">
                              <div className="flex items-center">
                                <Star className="w-3 h-3 text-yellow-500 fill-current" />
                                <span className="text-sm text-muted-foreground ml-1">{offer.rating}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">({offer.trades} trades)</span>
                            </div>
                          </div>
                        </div>
                        <Badge variant={offer.type === "buy" ? "default" : "secondary"}>
                          {offer.type.toUpperCase()}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Asset</span>
                          <span className="font-medium text-foreground">{offer.asset}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Amount</span>
                          <span className="font-medium text-foreground">{offer.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Price</span>
                          <span className="font-medium text-foreground">{offer.price}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Method</span>
                          <Badge variant="outline" className="text-xs">{offer.method}</Badge>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Success Rate</span>
                          <span className="text-sm font-medium text-green-500">{offer.completionRate}</span>
                        </div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button className="btn-crypto w-full mt-4 group">
                          {offer.type === "buy" ? "Sell to" : "Buy from"} {offer.trader}
                        </Button>
                      </motion.div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </StaggeredCards>
          </div>
        </section>
      </ScrollReveal>

      {/* Key Features */}
      <ScrollReveal direction="up" delay={0.2}>
        <section className="py-8 md:py-16 bg-card/20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              className="text-center mb-8 md:mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose CryptoX P2P?</h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
                Trade directly with real people using the payment methods you prefer
              </p>
            </motion.div>

            <StaggeredCards 
              className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
              staggerDelay={0.1}
            >
              {[
                {
                  icon: Shield,
                  title: "Escrow Protection",
                  description: "Your funds are secured in escrow until trade completion"
                },
                {
                  icon: Zap,
                  title: "Instant Settlement",
                  description: "Complete trades in minutes with real-time notifications"
                },
                {
                  icon: DollarSign,
                  title: "Zero Trading Fees",
                  description: "Trade without worrying about additional costs"
                },
                {
                  icon: Globe,
                  title: "Global Access",
                  description: "Trade with users from 180+ countries worldwide"
                }
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ 
                      scale: 1.05,
                      rotateY: 10,
                      boxShadow: "0 15px 30px rgba(0, 212, 255, 0.2)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="crypto-card text-center p-3 md:p-4 hover:border-primary/50 transition-all duration-300 backdrop-blur-sm bg-card/80 group cursor-pointer h-full">
                      <PulsingElement duration={2 + index * 0.5} scale={[1, 1.1]}>
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                        </div>
                      </PulsingElement>
                      <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </StaggeredCards>
          </div>
        </section>
      </ScrollReveal>

      {/* CTA Section */}
      <ScrollReveal direction="up" delay={0.1}>
        <section className="py-12 md:py-20 relative overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
          {/* Floating elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <FloatingElement delay={0} duration={5} intensity={25} className="absolute top-10 left-20">
              <div className="w-20 h-20 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl" />
            </FloatingElement>
            <FloatingElement delay={2} duration={7} intensity={20} className="absolute bottom-10 right-20">
              <div className="w-16 h-16 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-xl rotate-45" />
            </FloatingElement>
          </div>
          
          <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Ready to Start Trading?
            </motion.h2>
            <motion.p 
              className="text-base md:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Join thousands of traders on the most trusted P2P crypto platform
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link to="/register">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" className="btn-crypto px-8 group">
                    Get Started Today
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Button>
                </motion.div>
              </Link>
              <Link to="/about">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button size="lg" variant="outline" className="px-8">
                    Learn More
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}