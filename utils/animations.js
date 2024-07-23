import { Variants } from 'framer-motion';

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  }
};

export const slideInLeft = {
  hidden: { x: -30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const slideInRight = {
  hidden: { x: 30, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

export const slideInTop = {
  hidden: { y: -30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};