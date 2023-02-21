import * as React from "react"
import { Colors } from "../../Resource/Colors"
import Svg, { Path } from "react-native-svg"

const InstaLogo = (props) => (
  <Svg
    width={182}
    height={49}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}

  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M180.184 26.469c.205-.89.453-1.419.995-1.419.698 0 .931.834.774 1.915-.653 4.49-2.593 6.195-4.965 6.195-1.111 0-4.299-.511-5.402-5.085-.813-3.377-.612-9.55-.523-11.437.002-.051-.07-.315-.227.02l-.034.072c-.449.96-1.581 3.38-2.267 6.05-1.079 4.196-1.172 7.117-1.119 7.59.109.969-1.111 1.121-1.694 1.121-.917 0-2.043-.072-2.955-1.596-.319-.532-.735-2.216-1.046-5.064-.408-3.722-.471-6.53-.496-7.613l-.002-.123c-.012-.485-.317-.41-.588.05l-.041.068c-.499.842-1.493 2.518-2.557 6.661-.504 1.96-.578 4.444-.636 6.41-.018.58-.033 1.114-.059 1.577-.042.774-.35 1.074-.745 1.15-.571.108-2.112.36-3.624-.171-.342-.12-.811-.368-.892-.566-.132-.323-.216-1.348-.269-2.602-1.272 2.848-2.841 3.488-4.493 3.488-1.587 0-4.357-1.04-4.927-4.408 0 0-.341.671-.94 1.447-2.659 3.442-7.895 4.32-10.604.262a6.98 6.98 0 0 1-.369-.633c-.959 1.985-2.749 3.321-4.621 3.321-1.599 0-4.295-1.025-5.491-4.21-1.723-4.587.113-11.439.276-12.046l.006-.022c.095-.356-.053-.455-.567-.424-1.606.1-3.112.088-3.112.088-.887 2.646-2.619 6.046-4.236 8.578a43.883 43.883 0 0 1-4.524 5.878c.018 1.181.039 2.317.058 3.355.014.759.027 1.466.037 2.1.061 3.748-.769 7.542-2.038 9.306-1.441 2.003-3.789 3.434-6.527 3.228-2.582-.193-5.99-1.671-5.701-5.648.227-3.114 3.314-5.789 7.379-9.313l.017-.014 2.43-2.108-.077-2.138c-.095.132-.203.279-.327.44-2.64 3.447-7.895 4.32-10.604.262a8.242 8.242 0 0 1-.495-.85c-1.286 2.738-3.12 3.532-4.898 3.532-1.587 0-4.358-1.137-4.743-4.391 0 0-.124.383-.94 1.447-2.64 3.447-7.895 4.32-10.604.262-.566-.848-1.004-1.85-1.3-3.002-1.03 2.827-3.386 5.7-5.737 5.7-3.515 0-5.539-2.931-6.014-8.112-2.656 5.998-6.471 8.324-11.234 8.173-1.223-.039-3.14-.379-4.031-.754-1.036-.437-2.035-.935-1.76-1.879.282-.97.775-1.752 1.639-2.368.332-.237.887-.17 1.25.057.293.182.513.34.723.49.274.197.531.381.912.592 2.306 1.28 3.602-.037 3.946-1.314.45-1.671-.228-3.432-2.293-5.286-.557-.5-1.115-.98-1.648-1.44-.318-.273-.627-.54-.923-.798-1.137 1.813-2.72 4.327-4.35 6.892-2.615 4.116-5.054 5.742-6.784 5.742-2.262 0-3.845-1.525-3.515-9.753.065-1.623.146-3.399.217-4.926v-.003c.063-1.364.116-2.53.14-3.212.012-.327-.23-.316-.444-.115-1.217 1.144-3.805 4.367-5.79 10.973-1.085 3.611-1.251 4.973-1.37 5.947-.02.17-.04.329-.062.485-.126.878-2.555.583-2.999.497-.476-.093-.765-.319-1.015-.614-.25-.296-.452-.794-.577-1.405-.125-.611-.158-2.008-.158-3.205l.107-15.757c0-.511.291-.768.875-.768 1.225 0 2.603.542 3.119.806.304.157.438.385.438.621l-.066 10.071s.758-1.923 1.144-2.979c3.062-8.375 6.302-8.52 7.425-8.52.75 0 2.046.695 2.653 1.049.999.582 1.595 1.224 1.55 2.35-.033.82-.068 1.633-.102 2.426v.013c-.107 2.497-.206 4.791-.206 6.451v.1c0 2.51 0 5.153.93 5.153 1.112 0 2.564-2.38 4.46-5.488l.343-.562c.744-1.216 1.622-2.785 2.261-3.95a8.848 8.848 0 0 1-.247-.28c-1.057-1.254-1.345-2.46-.805-4.088.696-2.1 3.032-4.067 5.864-3.45 1.714.372 1.684 2.06.985 3.537-.985 2.084-2.097 3.12-2.097 3.12a224.774 224.774 0 0 1 4.503 3.215c2.358 1.756 3.667 3.83 3.026 6.593 0 0 2.984-2.256 3.832-6.431-.002-.235-.003-.477-.003-.728 0-2.36.068-10.003.068-10.003-.61-.017-1.346-.034-2.093-.051-1.134-.027-2.297-.054-3.1-.083-1.159-.042-.255-3.45.583-3.45.451 0 1.446.043 2.441.084.995.042 1.99.083 2.44.083 0 0 .086-4.357.25-5.845.109-.98.666-1.215 1.894-.975.889.173 1.64.334 2.477.669l.029.011c.348.139.916.364.878.792-.047.527-.248 5.518-.248 5.518s2.239.157 3.043.174c.956.02 3.369.14 3.71.28.753.306.05 2.782-.68 2.818-1.055.05-1.865.052-2.648.053-.296 0-.588 0-.888.004-.424.005-2.614.04-2.614.04-.058.724-.404 8.243-.404 13.524 0 3.965.966 5.825 1.98 5.825 1.733 0 3.852-3.197 4.332-5.972-.008-.977.056-2.022.2-3.138.502-3.863 1.476-5.608 2.678-7.181 1.845-2.414 4.26-3.002 6.586-2.35.864.243 2.162 1.078 2.97 2.277v-.865c0-.375.417-.879 1.012-.92.45-.032 1.037.023 1.717.171.65.143 2.045.527 2.056 1.29.002.105-.008.36-.022.727v.007a116.7 116.7 0 0 0-.065 2.041c-.018.836-.043 1.56-.067 2.284-.048 1.423-.096 2.844-.096 5.116 0 5.878.875 7.163 2.413 7.163 1.203 0 2.266-1.808 2.636-3.537-.343-1.727-.39-3.777-.138-6.189.27-2.588 1.223-5.29 2.678-7.215 1.832-2.423 4.26-3.002 6.586-2.35.864.243 2.162 1.078 2.97 2.277 0 0 0-.675-.004-.785-.015-.582.576-1.074 1.558-1.002.778.057 1.527.22 2.162.457.717.267 1.061.478 1.07 1.036.001.104-.008.352-.022.71h-.001c-.019.497-.047 1.205-.065 2.035a445.565 445.565 0 0 0-.081 11.733c.756-.974 1.342-1.891 2.108-3.129 1.429-2.31 2.814-5.504 3.379-7.95 0 0-1.722-.94-1.443-2.937.176-1.258.639-1.958 1.32-2.551 1.141-.994 4.716-1.246 4.331 1.865a7.7 7.7 0 0 1-.162.93c1.478-.208 3.093-.477 4.223-.728 1.586-.351 2.689-.066 3.207.494.565.61.79 1.246.513 2.462-.116.51-.231.993-.341 1.457v.002c-.506 2.127-.919 3.869-.992 6.174-.135 4.272 1.025 6.741 2.625 6.741 1.102 0 2.109-.908 2.651-3.124-.449-1.965-.531-4.287-.279-6.578.346-3.133 1.223-5.314 2.678-7.24 1.832-2.422 4.259-3.002 6.586-2.348.864.242 2.162 1.077 2.969 2.276 0 0-.003-.545-.003-.832 0-.535.444-.923 1.07-.957.443-.024 1.01.032 1.663.175.649.142 2.045.527 2.056 1.29.002.106-.008.364-.022.734l-.001.002c-.019.504-.046 1.216-.064 2.039-.018.836-.043 1.56-.067 2.285-.048 1.421-.096 2.843-.096 5.115 0 5.878.726 7.163 2.263 7.163 1.536 0 2.948-3.076 3.384-5.342l-.002-.696c0-4.367.098-10.397.12-11.774v-.022l.001-.029v-.02l.004-.215c0-.607.192-1.023.98-1.023.638 0 2.141.35 2.904.56.169.046.731.304.728 1.08-.009 2.053-.018 7.47-.018 7.47s.486-1.358 1.184-3.366c.859-2.47 1.686-4.553 2.4-5.327.823-.946 3.111-.15 3.865.3 1.161.692 1.384 1.54 1.391 2.534.034 4.648.283 7.076.428 8.48l.039.381c.019.202.131.184.142.098.209-1.667 1.095-5.772 3.36-10.942.799-1.824 2.401-1.274 3.508-.894l.012.004c2.574.885 2.839 1.783 2.787 2.69-.249 4.418-.281 8.858-.085 11.27.248 3.068 1.215 4.6 2.29 4.6.963 0 1.71-.698 2.42-3.793Zm-40.54 2.278c.67-1.367 1.21-3.304 1.323-5.782.229-5.032-.744-7.754-2.824-7.952-2.109-.201-3.383 2.024-3.839 4.97-.448 2.893-.419 6.355.205 8.428 1.143 3.802 3.837 2.98 5.135.336Zm-35.651 8.806c-.028 4.124-.653 7.74-1.994 8.791-1.902 1.49-4.458.372-3.928-2.638.468-2.663 2.683-5.383 5.927-8.706 0 0 .007.758-.005 2.553Zm-1.358-8.81c.625-1.282 1.198-3.551 1.316-5.81.293-5.604-.731-7.933-2.808-7.933-2.136 0-3.326 2.556-3.816 5.31-.378 2.124-.561 5.493.203 8.097 1.118 3.81 3.815 2.983 5.105.336Zm-20.676-5.832c-.127 2.392-.583 4.391-1.315 5.843-1.324 2.629-3.944 3.462-5.1-.336-.833-2.738-.55-6.473-.203-8.49.515-2.994 1.802-5.116 3.813-4.915 2.064.207 3.068 2.921 2.805 7.898ZM.248 10.734C1.513 5.648 5.519 1.6 9.163.165c1.525-.6 4.754.548 4.777 1.643.079 3.787.06 9.706.051 12.96l-.004 1.46v.828c-.005 2.828-.01 7.068-.112 9.837-.093 2.533-.611 4.866-2.092 6.808-1.234 1.62-3.367 2.625-3.867 2.202-.307-.259-.125-.803.138-1.588.12-.358.257-.766.372-1.221.363-1.432.564-2.881.564-7.47 0-1.96.036-8.214.066-13.494a3203.295 3203.295 0 0 0 .04-8.091c.002-.928.002-1.411-.475-1.035C5.933 5.12 3.798 9.944 4.287 14.26c.205 1.809.838 2.743 1.273 3.385.369.545.596.88.3 1.362-.546.892-7.214-1.833-5.612-8.274Z"
      fill={Colors.themeColor}

    />
  </Svg>
)

export default InstaLogo