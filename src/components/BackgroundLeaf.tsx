
import React from 'react';
import { Leaf } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BackgroundLeafProps {
  className?: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  delay?: string;
}

const BackgroundLeaf: React.FC<BackgroundLeafProps> = ({
  className,
  size = 24,
  top,
  left,
  right,
  bottom,
  delay = "0s"
}) => {
  return (
    <div
      className={cn(
        "absolute text-eco-green-light opacity-40 animate-float", 
        className
      )}
      style={{
        top,
        left,
        right,
        bottom,
        animationDelay: delay,
      }}
    >
      <Leaf size={size} />
    </div>
  );
};

export default BackgroundLeaf;
