import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  intensity?: number;
  className?: string;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 3,
  intensity = 10,
  className = '',
}: FloatingElementProps) {
  return (
    <motion.div
      animate={{
        y: [-intensity, intensity, -intensity],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface PulsingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: [number, number];
  className?: string;
}

export function PulsingElement({
  children,
  delay = 0,
  duration = 2,
  scale = [1, 1.05],
  className = '',
}: PulsingElementProps) {
  return (
    <motion.div
      animate={{
        scale,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}