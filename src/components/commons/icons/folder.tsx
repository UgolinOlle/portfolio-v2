/**
 * @interface FolderProps
 * @description Folder component props
 * @property {string} className - CSS class
 * @property {string} width - Width of the folder
 * @property {string} height - Height of the folder
 */
interface FolderProps {
  className?: string;
  width?: string;
  height?: string;
}

/**
 * @function Folder
 * @description Show & animate a folder icon
 * @returns {ReactElement} React component
 * @exports Folder
 */
export const Folder: React.FC<FolderProps> = ({
  className,
  width,
  height,
}): React.ReactElement => {
  return (
    <div className="group/folder">
      <svg
        width={width || '1314'}
        height={height || '1352'}
        viewBox="0 0 1314 1352"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ease-in-out transform origin-bottom-left group-hover/folder:rotate-3 group-hover/folder:-skew-y-3 ${className}`}
        style={{
          transition: 'transform 0.3s ease-in-out',
        }}
      >
        <path
          opacity="0.75"
          d="M18 118C18 62.7715 62.7715 18 118 18H384.153C404.638 18 424.628 24.2911 441.421 36.0224L507.658 82.2944C524.451 94.0258 544.442 100.317 564.927 100.317H840.758H1196C1251.23 100.317 1296 145.088 1296 200.317V1234C1296 1289.23 1251.23 1334 1196 1334H118C62.7715 1334 18 1289.23 18 1234V118Z"
          fill="#FF9500"
          stroke="#FFAD3A"
          strokeWidth="35"
        />
        <rect
          x="18"
          y="231"
          width="1278"
          height="1103"
          rx="100"
          fill="#FF9500"
          stroke="#FFAD3A"
          strokeWidth="35"
          className="transform origin-bottom-left group-hover/folder:rotate-3 group-hover/folder:-skew-y-3"
          style={{
            transition: 'transform 0.3s ease-in-out',
          }}
        />
      </svg>
    </div>
  );
};
