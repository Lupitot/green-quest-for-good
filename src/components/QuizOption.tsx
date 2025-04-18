
import { cn } from '@/lib/utils';
import { Check, X } from 'lucide-react';

interface QuizOptionProps {
  label: string;
  selected: boolean;
  correct: boolean | null;
  onClick: () => void;
  disabled: boolean;
}

const QuizOption: React.FC<QuizOptionProps> = ({
  label,
  selected,
  correct,
  onClick,
  disabled
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full p-4 mb-3 rounded-lg text-left transition-all flex items-center",
        "border-2 hover:shadow-md",
        selected 
          ? "border-primary bg-primary/10"
          : "border-border hover:border-primary/50",
        correct === true && "border-green-500 bg-green-100",
        correct === false && "border-red-500 bg-red-100",
        disabled && !selected && "opacity-60 hover:border-border hover:shadow-none"
      )}
    >
      <div className="flex-1">{label}</div>
      {correct === true && <Check className="w-5 h-5 text-green-500" />}
      {correct === false && <X className="w-5 h-5 text-red-500" />}
    </button>
  );
};

export default QuizOption;
