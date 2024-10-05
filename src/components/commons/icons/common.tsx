import { IIcon } from './socials';

export const COMMON_ICONS: IIcon = {
  stars: ({ className }) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 256 258"
        className={className}
      >
        <defs>
          <radialGradient
            id="a"
            cx="78.302%"
            cy="55.52%"
            r="78.115%"
            fx="78.302%"
            fy="55.52%"
            gradientTransform="scale(.99947 1) rotate(78.858 .783 .555)"
          >
            <stop offset="0%" stopColor="#1BA1E3" />
            <stop offset=".01%" stopColor="#1BA1E3" />
            <stop offset="30.022%" stopColor="#5489D6" />
            <stop offset="54.552%" stopColor="#9B72CB" />
            <stop offset="82.537%" stopColor="#D96570" />
            <stop offset="100%" stopColor="#F49C46" />
          </radialGradient>
          <radialGradient
            id="b"
            cx="-3.409%"
            cy="-54.219%"
            r="169.363%"
            fx="-3.409%"
            fy="-54.219%"
            gradientTransform="scale(.99946 1) rotate(78.858 -.034 -.542)"
          >
            <stop offset="0%" stopColor="#1BA1E3" />
            <stop offset=".01%" stopColor="#1BA1E3" />
            <stop offset="30.022%" stopColor="#5489D6" />
            <stop offset="54.552%" stopColor="#9B72CB" />
            <stop offset="82.537%" stopColor="#D96570" />
            <stop offset="100%" stopColor="#F49C46" />
          </radialGradient>
        </defs>
        <path
          fill="url(#a)"
          d="m122.062 172.77-10.27 23.52c-3.947 9.042-16.459 9.042-20.406 0l-10.27-23.52c-9.14-20.933-25.59-37.595-46.108-46.703L6.74 113.52c-8.987-3.99-8.987-17.064 0-21.053l27.385-12.156C55.172 70.97 71.917 53.69 80.9 32.043L91.303 6.977c3.86-9.303 16.712-9.303 20.573 0l10.403 25.066c8.983 21.646 25.728 38.926 46.775 48.268l27.384 12.156c8.987 3.99 8.987 17.063 0 21.053l-28.267 12.547c-20.52 9.108-36.97 25.77-46.109 46.703Z"
        />
        <path
          fill="url(#b)"
          d="m217.5 246.937-2.888 6.62c-2.114 4.845-8.824 4.845-10.937 0l-2.889-6.62c-5.148-11.803-14.42-21.2-25.992-26.34l-8.898-3.954c-4.811-2.137-4.811-9.131 0-11.269l8.4-3.733c11.87-5.273 21.308-15.017 26.368-27.22l2.966-7.154c2.067-4.985 8.96-4.985 11.027 0l2.966 7.153c5.06 12.204 14.499 21.948 26.368 27.221l8.4 3.733c4.812 2.138 4.812 9.132 0 11.27l-8.898 3.953c-11.571 5.14-20.844 14.537-25.992 26.34Z"
        />
      </svg>
    );
  },
  neovim: ({ className }) => {
    return (
      <svg
        viewBox="0 0 602 734"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className={className}
      >
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#16B0ED" stop-opacity="0.800235524" offset="0%"></stop>
            <stop stop-color="#0F59B2" stop-opacity="0.83700023" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
            <stop stop-color="#7DB643" offset="0%"></stop>
            <stop stop-color="#367533" offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-3">
            <stop stop-color="#88C649" stop-opacity="0.8" offset="0%"></stop>
            <stop stop-color="#439240" stop-opacity="0.84" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="mark-copy" transform="translate(2.000000, 3.000000)">
            <path
              d="M0,155.5704 L155,-1 L154.999997,727 L0,572.237919 L0,155.5704 Z"
              id="Left---green"
              fill="url(#linearGradient-1)"
            ></path>
            <path
              d="M443.060403,156.982405 L600,-1 L596.818792,727 L442,572.219941 L443.060403,156.982405 Z"
              id="Right---blue"
              fill="url(#linearGradient-2)"
              transform="translate(521.000000, 363.500000) scale(-1, 1) translate(-521.000000, -363.500000) "
            ></path>
            <path
              d="M154.986294,0 L558,615.189696 L445.224605,728 L42,114.172017 L154.986294,0 Z"
              id="Cross---blue"
              fill="url(#linearGradient-3)"
            ></path>
            <path
              d="M155,283.83232 L154.786754,308 L31,124.710606 L42.4619486,113 L155,283.83232 Z"
              id="Shadow"
              fillOpacity="0.13"
              fill="#000000"
            ></path>
          </g>
        </g>
      </svg>
    );
  },
  colors: ({ className }) => {
    return (
      <svg className={className} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9.35917 37.5H36.0877C36.6471 37.5 37.101 37.0467 37.101 36.4874L37.1006 25.1202M12.1916 36.8712L36.4159 25.5752C36.9229 25.3388 37.1421 24.736 36.9057 24.229L32.1018 13.9278C31.8654 13.4208 31.2626 13.2007 30.7556 13.4371L19.9397 18.4811M15.8293 32.5348C14.8721 36.107 11.2003 38.2269 7.62813 37.2698C4.05593 36.3126 1.9356 32.6412 2.89276 29.069L9.81061 3.25108C9.95539 2.71075 10.5103 2.38997 11.0506 2.53476L22.0304 5.47627C22.5707 5.62106 22.8914 6.1763 22.7467 6.71663L15.8293 32.5348ZM9.35917 30.9953H9.36299L9.36291 30.9991L9.35917 30.999V30.9953Z"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  },
  workflow: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M17 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
        />
      </svg>
    );
  },
  bug: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a6 6 0 0 0-1.82-1.96L17 4.41L15.59 3l-2.17 2.17a6 6 0 0 0-2.83 0L8.41 3L7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20z"
        />
      </svg>
    );
  },
  api: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M7 7H5a2 2 0 0 0-2 2v8h2v-4h2v4h2V9a2 2 0 0 0-2-2m0 4H5V9h2m7-2h-4v10h2v-4h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2m0 4h-2V9h2m6 0v6h1v2h-4v-2h1V9h-1V7h4v2Z"
        />
      </svg>
    );
  },
  user: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M14 19.5c0-2 1.1-3.8 2.7-4.7c-1.3-.5-2.9-.8-4.7-.8c-4.4 0-8 1.8-8 4v2h10zm5.5-3.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5s3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5M16 8c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4"
        />
      </svg>
    );
  },
  company: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M16 13a.26.26 0 0 0-.26.21l-.19 1.32c-.3.13-.59.29-.85.47l-1.24-.5c-.11 0-.24 0-.31.13l-1 1.73c-.06.11-.04.24.06.32l1.06.82a4.2 4.2 0 0 0 0 1l-1.06.82a.26.26 0 0 0-.06.32l1 1.73c.06.13.19.13.31.13l1.24-.5c.26.18.54.35.85.47l.19 1.32c.02.12.12.21.26.21h2c.11 0 .22-.09.24-.21l.19-1.32c.3-.13.57-.29.84-.47l1.23.5c.13 0 .26 0 .33-.13l1-1.73a.26.26 0 0 0-.06-.32l-1.07-.82c.02-.17.04-.33.04-.5s-.01-.33-.04-.5l1.06-.82a.26.26 0 0 0 .06-.32l-1-1.73c-.06-.13-.19-.13-.32-.13l-1.23.5c-.27-.18-.54-.35-.85-.47l-.19-1.32A.236.236 0 0 0 18 13zm1 3.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5c-.84 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m-1-5.42V3H2v18h6v-3.5h2.03c.23-3.3 2.74-5.96 5.97-6.42M6 19H4v-2h2zm0-4H4v-2h2zm0-4H4V9h2zm0-4H4V5h2zm6-2h2v2h-2zm0 4h2v2h-2zm-2 6H8v-2h2zm0-4H8V9h2zM8 7V5h2v2z"
        />
      </svg>
    );
  },
  oauth: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M2 7v2h4v2H4a2 2 0 0 0-2 2v4h6v-2H4v-2h2a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm7 0v10h2v-4h3v-2h-3V9h4V7zm9 0a2 2 0 0 0-2 2v8h2v-3h2v3h2V9a2 2 0 0 0-2-2zm0 2h2v3h-2z"
        />
      </svg>
    );
  },
  google: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81"
        />
      </svg>
    );
  },
  gmb: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M22 8.5c0 1.37-1.12 2.5-2.5 2.5S17 9.87 17 8.5c0 1.37-1.12 2.5-2.5 2.5S12 9.87 12 8.5c0 1.37-1.12 2.5-2.5 2.5S7 9.87 7 8.5C7 9.87 5.88 11 4.5 11S2 9.87 2 8.5l1.39-5.42S3.68 2 4.7 2h14.6c1.02 0 1.31 1.08 1.31 1.08zm-1 3.7V20c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-7.8a3.96 3.96 0 0 0 4-.58c.69.55 1.56.88 2.5.88c.95 0 1.82-.33 2.5-.88c.69.55 1.56.88 2.5.88c.95 0 1.82-.33 2.5-.88c.68.55 1.56.88 2.5.88c.53 0 1.04-.11 1.5-.3m-2 5.13c0-.2 0-.41-.05-.63l-.03-.16h-2.97v1.17h1.81c-.06.22-.14.44-.31.62c-.33.33-.78.51-1.26.51c-.5 0-.99-.21-1.35-.56c-.69-.71-.69-1.86.02-2.58c.69-.7 1.83-.7 2.55-.03l.14.13l.84-.85l-.16-.14c-.56-.52-1.3-.81-2.08-.81h-.01c-.81 0-1.57.31-2.14.87c-.59.58-.92 1.34-.92 2.13c0 .8.31 1.54.88 2.09a3.2 3.2 0 0 0 2.22.91h.02c.8 0 1.51-.29 2.03-.8c.47-.48.77-1.2.77-1.87"
        />
      </svg>
    );
  },
  robot: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 1 0 10 4c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1M8.68 17.04L7.5 15.86l-1.18 1.18l-1.18-1.18L7.5 13.5l2.36 2.36zm9 0l-1.18-1.18l-1.18 1.18l-1.18-1.18l2.36-2.36l2.36 2.36z"
        />
      </svg>
    );
  },
  chart: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M4 19v1h18v2H2V2h2v15c3 0 6-2 8.1-5.6c3-5 6.3-7.4 9.9-7.4v2c-2.8 0-5.5 2.1-8.1 6.5C11.3 16.6 7.7 19 4 19"
        />
      </svg>
    );
  },
  chartBox: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2z"
        />
      </svg>
    );
  },
  documentStar: ({ className }) => {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
        <path
          fill="currentColor"
          d="m12 11l-1.26 2.75L8 15l2.74 1.26L12 19l1.25-2.74L16 15l-2.75-1.25zM6 2h8l6 6v12c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m0 2v16h12V9h-5V4z"
        />
      </svg>
    );
  },
};

export const CrossIcon = ({ className, ...rest }: any) => {
  // --- Render
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
