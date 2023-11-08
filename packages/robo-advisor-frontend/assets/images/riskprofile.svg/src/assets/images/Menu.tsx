import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMenu = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={91}
    height={91}
    fill="none"
    {...props}
  >
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M66.506 31.509a9.328 9.328 0 1 0 0-18.655 9.328 9.328 0 0 0 0 18.655ZM24.494 31.509a9.328 9.328 0 1 0 0-18.655 9.328 9.328 0 0 0 0 18.655ZM66.506 78.146a9.328 9.328 0 1 0 0-18.655 9.328 9.328 0 0 0 0 18.655ZM24.494 78.146a9.328 9.328 0 1 0 0-18.655 9.328 9.328 0 0 0 0 18.655Z"
    />
  </Svg>
);
export default SvgMenu;
