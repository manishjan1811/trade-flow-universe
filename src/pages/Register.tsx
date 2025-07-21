import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Shield, ArrowRight, Check } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
          <p className="text-muted-foreground">Join millions of users on CryptoX</p>
        </div>

        <Card className="crypto-card">
          <div className="p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="mt-2"
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="mt-2"
                  required
                />
              </div>

              <div>
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <div className="relative mt-2">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a strong password"
                    className="pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <Label htmlFor="confirmPassword" className="text-foreground">Confirm Password</Label>
                <div className="relative mt-2">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className="pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I agree to the{" "}
                    <Link to="/terms" className="text-primary hover:text-primary/80">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy" className="text-primary hover:text-primary/80">
                      Privacy Policy
                    </Link>
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="marketing" className="mt-1" />
                  <Label htmlFor="marketing" className="text-sm text-muted-foreground">
                    I want to receive marketing updates and promotional offers
                  </Label>
                </div>
              </div>

              <Button type="submit" className="w-full btn-crypto text-lg h-12">
                Create Account
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:text-primary/80 font-medium transition-smooth">
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="font-medium text-foreground mb-4">Why choose CryptoX?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Industry-leading security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Low trading fees</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">24/7 customer support</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">200+ cryptocurrencies</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}