import { useEffect } from 'react';
import Home from './pages/Home';

function App() {
  // Scroll reveal observer (global)
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -20px 0px' });
    revealElements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);



  useEffect(() => {
  // Atmosphere dots (only once)
  if (!document.querySelector('.atmosphere-dots')) {
    const styleAnim = document.createElement("style");
    styleAnim.textContent = `@keyframes floatDot { 0%,100% { transform: translate(0,0); } 25% { transform: translate(10px,-15px); } 50% { transform: translate(-5px,20px); } 75% { transform: translate(-15px,-10px); } }`;
    document.head.appendChild(styleAnim);

    const container = document.createElement("div");
    container.className = "atmosphere-dots";
    container.style.cssText = `position: fixed; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; overflow: hidden;`;
    for (let i = 0; i < 70; i++) {
      const dot = document.createElement("span");
      const size = Math.random() * 5 + 1;
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const duration = Math.random() * 10 + 6;
      const delay = Math.random() * 10;
      dot.style.cssText = `position: absolute; left: ${left}%; top: ${top}%; width: ${size}px; height: ${size}px; background: #d4a373; border-radius: 50%; opacity: ${Math.random() * 0.6 + 0.1}; animation: floatDot ${duration}s infinite ease-in-out; animation-delay: -${delay}s;`;
      container.appendChild(dot);
    }
    document.body.appendChild(container);
  }
}, []);
  return (
    <div className="container">
      <Home />
    </div>
  );
}

export default App;