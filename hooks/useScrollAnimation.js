// hooks/useScrollAnimation.js

import { useRef } from 'react';
import { useInView } from 'framer-motion';

export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: 0.2,
    ...options
  });

  return { ref, inView };
};