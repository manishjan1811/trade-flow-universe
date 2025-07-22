import { useState, useRef, useEffect } from "react";
import { ShieldCheck, Users2, Earth, TrendingUp, Trophy, Zap, Crosshair, Rocket, StarIcon, ChevronRight, ArrowRight, PlayCircle, Lock, Clock, MapPin, Building2, Phone, Mail, UserCheck, Sparkles, CheckCircle, Crown, Database, Wifi } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const stats = [
  { icon: Users2, label: "Active Users", value: "10M+", description: "Trusted globally", color: "primary" },
  { icon: Earth, label: "Countries", value: "180+", description: "Worldwide presence", color: "accent" },
  { icon: TrendingUp, label: "Trading Volume", value: "$50B+", description: "Daily transactions", color: "destructive" },
  { icon: Trophy, label: "Years Experience", value: "8+", description: "Industry leadership", color: "primary" },
];

const features = [
  {
    icon: ShieldCheck,
    title: "Unmatched Security",
    description: "Multi-layered security with cold storage, insurance coverage, and advanced monitoring systems that protect your digital assets.",
    highlights: ["Cold Storage Protection", "Insurance Coverage", "24/7 Monitoring", "Multi-Sig Wallets"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast Performance", 
    description: "Execute trades in milliseconds with our high-performance trading engine built for professional traders worldwide.",
    highlights: ["Sub-millisecond execution", "99.9% Uptime", "Global infrastructure", "Real-time data"],
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Earth,
    title: "Global Accessibility",
    description: "Available in 180+ countries with local payment methods, multi-language support, and 24/7 customer service.",
    highlights: ["180+ Countries", "Local payments", "Multi-language", "24/7 Support"],
    color: "from-green-500 to-emerald-500"
  }
];

const team = [
  { 
    name: "Sarah Johnson", 
    role: "CEO & Co-Founder", 
    bg: "bg-gradient-to-br from-blue-500/20 to-cyan-500/20",
    description: "Former Goldman Sachs VP with 15+ years in fintech",
    achievements: ["Harvard MBA", "Forbes 40 Under 40", "Fintech Pioneer Award"]
  },
  { 
    name: "Michael Chen", 
    role: "CTO & Co-Founder", 
    bg: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    description: "Ex-Google Senior Engineer specializing in blockchain",
    achievements: ["MIT PhD", "Google Cloud Expert", "Blockchain Patents: 12"]
  },
  { 
    name: "David Rodriguez", 
    role: "Head of Security", 
    bg: "bg-gradient-to-br from-orange-500/20 to-red-500/20",
    description: "Former NSA cybersecurity specialist",
    achievements: ["Pentagon Clearance", "Security Expert", "White Hat Hacker"]
  }
];

const milestones = [
  { year: "2016", title: "Foundation", description: "CryptoX was founded with a vision to democratize crypto trading" },
  { year: "2018", title: "1M Users", description: "Reached our first million users milestone" },
  { year: "2020", title: "Global Expansion", description: "Expanded to 100+ countries worldwide" },
  { year: "2022", title: "$10B Volume", description: "Achieved $10B+ in daily trading volume" },
  { year: "2024", title: "Industry Leader", description: "Became the #1 trusted crypto exchange globally" },
];

function AnimatedCounter({ value, duration = 2 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
      const suffix = value.replace(/[0-9]/g, '');
      
      let start = 0;
      const increment = numericValue / (duration * 60);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start) + suffix);
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{displayValue}</span>;
}

