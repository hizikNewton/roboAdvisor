import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWallet = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={113}
    height={113}
    fill="none"
    {...props}
  >
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M42.375 89.458c0 3.532-.989 6.874-2.73 9.7a18.691 18.691 0 0 1-16.103 9.134 18.691 18.691 0 0 1-16.103-9.135 18.46 18.46 0 0 1-2.73-9.699c0-10.405 8.427-18.833 18.833-18.833 10.405 0 18.833 8.428 18.833 18.833Z"
    />
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="m16.203 89.456 4.662 4.661 10.028-9.275M83.58 33.194c-1.13-.189-2.308-.236-3.532-.236H32.965c-1.318 0-2.59.095-3.814.283.66-1.319 1.601-2.543 2.731-3.672l15.302-15.35c6.45-6.403 16.903-6.403 23.353 0l8.24 8.334c3.013 2.966 4.614 6.733 4.802 10.64Z"
    />
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M103.583 56.5v23.542c0 14.125-9.416 23.541-23.541 23.541H35.925a16.922 16.922 0 0 0 3.72-4.426 18.462 18.462 0 0 0 2.73-9.699c0-10.405-8.428-18.833-18.833-18.833-5.65 0-10.688 2.495-14.125 6.403V56.5c0-12.807 7.721-21.753 19.728-23.26a25.062 25.062 0 0 1 3.813-.282h47.084c1.224 0 2.4.047 3.53.236 12.148 1.412 20.011 10.405 20.011 23.306Z"
    />
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M103.583 58.854H89.458c-5.179 0-9.416 4.238-9.416 9.417 0 5.18 4.237 9.417 9.416 9.417h14.125"
    />
  </Svg>
);
export default SvgWallet;
