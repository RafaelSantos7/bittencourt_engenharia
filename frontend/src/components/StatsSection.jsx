import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../mockData';

const StatsSection = () => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          stats.forEach((stat, index) => {
            let current = 0;
            const increment = stat.number / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = stat.number;
                  return newCounters;
                });
                clearInterval(timer);
              } else {
                setCounters((prev) => {
                  const newCounters = [...prev];
                  newCounters[index] = Math.floor(current);
                  return newCounters;
                });
              }
            }, 30);
          });
        }
      },
      { threshold: 0.5 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-[#3D0C0A] to-[#6B2623]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">NOSSO IMPACTO</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="text-6xl font-bold text-[#D4AF37] mb-2">
                  {stat.suffix}{counters[index]}
                </div>
                <div className="text-xl text-white font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;