import { motion } from 'framer-motion';

export function FolderIcon() {
  return (
    <motion.svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      whileHover="hover"
    >
      <g filter="url(#shadow)">
        <motion.path
          d="M40 40C34.4772 40 30 44.4772 30 50V150C30 155.523 34.4772 160 40 160H160C165.523 160 170 155.523 170 150V60C170 54.4772 165.523 50 160 50H100C97.2386 50 94.6158 48.9464 92.5858 47.0711L87.4142 42.3431C85.9832 41.0269 84.0167 40.3013 82 40.3013H40Z"
          fill="#1f69c1"
          variants={{
            hover: {
              rotateX: 0,
              rotateY: -35,
              rotateZ: 0,
              originX: 0.5,
              originY: 1,
              perspective: 1000,
              translateY: -5,
              translateX: -15,
            },
          }}
        />

        <motion.rect
          x="60"
          y="50"
          width="80"
          height="100"
          fill="white"
          initial={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          variants={{
            hover: {
              translateY: -80,
              translateX: -10,
              rotateX: 5,
            },
          }}
          style={{
            filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            borderRadius: '25px',
          }}
        />

        <motion.g
          transform="translate(1, 7)"
          variants={{
            hover: {
              // rotateX: -10,
              rotateY: -20,
              rotateZ: 0,
              originX: 1,
              originY: 0.5,
              perspective: 1000,
            },
          }}
        >
          <motion.path
            d="M35 50C29.4772 50 25 54.4772 25 60V155C25 160.523 29.4772 165 35 165H165C170.523 165 175 160.523 175 155V60C175 54.4772 170.523 50 165 50H35Z"
            fill="#5A9DE2"
          />
          <motion.path
            d="M85 95L100 110L115 95"
            stroke="#2A5082"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
      </g>
      <defs>
        <filter
          id="shadow"
          x="15"
          y="25"
          width="170"
          height="155"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  );
}
