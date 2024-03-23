import * as React from "react"
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Clear = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={161}
    height={166}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#FFEE94"
        d="M80.69 53.306c-6.77 9.193-7.944 21.74-1.972 32.085 5.973 10.345 17.425 15.601 28.772 14.334a30.39 30.39 0 0 1-9.3 8.298c-14.326 8.272-32.507 3.602-40.608-10.43-8.101-14.03-3.055-32.111 11.272-40.382a30.381 30.381 0 0 1 11.836-3.905Z"
      />
    </G>
    <G filter="url(#b)">
      <Path
        fill="url(#c)"
        d="M80.06 57.18c-6.181 8.392-7.253 19.844-1.8 29.288 5.451 9.443 15.905 14.241 26.263 13.085a27.731 27.731 0 0 1-8.489 7.575c-13.078 7.55-29.674 3.288-37.069-9.52-7.395-12.81-2.788-29.313 10.29-36.864a27.733 27.733 0 0 1 10.804-3.564Z"
      />
    </G>
    <G filter="url(#d)">
      <Path
        fill="url(#e)"
        d="M45.422 64.96c-1.122.499-1.56.92-1.961 1.962-.32-1.01-.713-1.46-1.96-1.961 1.283-.418 1.632-.903 1.96-1.96.403.974.652 1.507 1.96 1.96Z"
      />
    </G>
    <G filter="url(#f)">
      <Path
        fill="url(#g)"
        d="M57.706 57.965c-2.84 1.262-3.949 2.328-4.965 4.966-.81-2.557-1.804-3.697-4.965-4.966 3.252-1.06 4.134-2.286 4.965-4.965 1.022 2.47 1.652 3.817 4.965 4.965Z"
      />
    </G>
    <G filter="url(#h)">
      <Path
        fill="url(#i)"
        d="M103.356 85.247c-2.841 1.261-3.95 2.327-4.965 4.965-.81-2.556-1.805-3.697-4.966-4.965 3.252-1.06 4.134-2.286 4.966-4.966 1.021 2.47 1.652 3.818 4.965 4.966Z"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={81.405}
        x2={71.593}
        y1={52.73}
        y2={112.142}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFEE94" />
        <Stop offset={1} stopColor="#F90" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={42.894}
        x2={44.739}
        y1={67.105}
        y2={63.64}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFEE94" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={51.305}
        x2={55.978}
        y1={63.396}
        y2={54.621}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFEE94" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={96.954}
        x2={101.628}
        y1={90.677}
        y2={81.903}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#F90" />
        <Stop offset={1} stopColor="#FFEE94" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Clear
