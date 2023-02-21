import * as React from "react"
import { Path, Svg } from "react-native-svg"
import { Colors } from "../../Resource/Colors"

const LikeIcon = (props) => (
  <Svg
    width={24}
    height={21}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m11.873 2.655-.655-.765C8.58-.747 4.377-.567 1.741 2.07c-2.636 2.635-2.13 7.732.507 10.367 1.07 1.07 2.672 2.552 4.806 4.444l1.796 1.58 2.017 1.751a1.5 1.5 0 0 0 1.94.017l1.634-1.37c2.86-2.418 4.984-4.322 6.37-5.714l.359-.366.323-.341c2.455-2.648 3.086-7.794.511-10.369l-.186-.18c-2.648-2.454-6.64-2.574-9.215 0l-.731.766Zm-9.07.475C4.886 1.045 8.11.948 10.117 2.912l1.693 1.978 1.878-1.964c1.925-1.925 4.995-1.898 7.11.063l.166.16c1.819 1.82 1.51 6.025-.571 8.269l-.313.33-.346.353c-1.149 1.153-2.85 2.697-5.095 4.62l-1.167.993-1.625 1.362-2.014-1.748-1.44-1.265c-2.032-1.795-3.598-3.231-4.695-4.302l-.39-.384C1.139 9.205.867 5.066 2.803 3.13Z"
      fill={Colors.themeColor}
    />
  </Svg>
)

export default LikeIcon