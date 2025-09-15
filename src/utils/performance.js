// Performance monitoring utilities
export const performanceMonitor = {
  // Measure component render time
  measureRender: (componentName) => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      const renderTime = end - start;
      if (renderTime > 16) { // More than one frame (16ms)
        console.warn(`Slow render detected in ${componentName}: ${renderTime.toFixed(2)}ms`);
      }
    };
  },

  // Measure image load time
  measureImageLoad: (imageSrc) => {
    const start = performance.now();
    return () => {
      const end = performance.now();
      const loadTime = end - start;
      if (loadTime > 1000) { // More than 1 second
        console.warn(`Slow image load detected: ${imageSrc} took ${loadTime.toFixed(2)}ms`);
      }
    };
  },

  // Log performance metrics
  logMetrics: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0];
      console.log('Performance Metrics:', {
        'DOM Content Loaded': navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        'Page Load Complete': navigation.loadEventEnd - navigation.loadEventStart,
        'Total Page Load': navigation.loadEventEnd - navigation.fetchStart
      });
    }
  }
};

// Intersection Observer for performance optimization
export const createIntersectionObserver = (callback, options = {}) => {
  const defaultOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  return new IntersectionObserver(callback, defaultOptions);
};

// Debounce utility for performance
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Throttle utility for performance
export const throttle = (func, limit) => {
  let inThrottle;
  return function executedFunction(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};
