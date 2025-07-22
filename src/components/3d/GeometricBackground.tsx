import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
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
            className={cn("absolute pointer-events-none", className)}
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
                        "backdrop-blur-[2px] border-2 border-white/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(255,255,255,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

export function GeometricBackground() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 blur-3xl" />
            
            {/* Main shapes - visible on all screens with proper scaling */}
            <ElegantShape
                delay={0.3}
                width={600}
                height={140}
                rotate={8}
                gradient="from-primary/20"
                className="left-[-15%] sm:left-[-10%] md:left-[-5%] top-[10%] sm:top-[15%] md:top-[20%]"
            />

            <ElegantShape
                delay={0.5}
                width={500}
                height={120}
                rotate={-12}
                gradient="from-accent/20"
                className="right-[-10%] sm:right-[-5%] md:right-[0%] top-[65%] sm:top-[70%] md:top-[75%]"
            />

            {/* Additional shapes for larger screens */}
            <ElegantShape
                delay={0.4}
                width={300}
                height={80}
                rotate={-6}
                gradient="from-violet-500/18"
                className="hidden sm:block left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
            />

            <ElegantShape
                delay={0.6}
                width={200}
                height={60}
                rotate={15}
                gradient="from-amber-500/18"
                className="hidden md:block right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
            />

            <ElegantShape
                delay={0.7}
                width={150}
                height={40}
                rotate={-20}
                gradient="from-cyan-500/15"
                className="hidden lg:block left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
            />

            {/* Extra desktop shapes for more visual impact */}
            <ElegantShape
                delay={0.8}
                width={250}
                height={65}
                rotate={25}
                gradient="from-emerald-500/15"
                className="hidden xl:block right-[5%] bottom-[15%]"
            />

            <ElegantShape
                delay={1.0}
                width={180}
                height={45}
                rotate={-30}
                gradient="from-rose-500/15"
                className="hidden xl:block left-[35%] top-[8%]"
            />
        </div>
    );
}