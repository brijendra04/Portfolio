// Animation variants for Framer Motion
export const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
  transition: { duration: 0.5 }
};

export const slideIn = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  exit: { x: 100, opacity: 0 },
  transition: { duration: 0.5 }
};

// CSS animation class names
export const animationClasses = {
  fadeIn: 'animate-fadeIn',
  slideIn: 'animate-slideIn',
  bounce: 'animate-bounce-slow',
  gradient: 'animate-gradient',
  pulse: 'animate-pulse'
} as const;