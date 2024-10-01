import { cn } from '~/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  icon?: React.ReactNode;
  text: string;
  color?: string;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  icon,
  text,
  color,
  className,
  ...props
}) => {
  // --- Render
  return (
    <div
      className={cn(
        className,
        `inline-flex items-center gap-2 rounded-full px-5 py-1 border border-${color}`
      )}
      {...props}
    >
      {icon && (
        <span
          className={`${color ? `text-${color}` : `text-neutral-600/70 dark:text-neutral-400/70`}`}
        >
          {icon}
        </span>
      )}
      <span
        className={`text-md font-semibold rounded-full ${color ? `text-${color}` : `text-neutral-600/70 dark:text-neutral-400/70`}`}
      >
        {text}
      </span>
    </div>
  );
};
