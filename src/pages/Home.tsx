import { ArrowRight, Shield, Zap, Globe, TrendingUp, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const cryptoStats = [
  { name: "Bitcoin", symbol: "BTC", price: "$67,432.50", change: "+2.34%", positive: true },
  { name: "Ethereum", symbol: "ETH", price: "$3,245.80", change: "-0.89%", positive: false },
  { name: "Cardano", symbol: "ADA", price: "$0.485", change: "+5.67%", positive: true },
  { name: "Polygon", symbol: "MATIC", price: "$0.923", change: "+1.23%", positive: true },
];

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Your funds are protected with military-grade encryption and cold storage."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our advanced trading engine."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Trade cryptocurrencies 24/7 from anywhere in the world."
  },
  {
    icon: Users,
    title: "P2P Exchange",
    description: "Trade directly with other users through our secure peer-to-peer platform."
  }
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Crypto Trader",
    content: "CryptoX has the best interface I've used. Fast, secure, and reliable.",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "DeFi Investor",
    content: "The P2P exchange feature is game-changing. Love the low fees.",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Trade Crypto with
              <span className="block gradient-primary bg-clip-text text-transparent">
                Confidence
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join millions of users worldwide on the most secure and user-friendly cryptocurrency exchange. 
              Buy, sell, and trade digital assets with ease.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" className="btn-crypto text-lg px-8 py-6">
                  Start Trading Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Live Crypto Prices */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Live Crypto Prices</h2>
            <p className="text-muted-foreground">Real-time market data from top cryptocurrencies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cryptoStats.map((crypto) => (
              <Card key={crypto.symbol} className="crypto-card border-border/50 hover:border-primary/50 transition-smooth">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{crypto.name}</h3>
                    <p className="text-sm text-muted-foreground">{crypto.symbol}</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-2xl font-bold text-foreground">{crypto.price}</p>
                  <p className={`text-sm font-medium ${crypto.positive ? 'price-up' : 'price-down'}`}>
                    {crypto.change}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose CryptoX?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience the future of cryptocurrency trading with our cutting-edge platform
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="text-center group">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-bounce">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-2">10M+</h3>
              <p className="text-muted-foreground">Active Users</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-2">$50B+</h3>
              <p className="text-muted-foreground">Trading Volume</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-foreground mb-2">200+</h3>
              <p className="text-muted-foreground">Supported Coins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Join thousands of satisfied traders
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="crypto-card border-border/50 hover:border-primary/50 transition-smooth">
                <div className="flex items-center mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-current" />
                  ))}
                </div>
                <p className="text-foreground mb-6 text-lg">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Trading?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Join CryptoX today and experience the future of cryptocurrency trading
            </p>
            <Link to="/register">
              <Button size="lg" className="bg-white text-background hover:bg-white/90 text-lg px-8 py-6">
                Create Your Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}