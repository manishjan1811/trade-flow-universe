import { useState, useEffect } from "react";
import { ArrowRight, DollarSign, TrendingUp, Users, Star, Shield, Zap, ArrowUpRight, ArrowDownRight, Clock, MessageCircle, Eye, Search, Filter, RefreshCw, Wallet, CreditCard, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion';
import { GeometricBackground } from '@/components/3d/GeometricBackground';
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
      {/* Hero Section with 3D Background and Quick Trade */}
      <section className="relative py-6 md:py-12 lg:py-16 bg-gradient-to-br from-background via-card/20 to-background min-h-screen flex items-center">
        {/* Geometric Background Shapes */}
        <GeometricBackground />
        
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Mobile Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-center mb-10"
            >
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-4">
                  <span className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></span>
                  <span className="text-xs font-medium text-primary">Live Trading Platform</span>
                </div>
              </motion.div>

              <motion.h1 
                className="text-4xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Trade Crypto 
                <motion.span 
                  className="gradient-primary bg-clip-text text-transparent block mt-2 text-[2.5rem] font-extrabold"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Peer-to-Peer
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-muted-foreground mb-8 leading-relaxed px-4 text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Connect directly with trusted traders worldwide. Zero fees, instant settlements, and military-grade security.
              </motion.p>
              
              {/* Mobile Action Buttons - Professional Design */}
              <motion.div 
                className="space-y-4 mb-10 px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link to="/exchange">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative group"
                  >
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <Button variant="premium" size="xl" className="relative w-full">
                      <span className="mr-2">🚀</span>
                      Start Trading Now
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <ArrowRight className="w-5 h-5" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/register">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button variant="professional" size="lg" className="w-full">
                      <span className="mr-2">⚡</span>
                      Create Free Account
                    </Button>
                  </motion.div>
                </Link>

                <motion.div 
                  className="flex items-center justify-center gap-6 pt-4 text-xs text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1 text-accent" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-4 h-4 mr-1 text-accent" />
                    <span>Instant</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="w-4 h-4 mr-1 text-accent" />
                    <span>Zero Fees</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Mobile Quick Stats Grid - Enhanced */}
              <StaggeredCards className="grid grid-cols-2 gap-4 mb-10">
                {quickStats.map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    className="relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
                    <div className="relative bg-card/80 backdrop-blur-md rounded-xl p-5 border border-primary/10 text-center hover:bg-card/90 transition-all duration-300">
                      <PulsingElement duration={2 + index * 0.5}>
                        <div className="text-xl font-bold text-foreground mb-1">{stat.value}</div>
                      </PulsingElement>
                      <div className="text-xs text-muted-foreground mb-2">{stat.label}</div>
                      <motion.div 
                        className={`text-xs flex items-center justify-center font-medium ${stat.positive ? 'text-accent' : 'text-destructive'}`}
                        animate={{ 
                          scale: [1, 1.05, 1],
                        }}
                        transition={{ 
                          duration: 2,
                          delay: index * 0.2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                        {stat.change}
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </StaggeredCards>
            </motion.div>

            {/* Mobile Quick Trade Panel - Professional Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
              <Card className="relative crypto-card backdrop-blur-md bg-card/90 border-primary/30 shadow-2xl rounded-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-3">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground">Quick Trade</h3>
                        <p className="text-xs text-muted-foreground">Start trading in seconds</p>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant={orderType === "buy" ? "professional" : "outline"}
                        onClick={() => setOrderType("buy")}
                        className="w-full h-12 text-base font-medium"
                      >
                        <span className="mr-2">📈</span> Buy
                      </Button>
                      <Button 
                        variant={orderType === "sell" ? "professional" : "outline"}
                        onClick={() => setOrderType("sell")}
                        className="w-full h-12 text-base font-medium"
                      >
                        <span className="mr-2">📉</span> Sell
                      </Button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3 flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-primary" />
                        Choose Asset
                      </label>
                      <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                        <SelectTrigger className="h-14 text-base bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="backdrop-blur-md bg-card/90">
                          <SelectItem value="BTC">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center mr-2 text-xs font-bold text-white">₿</div>
                              Bitcoin (BTC)
                            </div>
                          </SelectItem>
                          <SelectItem value="ETH">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center mr-2 text-xs font-bold text-white">E</div>
                              Ethereum (ETH)
                            </div>
                          </SelectItem>
                          <SelectItem value="USDT">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mr-2 text-xs font-bold text-white">₮</div>
                              Tether (USDT)
                            </div>
                          </SelectItem>
                          <SelectItem value="BNB">
                            <div className="flex items-center">
                              <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center mr-2 text-xs font-bold text-white">B</div>
                              BNB (BNB)
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-3 flex items-center">
                        <Wallet className="w-4 h-4 mr-2 text-primary" />
                        Enter Amount
                      </label>
                      <div className="relative">
                        <Input
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          type="number"
                          className="h-14 text-lg text-center font-medium bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors pr-16"
                        />
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-sm text-muted-foreground font-medium">
                          {selectedAsset}
                        </div>
                      </div>
                    </div>

                    <Link to="/exchange" className="block">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="relative group"
                      >
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
                        <Button variant="premium" size="xl" className="relative w-full">
                          <Search className="mr-2 w-5 h-5" />
                          Find {orderType === "buy" ? "Sellers" : "Buyers"}
                          <motion.div
                            className="ml-2"
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </Button>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Desktop Layout - unchanged */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-left"
            >
              <motion.h1 
                className="text-5xl xl:text-6xl font-bold text-foreground mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Trade Crypto 
                <motion.span 
                  className="gradient-primary bg-clip-text text-transparent block"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Peer-to-Peer
                </motion.span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Connect directly with traders worldwide. Zero fees, instant settlements, and bank-level security.
              </motion.p>
              
              <motion.div 
                className="flex gap-4 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Link to="/exchange">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" className="btn-crypto group h-12 px-8">
                      Start Trading
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
                <Link to="/register">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Button size="lg" variant="outline" className="h-12 px-8">
                      Create Account
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              {/* Desktop Quick Stats */}
              <StaggeredCards 
                className="grid grid-cols-4 gap-4"
                staggerDelay={0.1}
              >
                {quickStats.map((stat, index) => (
                  <motion.div 
                    key={stat.label} 
                    className="text-center p-3 bg-card/60 rounded-lg border border-primary/10 backdrop-blur-sm hover:bg-card/80 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 6px 20px rgba(0, 212, 255, 0.1)"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  >
                    <PulsingElement duration={2 + index * 0.5}>
                      <div className="text-xl font-bold text-foreground leading-tight">{stat.value}</div>
                    </PulsingElement>
                    <div className="text-xs text-muted-foreground leading-tight mt-1">{stat.label}</div>
                    <motion.div 
                      className={`text-xs flex items-center justify-center mt-1 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}
                      animate={{ 
                        scale: [1, 1.05, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        delay: index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                      {stat.change}
                    </motion.div>
                  </motion.div>
                ))}
              </StaggeredCards>
            </motion.div>

            {/* Desktop Quick Trade Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="crypto-card backdrop-blur-sm bg-card/90 border-primary/20 shadow-2xl">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-foreground">Quick Trade</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {currentTime.toLocaleTimeString()}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <Button 
                        variant={orderType === "buy" ? "default" : "outline"}
                        onClick={() => setOrderType("buy")}
                        className="w-full"
                      >
                        Buy
                      </Button>
                      <Button 
                        variant={orderType === "sell" ? "default" : "outline"}
                        onClick={() => setOrderType("sell")}
                        className="w-full"
                      >
                        Sell
                      </Button>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Asset</label>
                      <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                        <SelectTrigger className="h-10">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                          <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                          <SelectItem value="USDT">Tether (USDT)</SelectItem>
                          <SelectItem value="BNB">BNB (BNB)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Amount</label>
                      <Input
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        type="number"
                        className="h-10"
                      />
                    </div>

                    <Link to="/exchange" className="block">
                      <Button className="btn-crypto w-full h-10">
                        Find {orderType === "buy" ? "Sellers" : "Buyers"}
                        <Search className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

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