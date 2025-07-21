import { useState } from "react";
import { Search, Filter, Download, ArrowUpRight, ArrowDownRight, Clock, CheckCircle, AlertCircle } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const transactions = [
  {
    id: "TXN001",
    type: "buy",
    asset: "BTC",
    amount: "0.5432",
    value: "$36,645.12",
    fee: "$91.61",
    status: "completed",
    date: "2024-01-15",
    time: "14:32:15",
    method: "Credit Card",
    txHash: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef12"
  },
  {
    id: "TXN002",
    type: "sell",
    asset: "ETH",
    amount: "2.8",
    value: "$9,088.24",
    fee: "$22.72",
    status: "completed",
    date: "2024-01-14",
    time: "09:15:42",
    method: "Bank Transfer",
    txHash: "0x2b3c4d5e6f7890abcdef1234567890abcdef1234"
  },
  {
    id: "TXN003",
    type: "exchange",
    asset: "ADA",
    amount: "1000",
    value: "$485.00",
    fee: "$4.85",
    status: "pending",
    date: "2024-01-15",
    time: "16:45:30",
    method: "P2P Exchange",
    txHash: "0x3c4d5e6f7890abcdef1234567890abcdef123456"
  },
  {
    id: "TXN004",
    type: "buy",
    asset: "MATIC",
    amount: "500",
    value: "$461.50",
    fee: "$11.54",
    status: "failed",
    date: "2024-01-13",
    time: "11:20:18",
    method: "PayPal",
    txHash: null
  },
  {
    id: "TXN005",
    type: "sell",
    asset: "SOL",
    amount: "15.2",
    value: "$2,208.86",
    fee: "$55.22",
    status: "completed",
    date: "2024-01-12",
    time: "13:08:44",
    method: "Bank Transfer",
    txHash: "0x4d5e6f7890abcdef1234567890abcdef12345678"
  }
];

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");

  const filteredTransactions = transactions.filter(tx => {
    const matchesSearch = tx.asset.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         tx.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || tx.status === statusFilter;
    const matchesType = typeFilter === "all" || tx.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-accent" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "failed":
        return <AlertCircle className="w-4 h-4 text-destructive" />;
      default:
        return null;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "buy":
        return <ArrowDownRight className="w-4 h-4 text-accent" />;
      case "sell":
        return <ArrowUpRight className="w-4 h-4 text-destructive" />;
      case "exchange":
        return <ArrowUpRight className="w-4 h-4 text-primary" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Transaction History</h1>
          <p className="text-muted-foreground">View and manage all your cryptocurrency transactions</p>
        </div>

        {/* Filters */}
        <Card className="crypto-card mb-6">
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Search</label>
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    placeholder="Search by asset or ID..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Status</label>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Type</label>
                <Select value={typeFilter} onValueChange={setTypeFilter}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="exchange">Exchange</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end space-x-2">
                <Button variant="outline" className="flex-1">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
                <Button variant="outline">
                  <Download className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Transaction List */}
        <Card className="crypto-card">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-foreground">Transactions</h2>
              <p className="text-sm text-muted-foreground">{filteredTransactions.length} transactions</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 text-muted-foreground font-medium">Transaction</th>
                    <th className="text-left py-4 text-muted-foreground font-medium">Asset</th>
                    <th className="text-right py-4 text-muted-foreground font-medium">Amount</th>
                    <th className="text-right py-4 text-muted-foreground font-medium">Value</th>
                    <th className="text-right py-4 text-muted-foreground font-medium">Fee</th>
                    <th className="text-center py-4 text-muted-foreground font-medium">Status</th>
                    <th className="text-left py-4 text-muted-foreground font-medium">Date</th>
                    <th className="text-center py-4 text-muted-foreground font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTransactions.map((tx) => (
                    <tr key={tx.id} className="border-b border-border/50 hover:bg-muted/20 transition-smooth">
                      <td className="py-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            tx.type === 'buy' ? 'bg-accent/10' : 
                            tx.type === 'sell' ? 'bg-destructive/10' : 'bg-primary/10'
                          }`}>
                            {getTypeIcon(tx.type)}
                          </div>
                          <div>
                            <p className="font-medium text-foreground capitalize">{tx.type}</p>
                            <p className="text-sm text-muted-foreground">{tx.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                            <span className="text-primary text-xs font-semibold">{tx.asset}</span>
                          </div>
                          <span className="font-medium text-foreground">{tx.asset}</span>
                        </div>
                      </td>
                      <td className="text-right py-4">
                        <p className="font-medium text-foreground">{tx.amount}</p>
                        <p className="text-sm text-muted-foreground">{tx.asset}</p>
                      </td>
                      <td className="text-right py-4">
                        <p className="font-medium text-foreground">{tx.value}</p>
                      </td>
                      <td className="text-right py-4">
                        <p className="text-muted-foreground">{tx.fee}</p>
                      </td>
                      <td className="text-center py-4">
                        <div className="flex items-center justify-center space-x-2">
                          {getStatusIcon(tx.status)}
                          <Badge 
                            variant={tx.status === 'completed' ? 'default' : 
                                   tx.status === 'pending' ? 'secondary' : 'destructive'}
                          >
                            {tx.status}
                          </Badge>
                        </div>
                      </td>
                      <td className="py-4">
                        <div>
                          <p className="font-medium text-foreground">{tx.date}</p>
                          <p className="text-sm text-muted-foreground">{tx.time}</p>
                        </div>
                      </td>
                      <td className="text-center py-4">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredTransactions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No transactions found matching your criteria</p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}