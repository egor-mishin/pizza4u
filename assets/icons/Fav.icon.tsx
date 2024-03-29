import * as React from "react"
import Svg, { Path } from "react-native-svg"

function FavIcon() {
  return (
    <Svg
      width={50}
      height={25}
      viewBox="0 0 18 16"
      fill="none"
>
      <Path
        clipRule="evenodd"
        d="M1.317 7.707c-1.112-3.18.886-5.788 3.11-6.449 2.17-.645 3.768.012 4.567.942.799-.93 2.396-1.584 4.558-.942 2.37.704 4.23 3.27 3.117 6.449C15.265 11.827 9.793 15 8.994 15c-.8 0-6.225-3.125-7.677-7.293z"
        stroke="#222628"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default FavIcon
