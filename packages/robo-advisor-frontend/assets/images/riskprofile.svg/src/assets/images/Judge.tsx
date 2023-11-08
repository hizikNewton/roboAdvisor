import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgJudge = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={92}
    height={92}
    fill="none"
    {...props}
  >
    <Path
      stroke="#79EFBC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={5}
      d="M76.705 70.955 57.73 51.98M57.73 51.98 44.16 65.55c-2.99 2.99-7.858 2.99-10.848 0L17.058 49.297c-2.99-2.99-2.99-7.859 0-10.849L44.16 11.347c2.99-2.99 7.858-2.99 10.848 0L71.262 27.6c2.99 2.99 2.99 7.858 0 10.848L57.73 51.98ZM7.667 80.5h23M25.147 30.36l27.101 27.102"
    />
  </Svg>
);
export default SvgJudge;
