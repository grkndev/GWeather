import * as React from "react"
import Svg, {
  G,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Storm = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={204}
    height={167}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M92.826 41.087c.037-.22.056-.446.056-.677 0-2.16-1.69-3.91-3.775-3.91-1.55 0-2.881.968-3.462 2.351a2.615 2.615 0 0 0-1.75-.675c-1.49 0-2.697 1.264-2.697 2.824 0 .087.004.173.011.258A2.243 2.243 0 0 0 80 43.266c0 1.234.966 2.234 2.157 2.234h10.186c1.191 0 2.157-1 2.157-2.234 0-1.063-.715-1.952-1.674-2.179Z"
      />
    </G>
    <G filter="url(#c)">
      <Path
        fill="url(#d)"
        d="M127.88 65.378c.168-.953.256-1.933.256-2.933 0-9.358-7.692-16.945-17.181-16.945-7.055 0-13.116 4.193-15.763 10.19a12.245 12.245 0 0 0-7.965-2.928c-6.778 0-12.273 5.48-12.273 12.238 0 .376.018.749.05 1.117-3.26 1.574-5.504 4.879-5.504 8.7 0 5.348 4.396 9.683 9.818 9.683h46.364c5.422 0 9.818-4.335 9.818-9.683 0-4.602-3.256-8.455-7.62-9.439Z"
      />
    </G>
    <G filter="url(#e)">
      <Path
        fill="url(#f)"
        d="M138.091 40.514c0 .68-.059 1.345-.171 1.993A6.575 6.575 0 0 1 143 48.92c0 3.633-2.93 6.579-6.545 6.579h-9.823c-2.69-5.895-8.697-10-15.677-10a17.25 17.25 0 0 0-11.838 4.663A6.65 6.65 0 0 1 99 48.922a6.583 6.583 0 0 1 3.67-5.912 8.646 8.646 0 0 1-.034-.759c0-4.593 3.663-8.316 8.182-8.316 2.027 0 3.881.75 5.31 1.99 1.764-4.075 5.805-6.924 10.508-6.924 6.327 0 11.455 5.155 11.455 11.514Z"
      />
    </G>
    <G filter="url(#g)">
      <Path
        fill="#507CB1"
        d="M91.493 95.5c-2.561 3.36-6.148 10.082 0 10.082 6.149 0 2.562-6.721 0-10.082Z"
      />
    </G>
    <G filter="url(#h)">
      <Path
        fill="#507CB1"
        d="M98.895 87.5c-2.562 3.36-6.148 10.082 0 10.082s2.562-6.721 0-10.082Z"
      />
    </G>
    <G filter="url(#i)">
      <Path
        fill="#507CB1"
        d="M83.395 87.5c-2.562 3.36-6.148 10.082 0 10.082s2.562-6.721 0-10.082Z"
      />
    </G>
    <G filter="url(#j)">
      <Rect
        width={49.379}
        height={7.201}
        x={77.318}
        y={81.946}
        fill="#FFED8D"
        rx={3.601}
      />
    </G>
    <G filter="url(#k)">
      <Path
        fill="url(#l)"
        d="M121.315 84.5h-9.775l-4.25 11.341h7.65L111.398 110l12.892-18.575h-5.667l2.692-6.925Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={80.922}
        x2={96.012}
        y1={44.696}
        y2={33.904}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.65} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.58} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={73.698}
        x2={140.06}
        y1={81.018}
        y2={31.162}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.65} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.58} />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={140.201}
        x2={95.355}
        y1={53.134}
        y2={20.078}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.65} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.58} />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={113.688}
        x2={130.106}
        y1={107.544}
        y2={84.706}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFEE94" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Storm
