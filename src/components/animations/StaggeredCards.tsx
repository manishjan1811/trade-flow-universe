import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';

interface StaggeredCardsProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggeredCards({ children, className = '', staggerDelay = 0.1 }: StaggeredCardsProps) {
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const item: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className={className}
    >
      {children.map((child, index) => (
        <motion.div key={index} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}