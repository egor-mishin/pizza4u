import * as React from "react"
import Svg, { SvgProps, Defs, ClipPath, Path, G } from "react-native-svg"
const ProfileIcon = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    width={22}
    height={24}
    viewBox="0 0 682.667 682.667"
    {...props}
  >
    <Defs>
      <ClipPath id="a" clipPathUnits="userSpaceOnUse">
        <Path d="M0 512h512V0H0Z" data-original="#000000" />
      </ClipPath>
    </Defs>
    <G
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={40}
      clipPath="url(#a)"
      transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
    >
      <Path
        strokeLinejoin="round"
        d="M0 0c0 70.692 57.308 128 128 128 70.692 0 128-57.308 128-128 0-70.692-57.308-128-128-128C57.308-128 0-70.692 0 0Z"
        data-original="#000000"
        style={{
          strokeWidth: 40,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(128 364)"
      />
      <Path
        d="M0 0c23.308-10.357 41.955-22.615 56.089-35.034C77.637-53.966 89.902-81.317 89.902-110v-37c0-22.091-17.908-40-40-40h-392c-22.091 0-40 17.909-40 40v37c0 28.683 12.265 56.034 33.813 74.966C-311.801-2.979-245.262 29-146.098 29"
        data-original="#000000"
        style={{
          strokeWidth: 40,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeMiterlimit: 10,
          strokeDasharray: "none",
          strokeOpacity: 1,
        }}
        transform="translate(402.098 207)"
      />
    </G>
  </Svg>
)
export default ProfileIcon
