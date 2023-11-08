import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChart = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={69}
    height={69}
    fill="none"
    {...props}
  >
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4}
      d="M8.625 63.25h51.75M16.1 24.093h-4.6a2.883 2.883 0 0 0-2.875 2.875V51.75a2.883 2.883 0 0 0 2.875 2.875h4.6a2.883 2.883 0 0 0 2.875-2.875V26.968a2.883 2.883 0 0 0-2.875-2.875ZM36.8 14.921h-4.6a2.884 2.884 0 0 0-2.875 2.875V51.75a2.884 2.884 0 0 0 2.875 2.875h4.6a2.883 2.883 0 0 0 2.875-2.875V17.796a2.883 2.883 0 0 0-2.875-2.875ZM57.5 5.75h-4.6a2.883 2.883 0 0 0-2.875 2.875V51.75a2.883 2.883 0 0 0 2.875 2.875h4.6a2.883 2.883 0 0 0 2.875-2.875V8.625A2.883 2.883 0 0 0 57.5 5.75Z"
    />
  </Svg>
);
export default SvgChart;
