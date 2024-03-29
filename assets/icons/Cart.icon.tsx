import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function CartIcon() {
  return (
    <Svg
      width={50}
      height={25}
      viewBox="0 0 21 18"
      fill="none"
    >
      <Path
        d="M4.5 3h10.1c2.25 0 3.375 0 4.163.573.255.185.479.409.664.664C20 5.025 20 6.15 20 8.4v.2c0 2.25 0 3.375-.573 4.163-.185.255-.409.479-.664.664C17.975 14 16.85 14 14.6 14h-3.954c-2.006 0-3.01 0-3.757-.488a3.002 3.002 0 01-.648-.572c-.577-.68-.702-1.676-.953-3.667L4.5 3z"
        stroke="#222628"
        strokeWidth={1.4}
      />
      <Path
        d="M1 .3a.7.7 0 000 1.4V.3zm4.6 2.84L4.392 1.125l-1.2.72L4.4 3.86l1.2-.72zM2.934.3H1v1.4h1.934V.3zm1.458.825A1.7 1.7 0 002.934.3v1.4a.3.3 0 01.257.146l1.2-.72z"
        fill="#222628"
      />
      <Circle cx={16.5} cy={16.5} r={1} fill="#222628" />
      <Circle cx={9.5} cy={16.5} r={1} fill="#222628" />
      <Path
        stroke="#222628"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.3 7.7L13.7 7.7"
      />
    </Svg>
  )
}

export default CartIcon
