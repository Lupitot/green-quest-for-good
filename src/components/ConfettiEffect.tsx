
import { useEffect, useState } from 'react';

interface ConfettiProps {
  active: boolean;
}

const ConfettiEffect: React.FC<ConfettiProps> = ({ active }) => {
  const [confetti, setConfetti] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (active) {
      const confettiElements = [];
      for (let i = 0; i < 50; i++) {
        const leftPos = Math.random() * 100;
        const size = Math.random() * 10 + 5;
        const duration = Math.random() * 3 + 2;
        const delay = Math.random() * 1;

        confettiElements.push(
          <div
            key={i}
            className="absolute z-50 rounded-full animate-confetti"
            style={{
              left: `${leftPos}%`,
              top: '-20px',
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: i % 3 === 0 ? '#D1F0C2' : i % 3 === 1 ? '#6BB36B' : '#C2E4F0',
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`
            }}
          />
        );
      }
      setConfetti(confettiElements);
    } else {
      setConfetti([]);
    }
  }, [active]);

  return <div className="fixed inset-0 pointer-events-none overflow-hidden">{confetti}</div>;
};

export default ConfettiEffect;
