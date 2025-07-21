import { useState } from "react";
import { CreditCard, Wallet, TrendingUp, DollarSign, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const cryptoOptions = [
  { symbol: "BTC", name: "Bitcoin", price: 67432.50, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: 3245.80, icon: "Ξ" },
  { symbol: "ADA", name: "Cardano", price: 0.485, icon: "₳" },
  { symbol: "MATIC", name: "Polygon", price: 0.923, icon: "⬟" },
  { symbol: "SOL", name: "Solana", price: 145.32, icon: "◎" },
  { symbol: "DOT", name: "Polkadot", price: 6.78, icon: "●" },
];

const paymentMethods = [
  { id: "card", name: "Credit/Debit Card", icon: CreditCard, fee: "2.5%" },
  { id: "bank", name: "Bank Transfer", icon: DollarSign, fee: "0.5%" },
  { id: "wallet", name: "Crypto Wallet", icon: Wallet, fee: "1.0%" },
];

export default function BuyCrypto() {
  const [selectedCrypto, setSelectedCrypto] = useState(cryptoOptions[0]);
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [paymentMethod, setPaymentMethod] = useState("card");

  const calculateCrypto = () => {
    if (!amount || !selectedCrypto) return "0";
    const cryptoAmount = parseFloat(amount) / selectedCrypto.price;
    return cryptoAmount.toFixed(8);
  };

  const calculateFees = () => {
    if (!amount) return "0";
    const method = paymentMethods.find(m => m.id === paymentMethod);
    const feePercentage = parseFloat(method?.fee.replace('%', '') || '0') / 100;
    return (parseFloat(amount) * feePercentage).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Buy Cryptocurrency</h1>
          <p className="text-muted-foreground">Purchase crypto with multiple payment methods</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Buy Form */}
          <div className="lg:col-span-2">
            <Card className="crypto-card">
              <div className="p-6">
                <Tabs defaultValue="buy" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="buy">Buy</TabsTrigger>
                    <TabsTrigger value="sell">Sell</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="buy" className="space-y-6 mt-6">
                    {/* Amount Input */}
                    <div className="space-y-4">
                      <div>
                        <Label className="text-foreground">You Pay</Label>
                        <div className="flex space-x-4 mt-2">
                          <div className="flex-1">
                            <Input
                              type="number"
                              placeholder="0.00"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              className="text-xl h-14"
                            />
                          </div>
                          <Select value={currency} onValueChange={setCurrency}>
                            <SelectTrigger className="w-24 h-14">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="USD">USD</SelectItem>
                              <SelectItem value="EUR">EUR</SelectItem>
                              <SelectItem value="GBP">GBP</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Conversion Arrow */}
                      <div className="flex justify-center">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <ArrowRight className="w-5 h-5 text-primary" />
                        </div>
                      </div>

                      {/* Crypto Selection */}
                      <div>
                        <Label className="text-foreground">You Get</Label>
                        <div className="flex space-x-4 mt-2">
                          <div className="flex-1">
                            <Input
                              type="text"
                              value={calculateCrypto()}
                              readOnly
                              className="text-xl h-14 bg-muted/20"
                            />
                          </div>
                          <Select 
                            value={selectedCrypto.symbol} 
                            onValueChange={(value) => setSelectedCrypto(cryptoOptions.find(c => c.symbol === value) || cryptoOptions[0])}
                          >
                            <SelectTrigger className="w-32 h-14">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {cryptoOptions.map((crypto) => (
                                <SelectItem key={crypto.symbol} value={crypto.symbol}>
                                  <div className="flex items-center space-x-2">
                                    <span>{crypto.icon}</span>
                                    <span>{crypto.symbol}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <p className="text-sm text-muted-foreground mt-2">
                          1 {selectedCrypto.symbol} = ${selectedCrypto.price.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    {/* Payment Methods */}
                    <div className="space-y-4">
                      <Label className="text-foreground">Payment Method</Label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {paymentMethods.map((method) => {
                          const Icon = method.icon;
                          return (
                            <div
                              key={method.id}
                              onClick={() => setPaymentMethod(method.id)}
                              className={`p-4 border rounded-lg cursor-pointer transition-smooth ${
                                paymentMethod === method.id
                                  ? 'border-primary bg-primary/5'
                                  : 'border-border hover:border-muted-foreground'
                              }`}
                            >
                              <div className="flex items-center space-x-3">
                                <Icon className="w-5 h-5 text-primary" />
                                <div>
                                  <p className="font-medium text-foreground">{method.name}</p>
                                  <p className="text-sm text-muted-foreground">Fee: {method.fee}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Transaction Summary */}
                    <div className="bg-muted/20 rounded-lg p-4 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Amount</span>
                        <span className="text-foreground">${amount || '0'}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Fees</span>
                        <span className="text-foreground">${calculateFees()}</span>
                      </div>
                      <div className="flex justify-between border-t border-border pt-3">
                        <span className="font-medium text-foreground">Total</span>
                        <span className="font-medium text-foreground">
                          ${(parseFloat(amount || '0') + parseFloat(calculateFees())).toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <Button className="w-full btn-crypto text-lg h-12" disabled={!amount}>
                      Buy {selectedCrypto.symbol}
                    </Button>
                  </TabsContent>

                  <TabsContent value="sell" className="space-y-6 mt-6">
                    <div className="text-center py-12">
                      <TrendingUp className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-foreground mb-2">Sell Your Crypto</h3>
                      <p className="text-muted-foreground">Convert your cryptocurrency back to fiat currency</p>
                      <Button className="mt-4 btn-success">
                        Start Selling
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Market Prices */}
            <Card className="crypto-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Market Prices</h3>
                <div className="space-y-4">
                  {cryptoOptions.slice(0, 4).map((crypto) => (
                    <div key={crypto.symbol} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary text-sm">{crypto.icon}</span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{crypto.symbol}</p>
                          <p className="text-xs text-muted-foreground">{crypto.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-foreground">${crypto.price.toLocaleString()}</p>
                        <p className="text-xs text-accent">+2.3%</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Security Notice */}
            <Card className="crypto-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">Security & Trust</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-sm text-muted-foreground">Bank-grade encryption</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-sm text-muted-foreground">Cold storage protection</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-sm text-muted-foreground">Regulated platform</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <p className="text-sm text-muted-foreground">24/7 monitoring</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}