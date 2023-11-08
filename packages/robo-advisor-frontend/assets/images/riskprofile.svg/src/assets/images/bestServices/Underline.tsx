import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUnderline = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={364}
    height={37}
    fill="none"
    {...props}
  >
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeWidth={5}
      d="M3.41 21.67s226.908-25.836 354.17-6.69"
    />
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeWidth={5}
      d="M3.218 17.315s231.327-16.074 358.231 8.2"
    />
  </Svg>
);
export default SvgUnderline;
