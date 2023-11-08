import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVector1 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={2}
    height={1272}
    fill="none"
    {...props}
  >
    <Path stroke="url(#Vector1_svg__a)" d="M1 0v1272" />
    <Defs>
      <LinearGradient
        id="Vector1_svg__a"
        x1={1.5}
        x2={1.5}
        y1={0}
        y2={1272}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E6E6E6" stopOpacity={0} />
        <Stop offset={0.495} stopColor="#E6E6E6" />
        <Stop offset={1} stopColor="#E6E6E6" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default SvgVector1;
