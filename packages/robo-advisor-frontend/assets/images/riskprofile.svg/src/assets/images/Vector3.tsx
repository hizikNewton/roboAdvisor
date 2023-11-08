import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVector3 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={720}
    height={2}
    fill="none"
    {...props}
  >
    <Path stroke="#E6E6E6" d="M0 1h720" />
  </Svg>
);
export default SvgVector3;
