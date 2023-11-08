import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVector2 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={719}
    height={2}
    fill="none"
    {...props}
  >
    <Path stroke="#E6E6E6" d="M0 1h719" />
  </Svg>
);
export default SvgVector2;
