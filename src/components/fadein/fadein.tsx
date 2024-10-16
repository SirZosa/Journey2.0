import './fadein.css'
import { useState, useEffect, useRef } from 'react'

type Props = {
  children: React.JSX.Element;
}

export default function FadeIn({ children }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current && !isVisible) {
        const rect = elementRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (rect.top < viewportHeight/1.5) {
          setIsVisible(true);
          window.removeEventListener('scroll', handleScroll); // Remove listener
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef, isVisible]) // Add isVisible to dependency array

  const nameClass = isVisible ? 'fade visible' : "fade not-visible";

  return (
    <div ref={elementRef} className={nameClass}>{children}</div>
  )
}