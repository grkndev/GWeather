import * as React from "react"
import Svg, {
  G,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Clear = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={225}
    height={220}
    viewBox="0 0 225 220"
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Rect width={70.088} height={66} x={77} y={77} fill="#FFEF9A" rx={33} />
    </G>
    <G filter="url(#b)">
      <Path
        fill="url(#c)"
        d="M143 110c0 17.258-13.859 31.248-30.956 31.248-17.096 0-30.956-13.99-30.956-31.248 0-17.258 13.86-31.248 30.956-31.248C129.141 78.752 143 92.742 143 110Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={107.342}
        x2={133.175}
        y1={127.008}
        y2={82.125}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFEE94" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Clear
