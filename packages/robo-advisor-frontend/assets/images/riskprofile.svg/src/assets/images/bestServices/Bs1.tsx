import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBs1 = (props: SvgProps) => (
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
      d="M23.728 40.683a.76.76 0 0 0 .717-.004l3.568-1.916c1.011-.542 1.804-1.148 2.422-1.853a8.306 8.306 0 0 0 2.065-5.521l-.042-6.672a1.817 1.817 0 0 0-1.25-1.703l-6.637-2.238a1.88 1.88 0 0 0-1.23.007l-6.613 2.318A1.82 1.82 0 0 0 15.5 24.82l.042 6.666a8.308 8.308 0 0 0 2.139 5.5c.624.695 1.423 1.292 2.446 1.825l3.601 1.872Zm-.945-7.841a.757.757 0 0 0 .536.212.758.758 0 0 0 .532-.22l3.9-3.861a.728.728 0 0 0-.007-1.044.767.767 0 0 0-1.068.006l-3.368 3.335-1.38-1.332a.767.767 0 0 0-1.068.007.727.727 0 0 0 .007 1.045l1.916 1.852Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default SvgBs1;
