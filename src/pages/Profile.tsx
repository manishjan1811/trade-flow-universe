import { useState } from "react";
import { User, Shield, Bell, CreditCard, Key, FileText, Download, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Profile() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    trading: true,
    security: true
  });

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile & Settings</h1>
          <p className="text-muted-foreground">Manage your account and security settings</p>
        </div>

        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="verification">Verification</TabsTrigger>
            <TabsTrigger value="preferences">Preferences</TabsTrigger>
          </TabsList>

          <TabsContent value="profile" className="space-y-6 mt-6">
            <Card className="crypto-card">
              <div className="p-6">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-10 h-10 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">John Doe</h3>
                    <p className="text-muted-foreground">john.doe@example.com</p>
                    <Badge className="mt-2">Verified User</Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" defaultValue="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" defaultValue="Doe" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" defaultValue="john.doe@example.com" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" defaultValue="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input id="country" defaultValue="United States" />
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <Input id="timezone" defaultValue="UTC-5 (EST)" />
                    </div>
                  </div>
                </div>

                <div className="flex space-x-4 mt-6">
                  <Button className="btn-crypto">Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-6 mt-6">
            <Card className="crypto-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security Settings
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Two-Factor Authentication</h4>
                      <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Badge className="bg-accent/10 text-accent">Enabled</Badge>
                      <Button variant="outline" size="sm">Configure</Button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Password</h4>
                      <p className="text-sm text-muted-foreground">Last changed 30 days ago</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Key className="w-4 h-4 mr-2" />
                      Change Password
                    </Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">Login Activity</h4>
                      <p className="text-sm text-muted-foreground">Monitor your account access</p>
                    </div>
                    <Button variant="outline" size="sm">View Activity</Button>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">API Keys</h4>
                      <p className="text-sm text-muted-foreground">Manage your trading API access</p>
                    </div>
                    <Button variant="outline" size="sm">Manage Keys</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="verification" className="space-y-6 mt-6">
            <Card className="crypto-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Identity Verification
                </h3>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-foreground">Personal Information</h4>
                        <Badge className="bg-accent/10 text-accent">Verified</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Your personal details have been verified and approved.
                      </p>
                      <Button variant="outline" size="sm" disabled>
                        Completed
                      </Button>
                    </div>

                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-foreground">Government ID</h4>
                        <Badge className="bg-accent/10 text-accent">Verified</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Your government-issued ID has been verified.
                      </p>
                      <Button variant="outline" size="sm" disabled>
                        Completed
                      </Button>
                    </div>

                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-foreground">Address Verification</h4>
                        <Badge variant="secondary">Pending</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Upload a utility bill or bank statement to verify your address.
                      </p>
                      <Button size="sm" className="btn-crypto">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload Document
                      </Button>
                    </div>

                    <div className="p-4 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-medium text-foreground">Enhanced Verification</h4>
                        <Badge variant="outline">Optional</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Increase your trading limits with enhanced verification.
                      </p>
                      <Button variant="outline" size="sm">
                        Start Process
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <h4 className="font-medium text-foreground mb-2">Verification Benefits</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Higher trading limits</li>
                      <li>• Lower transaction fees</li>
                      <li>• Access to advanced features</li>
                      <li>• Priority customer support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="preferences" className="space-y-6 mt-6">
            <Card className="crypto-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center">
                  <Bell className="w-5 h-5 mr-2" />
                  Notification Preferences
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Email Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive updates via email</p>
                    </div>
                    <Switch 
                      checked={notifications.email}
                      onCheckedChange={(checked) => setNotifications({...notifications, email: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">SMS Notifications</h4>
                      <p className="text-sm text-muted-foreground">Receive alerts via SMS</p>
                    </div>
                    <Switch 
                      checked={notifications.sms}
                      onCheckedChange={(checked) => setNotifications({...notifications, sms: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Push Notifications</h4>
                      <p className="text-sm text-muted-foreground">Browser push notifications</p>
                    </div>
                    <Switch 
                      checked={notifications.push}
                      onCheckedChange={(checked) => setNotifications({...notifications, push: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Trading Alerts</h4>
                      <p className="text-sm text-muted-foreground">Price alerts and trading updates</p>
                    </div>
                    <Switch 
                      checked={notifications.trading}
                      onCheckedChange={(checked) => setNotifications({...notifications, trading: checked})}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Security Alerts</h4>
                      <p className="text-sm text-muted-foreground">Login and security notifications</p>
                    </div>
                    <Switch 
                      checked={notifications.security}
                      onCheckedChange={(checked) => setNotifications({...notifications, security: checked})}
                    />
                  </div>
                </div>
              </div>
            </Card>

            <Card className="crypto-card">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6">Account Data</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Export Account Data</h4>
                      <p className="text-sm text-muted-foreground">Download your trading history and personal data</p>
                    </div>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-foreground">Delete Account</h4>
                      <p className="text-sm text-muted-foreground">Permanently delete your account and data</p>
                    </div>
                    <Button variant="destructive">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}