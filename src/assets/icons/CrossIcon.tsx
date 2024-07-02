import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CrossIcon = (props: SvgProps) => (
  <Svg width={17} height={17} fill="none" viewBox="0 0 17 17" {...props}>
    <Path
      stroke="#EAE9FC"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 16 15.931 1M16 16 1.069 1"
    />
  </Svg>
);
export default CrossIcon;