function InteractiveCard({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
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

export default function About() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative py-16 md:py-32 lg:py-48 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 6 }).map((_, i) => (
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
                duration: 20 + i * 5,
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
              About{" "}
              <span className="gradient-primary bg-clip-text text-transparent">
                CryptoX
              </span>
            </motion.h1>
            <motion.p 
              className="text-base md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We're building the future of finance through innovative cryptocurrency trading solutions. 
              Trusted by millions worldwide, CryptoX is your gateway to the digital economy.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link to="/register">
                <Button size="lg" className="btn-crypto text-lg px-8 py-6 hover:scale-105 transition-transform duration-300">
                  Join CryptoX Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 hover:scale-105 transition-transform duration-300 border-primary/30 hover:border-primary">
                <PlayCircle className="mr-2 w-5 h-5" />
                Watch Our Story
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
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
              Trusted by Millions
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Our numbers speak for themselves. Join the largest crypto community in the world.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <InteractiveCard key={stat.label} delay={index * 0.1}>
                  <Card className="crypto-card text-center hover:border-primary/50 transition-all duration-500 group">
                    <div className="p-4 md:p-8">
                      <motion.div
                        className={`w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center ${
                          stat.color === 'primary' ? 'gradient-primary' :
                          stat.color === 'accent' ? 'bg-gradient-to-br from-accent to-accent/80' :
                          'bg-gradient-to-br from-destructive to-destructive/80'
                        }`}
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 360,
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:scale-110 transition-transform duration-300">
                        <AnimatedCounter value={stat.value} />
                      </h3>
                      <p className="text-lg font-medium text-foreground mb-2">{stat.label}</p>
                      <p className="text-sm text-muted-foreground">{stat.description}</p>
                    </div>
                  </Card>
                </InteractiveCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-8 px-4">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We believe in democratizing access to financial opportunities through cryptocurrency. 
                Our platform empowers individuals and institutions to participate in the digital economy 
                with confidence and security.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                By combining cutting-edge technology with user-friendly design, we're making 
                cryptocurrency trading accessible to everyone, from beginners to professional traders.
              </p>
              
              <div className="space-y-4">
                {["Democratize Finance", "Empower Traders", "Drive Innovation"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <InteractiveCard>
              <Card className="crypto-card p-6 md:p-12 text-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-24 h-24 gradient-primary rounded-3xl flex items-center justify-center mx-auto mb-8">
                    <Crosshair className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-6">Vision 2030</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    To become the world's most trusted cryptocurrency platform, 
                    serving 100 million users globally and setting the standard 
                    for security, innovation, and user experience.
                  </p>
                </motion.div>
              </Card>
            </InteractiveCard>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-gradient-to-b from-background to-card/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-20"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 px-4">
              What Sets Us Apart
            </h2>
            <p className="text-base md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Industry-leading features that make cryptocurrency trading simple, secure, and profitable
            </p>
          </motion.div>

          <div className="space-y-12 md:space-y-24">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={feature.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    isEven ? "" : "lg:grid-flow-col-dense"
                  }`}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={isEven ? "" : "lg:col-start-2"}>
                    <div className="flex items-center space-x-4 mb-8">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-r ${feature.color}`}
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-3xl font-bold text-foreground">{feature.title}</h3>
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {feature.highlights.map((highlight, idx) => (
                        <motion.div
                          key={highlight}
                          className="flex items-center space-x-3 p-4 bg-card/50 rounded-lg border border-border/50"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm font-medium text-foreground">{highlight}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <InteractiveCard className={isEven ? "lg:order-last" : ""}>
                    <Card className="crypto-card p-8 h-80 flex items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-5`}></div>
                      <motion.div
                        className="relative z-10 text-center"
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <motion.div
                          className={`w-24 h-24 mx-auto mb-4 rounded-3xl bg-gradient-to-r ${feature.color} flex items-center justify-center shadow-2xl`}
                          animate={{
                            rotateY: [0, 360],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Icon className="w-12 h-12 text-white" />
                        </motion.div>
                        <div className="space-y-2">
                          <div className={`h-2 bg-gradient-to-r ${feature.color} rounded-full mx-8 opacity-60`}></div>
                          <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mx-12 opacity-40`}></div>
                          <div className={`h-1 bg-gradient-to-r ${feature.color} rounded-full mx-16 opacity-20`}></div>
                        </div>
                      </motion.div>
                    </Card>
                  </InteractiveCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              From startup to industry leader - our milestones that shaped the crypto world
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-primary via-accent to-primary"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                    <InteractiveCard>
                      <Card className="crypto-card p-6 hover:border-primary/50 transition-all duration-500">
                        <div className="text-3xl font-bold text-primary mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-foreground mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </Card>
                    </InteractiveCard>
                  </div>
                  
                  {/* Timeline dot */}
                  <motion.div
                    className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg z-10"
                    whileHover={{ scale: 1.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-b from-card/30 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced professionals from finance, technology, and cryptocurrency industries leading the revolution
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <InteractiveCard key={member.name} delay={index * 0.2}>
                <Card className="crypto-card text-center hover:border-primary/50 transition-all duration-500 group overflow-hidden">
                  <div className="p-8">
                    <motion.div
                      className={`w-24 h-24 ${member.bg} rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden`}
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <Users2 className="w-12 h-12 text-foreground relative z-10" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="space-y-2">
                      {member.achievements.map((achievement, idx) => (
                        <motion.div
                          key={achievement}
                          className="flex items-center justify-center space-x-2"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <StarIcon className="w-3 h-3 text-accent fill-current" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </Card>
              </InteractiveCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-black/20 dark:bg-black/40"
          animate={{
            background: [
              "linear-gradient(45deg, hsl(var(--primary)/0.2), hsl(var(--accent)/0.2))",
              "linear-gradient(135deg, hsl(var(--accent)/0.2), hsl(var(--primary)/0.2))",
              "linear-gradient(225deg, hsl(var(--primary)/0.2), hsl(var(--accent)/0.2))",
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h2
            className="text-4xl md:text-6xl font-bold text-white mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Ready to Join the Revolution?
          </motion.h2>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join millions of traders who trust CryptoX for their cryptocurrency trading needs. 
            Start your journey today and experience the future of finance.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/register">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-8 hover:scale-105 transition-transform duration-300">
                Start Trading Now
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white dark:text-white border-white hover:bg-white hover:text-primary text-xl px-12 py-8 hover:scale-105 transition-transform duration-300">
                Contact Us
                <ChevronRight className="ml-3 w-6 h-6" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}