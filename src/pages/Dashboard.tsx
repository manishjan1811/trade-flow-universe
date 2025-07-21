import { useState } from "react";
import { TrendingUp, TrendingDown, Wallet, ArrowUpRight, ArrowDownRight, DollarSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const portfolioData = [
  { name: "Bitcoin", symbol: "BTC", amount: "0.5432", value: "$36,645.12", change: "+2.34%", positive: true },
  { name: "Ethereum", symbol: "ETH", amount: "12.8", value: "$41,546.24", change: "-0.89%", positive: false },
  { name: "Cardano", symbol: "ADA", amount: "2500", value: "$1,212.50", change: "+5.67%", positive: true },
  { name: "Polygon", symbol: "MATIC", amount: "890", value: "$821.47", change: "+1.23%", positive: true },
];

const recentTransactions = [
  { type: "buy", asset: "BTC", amount: "0.1234", value: "$8,324.50", time: "2 hours ago", status: "completed" },
  { type: "sell", asset: "ETH", amount: "2.5", value: "$8,114.50", time: "1 day ago", status: "completed" },
  { type: "buy", asset: "ADA", amount: "500", value: "$242.50", time: "2 days ago", status: "completed" },
  { type: "exchange", asset: "MATIC", amount: "100", value: "$92.30", time: "3 days ago", status: "pending" },
];

export default function Dashboard() {
  const [timeframe, setTimeframe] = useState("24h");

  const totalValue = portfolioData.reduce((acc, item) => acc + parseFloat(item.value.replace('$', '').replace(',', '')), 0);
  const totalChange = "+3.45%";
  const totalChangeValue = "+$2,847.32";

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Portfolio Dashboard</h1>
            <p className="text-muted-foreground">Track your crypto investments and performance</p>
          </div>
          <div className="flex space-x-2 mt-4 md:mt-0">
            {["24h", "7d", "1m", "1y"].map((period) => (
              <Button
                key={period}
                variant={timeframe === period ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeframe(period)}
              >
                {period}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="crypto-card col-span-1 md:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Total Portfolio Value</h2>
              <Wallet className="w-6 h-6 text-primary" />
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-4xl font-bold text-foreground">${totalValue.toLocaleString()}</p>
                <div className="flex items-center space-x-2 mt-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-accent font-medium">{totalChange}</span>
                  <span className="text-accent">({totalChangeValue})</span>
                </div>
              </div>
              <div className="bg-muted/30 h-32 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Portfolio Chart Placeholder</p>
              </div>
            </div>
          </Card>

          <Card className="crypto-card">
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">Quick Actions</h3>
              </div>
              <div className="space-y-3">
                <Button className="w-full btn-crypto">
                  <DollarSign className="w-4 h-4 mr-2" />
                  Buy Crypto
                </Button>
                <Button className="w-full btn-success">
                  <ArrowUpRight className="w-4 h-4 mr-2" />
                  Sell Assets
                </Button>
                <Button className="w-full" variant="outline">
                  <ArrowDownRight className="w-4 h-4 mr-2" />
                  Exchange
                </Button>
              </div>
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Portfolio Allocation</p>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>BTC</span>
                      <span>45.8%</span>
                    </div>
                    <Progress value={45.8} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>ETH</span>
                      <span>32.1%</span>
                    </div>
                    <Progress value={32.1} className="h-2" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Others</span>
                      <span>22.1%</span>
                    </div>
                    <Progress value={22.1} className="h-2" />
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Holdings */}
        <Card className="crypto-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Your Holdings</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-muted-foreground font-medium">Asset</th>
                  <th className="text-right py-3 text-muted-foreground font-medium">Holdings</th>
                  <th className="text-right py-3 text-muted-foreground font-medium">Value</th>
                  <th className="text-right py-3 text-muted-foreground font-medium">24h Change</th>
                  <th className="text-right py-3 text-muted-foreground font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {portfolioData.map((asset) => (
                  <tr key={asset.symbol} className="border-b border-border/50 hover:bg-muted/20 transition-smooth">
                    <td className="py-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-semibold text-sm">{asset.symbol}</span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{asset.name}</p>
                          <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                        </div>
                      </div>
                    </td>
                    <td className="text-right py-4">
                      <p className="font-medium text-foreground">{asset.amount}</p>
                      <p className="text-sm text-muted-foreground">{asset.symbol}</p>
                    </td>
                    <td className="text-right py-4">
                      <p className="font-medium text-foreground">{asset.value}</p>
                    </td>
                    <td className="text-right py-4">
                      <div className="flex items-center justify-end space-x-1">
                        {asset.positive ? (
                          <TrendingUp className="w-4 h-4 text-accent" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-destructive" />
                        )}
                        <span className={asset.positive ? "text-accent" : "text-destructive"}>
                          {asset.change}
                        </span>
                      </div>
                    </td>
                    <td className="text-right py-4">
                      <div className="flex space-x-2 justify-end">
                        <Button size="sm" variant="outline">Trade</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Recent Transactions */}
        <Card className="crypto-card">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-foreground">Recent Transactions</h2>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {recentTransactions.map((tx, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    tx.type === 'buy' ? 'bg-accent/10' : tx.type === 'sell' ? 'bg-destructive/10' : 'bg-primary/10'
                  }`}>
                    {tx.type === 'buy' ? (
                      <ArrowDownRight className={`w-5 h-5 ${tx.type === 'buy' ? 'text-accent' : 'text-destructive'}`} />
                    ) : tx.type === 'sell' ? (
                      <ArrowUpRight className="w-5 h-5 text-destructive" />
                    ) : (
                      <ArrowUpRight className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium text-foreground capitalize">{tx.type} {tx.asset}</p>
                    <p className="text-sm text-muted-foreground">{tx.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-foreground">{tx.value}</p>
                  <p className="text-sm text-muted-foreground">{tx.amount} {tx.asset}</p>
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  tx.status === 'completed' ? 'bg-accent/10 text-accent' : 'bg-yellow-500/10 text-yellow-500'
                }`}>
                  {tx.status}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}