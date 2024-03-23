import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Cloudly = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={120}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M46.326 41.087c.037-.22.056-.446.056-.677 0-2.16-1.69-3.91-3.775-3.91-1.55 0-2.881.968-3.462 2.351a2.615 2.615 0 0 0-1.75-.675c-1.49 0-2.697 1.264-2.697 2.824 0 .087.004.173.011.258a2.243 2.243 0 0 0-1.209 2.008c0 1.234.966 2.234 2.157 2.234h10.186c1.191 0 2.157-1 2.157-2.234 0-1.063-.715-1.952-1.674-2.179Z"
      />
    </G>
    <G filter="url(#c)">
      <Path
        fill="url(#d)"
        d="M81.38 65.378c.169-.953.256-1.933.256-2.933 0-9.358-7.692-16.945-17.181-16.945-7.055 0-13.116 4.193-15.762 10.19a12.245 12.245 0 0 0-7.966-2.928c-6.778 0-12.272 5.48-12.272 12.238 0 .376.017.749.05 1.117-3.26 1.574-5.505 4.879-5.505 8.7 0 5.348 4.396 9.683 9.818 9.683h46.364c5.422 0 9.818-4.335 9.818-9.683 0-4.602-3.256-8.455-7.62-9.439Z"
      />
    </G>
    <G filter="url(#e)">
      <Path
        fill="url(#f)"
        d="M91.59 40.514c0 .68-.058 1.345-.17 1.993a6.574 6.574 0 0 1 5.08 6.414c0 3.633-2.93 6.579-6.546 6.579h-9.822c-2.69-5.895-8.698-10-15.678-10a17.251 17.251 0 0 0-11.837 4.663 6.65 6.65 0 0 1-.117-1.242 6.583 6.583 0 0 1 3.67-5.912 8.531 8.531 0 0 1-.034-.759c0-4.593 3.663-8.316 8.182-8.316 2.027 0 3.881.75 5.31 1.99C71.392 31.849 75.433 29 80.136 29c6.327 0 11.455 5.155 11.455 11.514Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={34.422}
        x2={49.512}
        y1={44.696}
        y2={33.904}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.65} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.58} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={27.198}
        x2={93.56}
        y1={81.018}
        y2={31.162}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.65} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.58} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={93.701}
        x2={48.855}
        y1={53.134}
        y2={20.078}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.65} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.58} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Cloudly
