import * as React from 'react';
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from 'react-native-svg';
const GetStartIcon = (props: SvgProps) => (
  <Svg width={250} height={250} viewBox="0 0 250 250" fill="none" {...props}>
    <Rect width={250} height={250} fill="#2914E3" fillOpacity={0.15} rx={125} />
    <Rect
      width={150}
      height={150}
      x={50}
      y={50}
      fill="#2914E3"
      fillOpacity={0.2}
      rx={75}
    />
    <Path
      fill="url(#a)"
      d="m80.75 82.5 69.5 10.5 19 15.5s-34.833 39.488-50.5 59l-38-85Z"
    />
    <Path
      stroke="#EAE9FC"
      strokeWidth={3}
      d="m124.25 115.5-43.5-33m43.5 33 45-7m-45 7-5.5 52m5.5-52c-.833.833 4-3.5 26-22.5m-69.5-10.5 69.5 10.5m-69.5-10.5 38 85m31.5-74.5 19 15.5m0 0s-34.833 39.488-50.5 59"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={80.75}
        x2={138.25}
        y1={82.5}
        y2={141}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#6A2067" />
        <Stop offset={1} stopColor="#1A00FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default GetStartIcon;
