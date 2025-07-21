import { useState, useEffect } from "react";
import { ArrowRight, DollarSign, TrendingUp, Users, Star, Shield, Zap, ArrowUpRight, ArrowDownRight, Clock, MessageCircle, Eye, Search, Filter, RefreshCw, Wallet, CreditCard, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

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
    <div className="min-h-screen bg-background">
      {/* Hero Section with Quick Trade */}
      <section className="py-8 md:py-16 bg-gradient-to-br from-background via-card/30 to-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Hero Content */}
            <div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6">
                Trade Crypto 
                <span className="gradient-primary bg-clip-text text-transparent block">
                  Peer-to-Peer
                </span>
              </h1>
              <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                Connect directly with traders worldwide. Zero fees, instant settlements, and bank-level security for all your crypto needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link to="/exchange">
                  <Button size="lg" className="btn-crypto w-full sm:w-auto">
                    Start Trading
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto">
                    Create Account
                  </Button>
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickStats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-3 bg-card/50 rounded-lg border">
                    <div className="text-lg md:text-xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                    <div className={`text-xs flex items-center justify-center mt-1 ${stat.positive ? 'text-green-500' : 'text-red-500'}`}>
                      {stat.positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
                      {stat.change}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Trade Panel */}
            <Card className="crypto-card">
              <div className="p-4 md:p-6">
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
                      <SelectTrigger>
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
                    />
                  </div>

                  <Link to="/exchange" className="block">
                    <Button className="btn-crypto w-full">
                      Find {orderType === "buy" ? "Sellers" : "Buyers"}
                      <Search className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Live Market Data */}
      <section className="py-8 md:py-16 bg-card/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Live Market</h2>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
          </div>
          
          <Card className="crypto-card overflow-hidden">
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
                  {liveMarketData.map((crypto) => (
                    <tr key={crypto.symbol} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
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
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Featured P2P Offers */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Featured P2P Offers</h2>
            <Link to="/exchange">
              <Button variant="outline">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {p2pOffers.map((offer) => (
              <Card key={offer.id} className="crypto-card hover:border-primary/50 transition-all duration-300">
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

                  <Button className="btn-crypto w-full mt-4">
                    {offer.type === "buy" ? "Sell to" : "Buy from"} {offer.trader}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-8 md:py-16 bg-card/20">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Why Choose CryptoX P2P?</h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Trade directly with real people using the payment methods you prefer
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
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
                <Card key={feature.title} className="crypto-card text-center p-3 md:p-4 hover:border-primary/50 transition-all duration-300">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Start Trading?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of traders already using CryptoX for secure P2P cryptocurrency exchange
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="btn-crypto">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/exchange">
              <Button size="lg" variant="outline">
                Browse Offers
                <Eye className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}