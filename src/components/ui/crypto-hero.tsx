"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Circle, TrendingUp, Shield, Zap, ArrowRight, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function CryptoShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-primary/[0.15]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-primary/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(59,130,246,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function CryptoHeroGeometric({
    badge = "CryptoX Exchange",
    title1 = "The Future of",
    title2 = "Crypto Trading",
    subtitle = "Join 10M+ traders worldwide on the most advanced cryptocurrency exchange platform with institutional-grade tools and bank-level security.",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    subtitle?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden crypto-bg">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-accent/[0.05] blur-3xl" />

            {/* Animated shapes */}
            <div className="absolute inset-0 overflow-hidden">
                <CryptoShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-primary/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <CryptoShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-accent/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <CryptoShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-destructive/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <CryptoShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-primary/[0.25]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <CryptoShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-accent/[0.25]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/[0.5] border border-primary/[0.2] mb-8 md:mb-12 backdrop-blur-sm"
                    >
                        <Circle className="h-2 w-2 fill-primary" />
                        <span className="text-sm text-foreground/80 tracking-wide font-medium">
                            {badge}
                        </span>
                    </motion.div>

                    {/* Main title */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/80">
                                {title1}
                            </span>
                            <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.6 }}
                    >
                        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed font-light tracking-wide max-w-3xl mx-auto px-4">
                            {subtitle}
                        </p>
                    </motion.div>

                    {/* Feature highlights */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap justify-center gap-6 mb-12"
                    >
                        {[
                            { icon: TrendingUp, text: "Advanced Analytics" },
                            { icon: Shield, text: "Bank Security" },
                            { icon: Zap, text: "Lightning Fast" }
                        ].map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div 
                                    key={feature.text}
                                    className="flex items-center space-x-2 px-4 py-2 bg-card/30 rounded-full border border-primary/20 backdrop-blur-sm"
                                >
                                    <Icon className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium text-foreground">{feature.text}</span>
                                </div>
                            );
                        })}
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.0 }}
                        className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
                    >
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">$50B+</div>
                            <div className="text-sm text-muted-foreground">Trading Volume</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-accent mb-2">10M+</div>
                            <div className="text-sm text-muted-foreground">Active Users</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
                            <div className="text-sm text-muted-foreground">Uptime</div>
                        </div>
                    </motion.div>

                    {/* Action Buttons - Integrated in Hero */}
                    <motion.div
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
                    >
                        <Link to="/register">
                            <Button size="lg" className="btn-crypto text-xl px-12 py-8 crypto-glow hover:scale-110 transition-bounce group backdrop-blur-sm">
                                <span className="group-hover:animate-pulse">Start Trading Now</span>
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </Link>
                        <Button size="lg" variant="outline" className="text-xl px-12 py-8 hover:scale-105 transition-bounce border-primary/30 hover:border-primary group backdrop-blur-sm bg-card/20">
                            <Play className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                            Watch Demo
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/80 pointer-events-none" />
        </div>
    );
}

export { CryptoHeroGeometric };