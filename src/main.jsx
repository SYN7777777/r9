import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { performanceMonitor } from './utils/performance.js'

// Performance monitoring
if (process.env.NODE_ENV === 'development') {
  performanceMonitor.logMetrics();
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
