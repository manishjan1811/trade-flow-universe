import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, Shield, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your CryptoX account</p>
        </div>

        <Card className="crypto-card">
          <div className="p-8">
            <form className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-foreground">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
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
                    placeholder="Enter your password"
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

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember" className="text-sm text-muted-foreground">
                    Remember me
                  </Label>
                </div>
                <Link to="/forgot-password" className="text-sm text-primary hover:text-primary/80 transition-smooth">
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full btn-crypto text-lg h-12">
                Sign In
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/register" className="text-primary hover:text-primary/80 font-medium transition-smooth">
                  Sign up here
                </Link>
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Bank-grade security</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">2FA protection available</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="w-4 h-4 text-accent" />
                  <span className="text-sm text-muted-foreground">Encrypted data transmission</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}