import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

interface GooeyTextProps {
  texts: string[];
  morphTime?: number;
  cooldownTime?: number;
  className?: string;
  textClassName?: string;
}

export function GooeyText({ 
  texts, 
  morphTime = 1.2, 
  cooldownTime = 2, 
  className = "",
  textClassName = ""
}: GooeyTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsAnimating(false);
      }, morphTime * 1000);
      
    }, (morphTime + cooldownTime) * 1000);

    return () => clearInterval(interval);
  }, [texts.length, morphTime, cooldownTime]);

  return (
    <span className={cn("relative", className)}>
      <span 
        className={cn(
          "transition-all duration-300",
          isAnimating ? "scale-110 blur-sm opacity-70" : "scale-100 blur-0 opacity-100",
          textClassName
        )}
      >
        {texts[currentIndex]}
      </span>
    </span>
  );
}