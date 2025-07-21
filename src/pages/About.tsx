import { Shield, Users, Globe, TrendingUp, Award, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const stats = [
  { icon: Users, label: "Active Users", value: "10M+" },
  { icon: Globe, label: "Countries", value: "180+" },
  { icon: TrendingUp, label: "Trading Volume", value: "$50B+" },
  { icon: Award, label: "Years Experience", value: "8+" },
];

const features = [
  {
    icon: Shield,
    title: "Unmatched Security",
    description: "Multi-layered security with cold storage, insurance coverage, and advanced monitoring."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-performance trading engine."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Available in 180+ countries with local payment methods and 24/7 support."
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">CryptoX</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're building the future of finance through innovative cryptocurrency trading solutions. 
            Trusted by millions worldwide, CryptoX is your gateway to the digital economy.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe in democratizing access to financial opportunities through cryptocurrency. 
                Our platform empowers individuals and institutions to participate in the digital economy 
                with confidence and security.
              </p>
              <p className="text-lg text-muted-foreground">
                By combining cutting-edge technology with user-friendly design, we're making 
                cryptocurrency trading accessible to everyone, from beginners to professional traders.
              </p>
            </div>
            <div className="crypto-card p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Vision 2030</h3>
                  <p className="text-muted-foreground">
                    To become the world's most trusted cryptocurrency platform, 
                    serving 100 million users globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-muted-foreground">
              Industry-leading features that make cryptocurrency trading simple and secure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="crypto-card text-center">
                  <div className="p-8">
                    <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals from finance, technology, and cryptocurrency industries
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "CEO & Co-Founder", bg: "bg-primary/10" },
              { name: "Michael Chen", role: "CTO & Co-Founder", bg: "bg-accent/10" },
              { name: "David Rodriguez", role: "Head of Security", bg: "bg-destructive/10" }
            ].map((member) => (
              <Card key={member.name} className="crypto-card text-center">
                <div className="p-8">
                  <div className={`w-20 h-20 ${member.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Users className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Trusted by Millions Worldwide
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
            We're committed to maintaining the highest standards of security, transparency, 
            and regulatory compliance to earn and maintain your trust.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
            <div>
              <h3 className="text-2xl font-bold mb-2">Security First</h3>
              <p className="text-white/80">98% of funds stored in cold storage</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Regulated</h3>
              <p className="text-white/80">Licensed in multiple jurisdictions</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Insured</h3>
              <p className="text-white/80">Digital assets coverage up to $250M</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}