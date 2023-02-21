import * as React from "react"
import { Path, Svg } from "react-native-svg"
import { Colors } from "../../Resource/Colors"

const SerachIcon = (props) => (
  <Svg
    width={25}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19.75 10c0-5.385-4.365-9.75-9.75-9.75S.25 4.615.25 10s4.365 9.75 9.75 9.75a9.712 9.712 0 0 0 6.344-2.346l5.99 5.99.084.073a.75.75 0 0 0 .976-1.133l-5.99-5.99A9.712 9.712 0 0 0 19.75 10Zm-18 0a8.25 8.25 0 1 1 16.5 0 8.25 8.25 0 0 1-16.5 0Z"
      fill={Colors.themeColor}
    />
  </Svg>
)

export default SerachIcon