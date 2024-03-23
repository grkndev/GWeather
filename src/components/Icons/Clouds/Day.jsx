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
const Clouds = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={225}
    height={221}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="url(#b)"
        d="M153.918 91.187c.107-.6.162-1.217.162-1.847 0-5.893-4.839-10.67-10.808-10.67-4.438 0-8.251 2.64-9.915 6.416a7.7 7.7 0 0 0-5.011-1.843c-4.263 0-7.72 3.45-7.72 7.706 0 .237.011.472.032.703-2.051.992-3.463 3.073-3.463 5.48 0 3.367 2.765 6.097 6.176 6.097h29.165c3.411 0 6.176-2.73 6.176-6.098 0-2.898-2.048-5.324-4.794-5.944Z"
      />
    </G>
    <G filter="url(#c)">
      <Rect
        width={70.169}
        height={66.076}
        x={77.432}
        y={77.5}
        fill="#FFEF9A"
        rx={33.038}
      />
    </G>
    <G filter="url(#d)">
      <Path
        fill="url(#e)"
        d="M143.508 110.538c0 17.278-13.875 31.284-30.991 31.284s-30.992-14.006-30.992-31.284 13.876-31.284 30.992-31.284 30.991 14.006 30.991 31.284Z"
      />
    </G>
    <G filter="url(#f)">
      <Path
        fill="url(#g)"
        d="M104.957 128.849c.156-.879.237-1.784.237-2.708 0-8.638-7.11-15.641-15.88-15.641-6.52 0-12.122 3.87-14.568 9.406a11.326 11.326 0 0 0-7.362-2.703c-6.264 0-11.343 5.058-11.343 11.297 0 .347.016.691.047 1.031-3.013 1.453-5.088 4.504-5.088 8.031 0 4.936 4.063 8.938 9.074 8.938h42.852c5.011 0 9.074-4.002 9.074-8.938 0-4.248-3.009-7.804-7.043-8.713Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={119.836}
        x2={161.613}
        y1={101.036}
        y2={69.684}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0.58} />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={107.809}
        x2={133.672}
        y1={127.566}
        y2={82.631}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFEE94" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={54.88}
        x2={116.159}
        y1={143.286}
        y2={97.191}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#E3E3E1" />
        <Stop offset={1} stopColor="#FCFCFC" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Clouds
