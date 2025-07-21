import { Mail, Phone, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    value: "Available 24/7",
    action: "Start Chat"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    value: "support@cryptox.com",
    action: "Send Email"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    value: "+1 (555) 123-4567",
    action: "Call Now"
  }
];

const offices = [
  {
    city: "New York",
    address: "123 Wall Street, New York, NY 10005",
    phone: "+1 (555) 123-4567"
  },
  {
    city: "London",
    address: "456 Canary Wharf, London E14 5AB, UK",
    phone: "+44 20 7123 4567"
  },
  {
    city: "Singapore",
    address: "789 Marina Bay, Singapore 018956",
    phone: "+65 6123 4567"
  }
];

export default function Contact() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact <span className="gradient-primary bg-clip-text text-transparent">Support</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Need help? Our support team is here to assist you 24/7. 
            Choose your preferred method to get in touch.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method) => {
            const Icon = method.icon;
            return (
              <Card key={method.title} className="crypto-card text-center hover:border-primary/50 transition-smooth">
                <div className="p-8">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{method.title}</h3>
                  <p className="text-muted-foreground mb-4">{method.description}</p>
                  <p className="font-medium text-foreground mb-6">{method.value}</p>
                  <Button className="btn-crypto w-full">
                    {method.action}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="crypto-card">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="trading">Trading Support</SelectItem>
                      <SelectItem value="account">Account Issues</SelectItem>
                      <SelectItem value="security">Security Concerns</SelectItem>
                      <SelectItem value="verification">Verification Help</SelectItem>
                      <SelectItem value="technical">Technical Issues</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Brief description of your issue" className="mt-2" />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide detailed information about your inquiry..."
                    className="mt-2 min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full btn-crypto">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </Card>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Office Locations */}
            <Card className="crypto-card">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.city} className="border-l-4 border-primary pl-4">
                      <h4 className="font-medium text-foreground">{office.city}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{office.address}</p>
                      <p className="text-sm text-muted-foreground">{office.phone}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Support Hours */}
            <Card className="crypto-card">
              <div className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Support Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Live Chat</span>
                    <span className="text-foreground font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Email Support</span>
                    <span className="text-foreground font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Phone Support</span>
                    <span className="text-foreground font-medium">6 AM - 12 AM EST</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* FAQ Link */}
            <Card className="crypto-card bg-gradient-crypto">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Frequently Asked Questions
                </h3>
                <p className="text-white/80 mb-6">
                  Find quick answers to common questions about trading, security, and account management.
                </p>
                <Button variant="secondary" className="bg-white text-background hover:bg-white/90">
                  View FAQ
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}