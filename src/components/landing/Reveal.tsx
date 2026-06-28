import { ReactNode } from 'react';
import useReveal from '@/hooks/use-reveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const Reveal = ({ children, className = '', delay = 0 }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${className} transition-none`}
      style={{
        opacity: visible ? undefined : 0,
        animation: visible
          ? `fade-up 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms forwards`
          : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default Reveal;
