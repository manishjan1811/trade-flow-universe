import { useState, useRef } from "react";
import { Mail, Phone, MapPin, MessageCircle, Clock, Send, User, Building, Globe, Headphones, Zap, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { toast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    value: "Available 24/7",
    action: "Start Chat",
    color: "from-blue-500 to-cyan-500",
    response: "< 30 seconds"
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message",
    value: "support@cryptox.com",
    action: "Send Email",
    color: "from-purple-500 to-pink-500",
    response: "< 2 hours"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    value: "+1 (555) 123-4567",
    action: "Call Now",
    color: "from-green-500 to-emerald-500",
    response: "< 1 minute"
  }
];

const offices = [
  {
    city: "New York",
    country: "United States",
    address: "123 Wall Street, New York, NY 10005",
    phone: "+1 (555) 123-4567",
    timezone: "EST (UTC-5)",
    image: "🗽"
  },
  {
    city: "London",
    country: "United Kingdom", 
    address: "456 Canary Wharf, London E14 5AB, UK",
    phone: "+44 20 7123 4567",
    timezone: "GMT (UTC+0)",
    image: "🏰"
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "789 Marina Bay, Singapore 018956",
    phone: "+65 6123 4567",
    timezone: "SGT (UTC+8)",
    image: "🏙️"
  }
];

const supportFeatures = [
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance whenever you need help"
  },
  {
    icon: Globe,
    title: "Multi-language",
    description: "Support in 15+ languages for global accessibility"
  },
  {
    icon: Zap,
    title: "Fast Response",
    description: "Average response time under 30 seconds"
  },
  {
    icon: Shield,
    title: "Expert Team",
    description: "Crypto specialists with years of experience"
  }
];

function InteractiveContactCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      className={`perspective-1000 ${className}`}
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ duration: 0.3 }}
        style={{
          transform: "translateZ(50px)",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    category: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Message Sent Successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      category: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-16 md:py-32 lg:py-48 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full"
              style={{
                background: `linear-gradient(45deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1))`,
                filter: "blur(40px)",
              }}
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15 + i * 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              initial={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center"
          >
            <motion.h1 
              className="text-3xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 md:mb-8 px-4"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Contact{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                Support
              </span>
            </motion.h1>
            <motion.p 
              className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Need help? Our expert support team is here to assist you 24/7. 
              Choose your preferred method to get in touch with us.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
              Get in Touch
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Multiple ways to reach our expert support team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <InteractiveContactCard key={method.title} delay={index * 0.1}>
                  <Card className="crypto-card text-center hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                    <div className="p-4 md:p-8">
                      {/* Background gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                      
                      <motion.div
                        className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${method.color}`}
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 360,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 text-lg leading-relaxed">
                        {method.description}
                      </p>
                      <p className="font-medium text-foreground mb-2 text-lg">{method.value}</p>
                      <p className="text-sm text-accent mb-6">Response time: {method.response}</p>
                      
                      <Button 
                        className={`w-full hover:scale-105 transition-transform duration-300 bg-gradient-to-r ${method.color} text-white border-0`}
                        size="lg"
                      >
                        {method.action}
                      </Button>
                    </div>
                  </Card>
                </InteractiveContactCard>
              );
            })}
          </div>

          {/* Support Features */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {supportFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <InteractiveContactCard key={feature.title} delay={0.5 + index * 0.1}>
                  <Card className="crypto-card text-center p-3 md:p-6 hover:border-primary/50 transition-all duration-500 group">
                    <motion.div
                      className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </InteractiveContactCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Office Info */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Contact Form */}
            <InteractiveContactCard>
              <Card className="crypto-card">
                <div className="p-4 md:p-8">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                      <Send className="mr-3 w-8 h-8 text-primary" />
                      Send us a Message
                    </h2>
                    <p className="text-muted-foreground mb-8 leading-relaxed">
                      Fill out the form below and our team will get back to you within 24 hours.
                    </p>
                  </motion.div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="mt-2 transition-all duration-300 focus:scale-105"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          className="mt-2 transition-all duration-300 focus:scale-105"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="email" className="text-foreground">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="mt-2 transition-all duration-300 focus:scale-105"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="category" className="text-foreground">Category</Label>
                      <Select value={formData.category} onValueChange={(value) => setFormData({...formData, category: value})}>
                        <SelectTrigger className="mt-2 transition-all duration-300 focus:scale-105">
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
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="subject" className="text-foreground">Subject</Label>
                      <Input
                        id="subject"
                        placeholder="Brief description of your issue"
                        className="mt-2 transition-all duration-300 focus:scale-105"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <Label htmlFor="message" className="text-foreground">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Please provide detailed information about your inquiry..."
                        className="mt-2 min-h-[120px] transition-all duration-300 focus:scale-105"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 }}
                      viewport={{ once: true }}
                    >
                      <Button 
                        type="submit" 
                        className="w-full btn-crypto text-lg h-12 hover:scale-105 transition-transform duration-300"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Send className="w-5 h-5 mr-2" />
                          </motion.div>
                        ) : (
                          <Send className="w-5 h-5 mr-2" />
                        )}
                        {isSubmitting ? "Sending..." : "Send Message"}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </Card>
            </InteractiveContactCard>

            {/* Office Locations */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-foreground mb-6 flex items-center">
                  <MapPin className="mr-3 w-8 h-8 text-primary" />
                  Our Global Offices
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We have offices worldwide to serve you better. Reach out to your nearest location.
                </p>
              </motion.div>

              <div className="space-y-6">
                {offices.map((office, index) => (
                  <InteractiveContactCard key={office.city} delay={index * 0.1}>
                    <Card className="crypto-card hover:border-primary/50 transition-all duration-500 group">
                      <div className="p-6 relative overflow-hidden">
                        {/* Background gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <div className="flex items-start space-x-4 relative z-10">
                          <motion.div
                            className="text-4xl"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            {office.image}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                                {office.city}
                              </h3>
                              <span className="text-sm text-muted-foreground">{office.country}</span>
                            </div>
                            <p className="text-muted-foreground mb-2 leading-relaxed">{office.address}</p>
                            <div className="grid grid-cols-1 gap-2">
                              <div className="flex items-center space-x-2">
                                <Phone className="w-4 h-4 text-primary" />
                                <span className="text-sm text-foreground">{office.phone}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4 text-primary" />
                                <span className="text-sm text-foreground">{office.timezone}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </InteractiveContactCard>
                ))}
              </div>

              {/* FAQ Section */}
              <InteractiveContactCard delay={0.5}>
                <Card className="crypto-card relative overflow-hidden">
                  <div className="p-6 md:p-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="mb-8"
                    >
                      <div className="flex items-center mb-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center mr-4"
                        >
                          <Headphones className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                          Frequently Asked Questions
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        Quick answers to common questions about trading, security, and account management.
                      </p>
                    </motion.div>

                    <div className="space-y-4">
                      {[
                        {
                          question: "How do I start trading on CryptoX P2P?",
                          answer: "Simply create an account, complete the verification process, and you can start trading immediately. Browse available offers or create your own to begin peer-to-peer trading with verified users."
                        },
                        {
                          question: "Is my money safe during P2P trades?",
                          answer: "Yes, all funds are held in escrow until both parties complete the trade. This ensures your crypto is protected and only released when payment is confirmed."
                        },
                        {
                          question: "What payment methods are supported?",
                          answer: "We support over 100+ payment methods including bank transfers, UPI, PayPal, Wise, and many local payment options depending on your region."
                        },
                        {
                          question: "How long does verification take?",
                          answer: "Basic verification usually takes 5-10 minutes. Enhanced verification for higher limits may take 24-48 hours during business days."
                        },
                        {
                          question: "What are the trading fees?",
                          answer: "P2P trading on CryptoX is completely free! We don't charge any trading fees. You only pay the market price agreed with your trading partner."
                        }
                      ].map((faq, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="group"
                        >
                          <details className="border border-border rounded-xl hover:border-primary/50 transition-all duration-300 overflow-hidden">
                            <summary className="p-4 cursor-pointer select-none flex items-center justify-between bg-card/50 hover:bg-card transition-colors duration-300 group-hover:text-primary">
                              <span className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                                {faq.question}
                              </span>
                              <motion.span
                                className="text-primary ml-4 text-xl font-bold"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.2 }}
                              >
                                +
                              </motion.span>
                            </summary>
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                              className="p-4 pt-0 bg-card/30"
                            >
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </motion.div>
                          </details>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      viewport={{ once: true }}
                      className="mt-8 text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl border border-primary/20"
                    >
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        Still have questions?
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        Our support team is available 24/7 to help you
                      </p>
                      <Button className="btn-crypto hover:scale-105 transition-transform duration-300">
                        Contact Support
                      </Button>
                    </motion.div>
                  </div>
                </Card>
              </InteractiveContactCard>
            </div>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
              Support Availability
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { method: "Live Chat", hours: "24/7", color: "from-blue-500 to-cyan-500" },
                { method: "Email Support", hours: "24/7", color: "from-purple-500 to-pink-500" },
                { method: "Phone Support", hours: "6 AM - 12 AM EST", color: "from-green-500 to-emerald-500" }
              ].map((item, index) => (
                <InteractiveContactCard key={item.method} delay={index * 0.1}>
                  <Card className="crypto-card p-8 text-center hover:border-primary/50 transition-all duration-500 group">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-r ${item.color}`}
                      whileHover={{ scale: 1.1, rotateY: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Clock className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {item.method}
                    </h3>
                    <p className="text-2xl font-bold text-accent">{item.hours}</p>
                  </Card>
                </InteractiveContactCard>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}