import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const RollingStats = ({ headline, paragraph, section_id, stats = [] }) => {
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const currentStatsRef = statsRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
  
    if (currentStatsRef) {
      observer.observe(currentStatsRef);
    }
  
    return () => {
      if (currentStatsRef) {
        observer.unobserve(currentStatsRef);
      }
    };
  }, []);

  return (
    <section className="section-py bg-alternate" id={section_id} ref={statsRef}>
      <div className="container">
        <h2 className="text-5xl font-bold uppercase mb-6 tracking-tight text-center">{headline}</h2>
        <div className="mx-auto max-w-6xl">
          <p className="text-center mb-5">{paragraph}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {stats && stats.length > 0 ? (
            stats.map((stat, index) => (
              <div key={index} className="col-block stats__col px-2 mb-4 sm:mb-4 md:mb-0">
                <h3 className="font-semibold mb-3">{stat.label}
                  <div className="stats__count statistic text-4xl font-bold uppercase mb-2 tracking-tight text-center text-color-brand-red">
                    {stat.prefix || ''}
                    <CountUp
                      start={0}
                      end={isVisible ? (stat.value || 0) : 0}
                      duration={2.5}
                      separator=","
                      decimal="."
                      useEasing={true}
                      useGrouping={true}
                    />
                    {stat.suffix || ''}
                  </div>
                </h3>
              </div>
            ))
          ) : (
            <div>No stats available</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RollingStats;