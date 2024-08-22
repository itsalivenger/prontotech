import React, { useEffect, useState, useRef } from 'react';
import styles from '../../assets/styles/incrementcount.module.css';



const IncrementedCount = ({ title, targetNumber, duration }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isCounting) {
            setIsCounting(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, [isCounting]);

  useEffect(() => {
    if (isCounting) {
      let start = 0;
      const end = targetNumber;
      const increment = end / (duration / 50);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 50);

      return () => clearInterval(timer);
    }
  }, [isCounting, targetNumber, duration]);

  return (
    <div className={styles.countItem} ref={countRef}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.number}>{count}</p>
    </div>
  );
};

export default IncrementedCount;
