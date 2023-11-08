import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBs2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    fill="none"
    {...props}
  >
    <Circle cx={24} cy={24} r={24} fill="#2FB574" />
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M19.67 20.677h8.67c3.39 0 5.66 2.39 5.66 5.947v8.21c0 3.545-2.27 5.936-5.66 5.936h-8.67c-3.39 0-5.67-2.391-5.67-5.937v-8.209c0-3.556 2.28-5.947 5.67-5.947Zm3.76 13.05 4.75-4.772a.888.888 0 0 0 0-1.246.878.878 0 0 0-1.24 0l-4.13 4.15-1.75-1.759a.878.878 0 0 0-1.24 0 .888.888 0 0 0 0 1.246l2.38 2.381c.17.171.39.252.61.252.23 0 .45-.08.62-.252Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBs2;
