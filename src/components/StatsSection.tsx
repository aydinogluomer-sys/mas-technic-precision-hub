import { useState, useEffect, useRef } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", prefix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const steps = 60;
    const increment = end / steps;
    let current = 0;
    const stepDuration = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold text-primary">
      {prefix}{count}{suffix}
    </div>
  );
};

const stats = [
  { value: 25, suffix: "+", label: "CNC Tezgâh" },
  { value: 0.01, suffix: "mm", prefix: "±", label: "Tolerans" },
  { value: 2000, suffix: "mm", label: "Max Parça Ölçüsü" },
  { value: 98, suffix: "%", label: "Zamanında Teslimat" },
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="industrial-container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="industrial-heading mb-4">Rakamlarla Mas Technic</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6">
              {stat.value === 0.01 ? (
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  ±0.01mm
                </div>
              ) : (
                <Counter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                  prefix={stat.prefix}
                />
              )}
              <p className="text-industrial-gray mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
