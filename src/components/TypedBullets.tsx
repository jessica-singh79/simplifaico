import React, { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

const bullets = [
  'Cut costs by 40%',
  'Save 30+ hours weekly',
  'Automate repetitive tasks'
];

interface BulletState {
  text: string;
  isComplete: boolean;
}

const TypedBullets = () => {
  const [bulletStates, setBulletStates] = useState<BulletState[]>([
    { text: '', isComplete: false },
    { text: '', isComplete: false },
    { text: '', isComplete: false }
  ]);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isVisible) {
      const fadeOutTimeout = setTimeout(() => {
        setBulletStates([
          { text: '', isComplete: false },
          { text: '', isComplete: false },
          { text: '', isComplete: false }
        ]);
        setCurrentTypingIndex(0);
        setCharIndex(0);
        setIsVisible(true);
        setIsPaused(false);
      }, 300);
      return () => clearTimeout(fadeOutTimeout);
    }

    if (isPaused) {
      const pauseTimeout = setTimeout(() => {
        setIsVisible(false);
      }, 3000);
      return () => clearTimeout(pauseTimeout);
    }

    if (currentTypingIndex >= bullets.length) {
      setIsPaused(true);
      return;
    }

    const currentBullet = bullets[currentTypingIndex];

    if (charIndex < currentBullet.length) {
      const typingTimeout = setTimeout(() => {
        setBulletStates(prev => {
          const newStates = [...prev];
          newStates[currentTypingIndex] = {
            text: currentBullet.slice(0, charIndex + 1),
            isComplete: false
          };
          return newStates;
        });
        setCharIndex(prev => prev + 1);
      }, 60);
      return () => clearTimeout(typingTimeout);
    } else {
      setBulletStates(prev => {
        const newStates = [...prev];
        newStates[currentTypingIndex] = {
          text: currentBullet,
          isComplete: true
        };
        return newStates;
      });

      const nextBulletTimeout = setTimeout(() => {
        setCurrentTypingIndex(prev => prev + 1);
        setCharIndex(0);
      }, 500);
      return () => clearTimeout(nextBulletTimeout);
    }
  }, [currentTypingIndex, charIndex, isVisible, isPaused]);

  return (
    <div
      className={`transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="max-w-xl space-y-2">
        {bulletStates.map((bullet, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 min-h-[1.75rem] transition-opacity duration-200 ${
              bullet.text ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {bullet.text && (
              <>
                <Check className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-lg font-body text-gray-700 font-medium">
                  {bullet.text}
                  {!bullet.isComplete && index === currentTypingIndex && (
                    <span className="inline-block w-0.5 h-4 md:h-5 bg-gray-700 ml-1 animate-pulse" />
                  )}
                </span>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TypedBullets;
