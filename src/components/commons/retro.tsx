/**
 * @file retro.tsx
 * @description Retro grid component
 * @author Ugolin Ollé<hello@ugolin-olle.com>
 * @version 1.0.0
 */

// --- Imports
import { cn } from '~/lib/utils';

/**
 * @name RetroGrid
 * @description Retro grid component
 * @param className {string} The class name of the retro grid component
 * @returns {React.JSX.Element} The retro grid component
 */
export function RetroGrid({ className }: { className?: string }): JSX.Element {
  // --- Render
  return (
    <div
      className={cn(
        'pointer-events-none absolute h-full w-full overflow-hidden opacity-35 [perspective:200px]',
        className
      )}
    >
      <div className="absolute inset-0 [transform:rotateX(35deg)]">
        <div
          className={cn(
            'animate-grid',
            '[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]',
            '[background-image:linear-gradient(to_right,rgba(0,0,0,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(0,0,0,0.3)_1px,transparent_0)]',
            'dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(255,255,255,0.2)_1px,transparent_0)]'
          )}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent to-90% dark:from-black" />
    </div>
  );
}
