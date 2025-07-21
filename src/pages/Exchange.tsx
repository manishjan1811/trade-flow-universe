import { useState } from "react";
import { Users, Filter, Search, Star, Shield, Clock, ArrowUpDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const p2pOffers = [
  {
    id: 1,
    trader: "CryptoKing88",
    rating: 4.9,
    trades: 234,
    asset: "BTC",
    price: 67500,
    min: 100,
    max: 5000,
    method: "Bank Transfer",
    verified: true,
    online: true
  },
  {
    id: 2,
    trader: "BitMaster",
    rating: 4.8,
    trades: 156,
    asset: "ETH",
    price: 3250,
    min: 50,
    max: 2000,
    method: "PayPal",
    verified: true,
    online: true
  },
  {
    id: 3,
    trader: "CoinTrader99",
    rating: 4.7,
    trades: 89,
    asset: "BTC",
    price: 67400,
    min: 200,
    max: 10000,
    method: "Credit Card",
    verified: false,
    online: false
  },
  {
    id: 4,
    trader: "BlockchainPro",
    rating: 5.0,
    trades: 312,
    asset: "ADA",
    price: 0.49,
    min: 10,
    max: 500,
    method: "Bank Transfer",
    verified: true,
    online: true
  }
];

const myOrders = [
  {
    id: "ORD001",
    type: "buy",
    asset: "BTC",
    amount: "0.5",
    price: 67300,
    status: "active",
    created: "2 hours ago"
  },
  {
    id: "ORD002", 
    type: "sell",
    asset: "ETH",
    amount: "2.0",
    price: 3280,
    status: "completed",
    created: "1 day ago"
  }
];

export default function Exchange() {
  const [selectedAsset, setSelectedAsset] = useState("BTC");
  const [orderType, setOrderType] = useState("buy");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOffers = p2pOffers.filter(offer => 
    offer.asset === selectedAsset && 
    offer.trader.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background p-3 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-2 px-2">P2P Exchange</h1>
          <p className="text-muted-foreground px-2">Trade cryptocurrencies directly with other users</p>
        </div>

        <Tabs defaultValue="marketplace" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="marketplace">Marketplace</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
            <TabsTrigger value="create">Create Order</TabsTrigger>
          </TabsList>

          <TabsContent value="marketplace" className="space-y-4 md:space-y-6 mt-4 md:mt-6">
            {/* Filters */}
            <Card className="crypto-card">
              <div className="p-4 md:p-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Asset</label>
                    <Select value={selectedAsset} onValueChange={setSelectedAsset}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                        <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                        <SelectItem value="ADA">Cardano (ADA)</SelectItem>
                        <SelectItem value="MATIC">Polygon (MATIC)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Order Type</label>
                    <Select value={orderType} onValueChange={setOrderType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="buy">Buy</SelectItem>
                        <SelectItem value="sell">Sell</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Search Trader</label>
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                      <Input
                        placeholder="Search by username..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex items-end">
                    <Button variant="outline" className="w-full">
                      <Filter className="w-4 h-4 mr-2" />
                      More Filters
                    </Button>
                  </div>
                </div>
              </div>
            </Card>

            {/* P2P Offers */}
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-lg md:text-xl font-semibold text-foreground px-2">Available Offers</h2>
              {filteredOffers.map((offer) => (
                <Card key={offer.id} className="crypto-card hover:border-primary/50 transition-smooth">
                  <div className="p-4 md:p-6">
                    <div className="grid grid-cols-1 md:grid-cols-6 gap-3 md:gap-4 items-center">
                      {/* Trader Info */}
                      <div className="md:col-span-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-foreground">{offer.trader}</span>
                              {offer.verified && (
                                <Shield className="w-4 h-4 text-accent" />
                              )}
                              <div className={`w-2 h-2 rounded-full ${offer.online ? 'bg-accent' : 'bg-muted-foreground'}`} />
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
                      </div>

                      {/* Asset & Price */}
                      <div>
                        <p className="text-sm text-muted-foreground">Asset</p>
                        <p className="font-medium text-foreground">{offer.asset}</p>
                      </div>

                      {/* Price */}
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-medium text-foreground">${offer.price.toLocaleString()}</p>
                      </div>

                      {/* Limits */}
                      <div>
                        <p className="text-sm text-muted-foreground">Limits</p>
                        <p className="font-medium text-foreground">${offer.min} - ${offer.max.toLocaleString()}</p>
                      </div>

                      {/* Action */}
                      <div className="flex flex-col space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {offer.method}
                        </Badge>
                        <Button 
                          className="btn-crypto w-full"
                          disabled={!offer.online}
                        >
                          {orderType === "buy" ? "Buy" : "Sell"} {offer.asset}
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-4 md:space-y-6 mt-4 md:mt-6">
            <Card className="crypto-card">
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">My P2P Orders</h3>
                <div className="space-y-3 md:space-y-4">
                  {myOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          order.type === 'buy' ? 'bg-accent/10' : 'bg-destructive/10'
                        }`}>
                          <ArrowUpDown className={`w-5 h-5 ${
                            order.type === 'buy' ? 'text-accent' : 'text-destructive'
                          }`} />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            {order.type.toUpperCase()} {order.amount} {order.asset}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Order #{order.id} • {order.created}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">${order.price.toLocaleString()}</p>
                        <Badge 
                          variant={order.status === 'active' ? 'default' : 'secondary'}
                          className="mt-1"
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="create" className="space-y-4 md:space-y-6 mt-4 md:mt-6">
            <Card className="crypto-card">
              <div className="p-4 md:p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 md:mb-6">Create P2P Order</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Order Type</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select order type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buy">Buy</SelectItem>
                          <SelectItem value="sell">Sell</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Asset</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select asset" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="BTC">Bitcoin (BTC)</SelectItem>
                          <SelectItem value="ETH">Ethereum (ETH)</SelectItem>
                          <SelectItem value="ADA">Cardano (ADA)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Amount</label>
                      <Input placeholder="0.00" type="number" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Price per unit</label>
                      <Input placeholder="0.00" type="number" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Payment Method</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select payment method" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="bank">Bank Transfer</SelectItem>
                          <SelectItem value="paypal">PayPal</SelectItem>
                          <SelectItem value="card">Credit Card</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Time Limit (minutes)</label>
                      <Input placeholder="30" type="number" />
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Button className="btn-crypto w-full md:w-auto">
                    Create Order
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}