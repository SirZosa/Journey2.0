import './fadein.css';
import { useState, useRef, useEffect } from 'react';

type Props = {
  children: React.JSX.Element;
};

export default function FadeIn({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  const nameClass = isVisible ? 'fade visible' : 'fade not-visible';

  return (
    <div ref={elementRef} className={nameClass}>
      {children}
    </div>
  );
}