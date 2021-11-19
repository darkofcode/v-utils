import uvStyle from "./style.module.scss";

export default function Eva(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 700">
      <defs>
        <radialGradient
          id="radial-gradient"
          cx="420.25"
          cy="530.76"
          r="217.28"
          gradientTransform="matrix(0.77, 0, 0, 0.66, 60.05, 181.5)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2484c6" />
          <stop offset="1" stopColor="#2484c6" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="linear-gradient"
          x1="258.61"
          y1="356.56"
          x2="442.86"
          y2="613.03"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#2484c6" />
          <stop offset="0.06" stopColor="#2484c6" stopOpacity="0.84" />
          <stop offset="0.16" stopColor="#2484c6" stopOpacity="0.62" />
          <stop offset="0.26" stopColor="#2484c6" stopOpacity="0.43" />
          <stop offset="0.36" stopColor="#2484c6" stopOpacity="0.27" />
          <stop offset="0.47" stopColor="#2484c6" stopOpacity="0.15" />
          <stop offset="0.58" stopColor="#2484c6" stopOpacity="0.07" />
          <stop offset="0.71" stopColor="#2484c6" stopOpacity="0.02" />
          <stop offset="0.86" stopColor="#2484c6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g id="Layer_2" data-name="Layer 2">
        <g id="handBack">
          <path
            d="M321.72,325.59s-.75,42-7.17,63.3-11.42,4.74-11.42,4.74a107.82,107.82,0,0,1-.91-19.47S319,335.13,321.72,325.59Z"
            fill="#808285"
            stroke="#231f20"
            strokeMiterlimit="10"
          />
        </g>
        <g id="body">
          <path
            d="M219.67,442.4C162.72,422.69,171,297,175.87,282.51c-2,17.54,30,36.58,71.65,42.55s77-3.43,79-21a13.74,13.74,0,0,0,.09-1.44,1.51,1.51,0,0,1,.05.48C325.93,321,279.54,463.11,219.67,442.4Z"
            fill="#bcbec0"
            stroke="#231f20"
            strokeMiterlimit="10"
          />
          <ellipse
            cx="235.14"
            cy="351.17"
            rx="3.57"
            ry="4.43"
            transform="translate(-164.61 488.33) rotate(-75.13)"
            fill="#27aae1"
          />
          <ellipse
            cx="245.97"
            cy="352.32"
            rx="3.57"
            ry="4.43"
            transform="translate(-157.67 499.65) rotate(-75.13)"
            fill="#27aae1"
          />
          <ellipse
            cx="256.63"
            cy="353.31"
            rx="3.57"
            ry="4.43"
            transform="matrix(0.26, -0.97, 0.97, 0.26, -150.7, 510.69)"
            fill="#27aae1"
          />
          <ellipse
            cx="269.84"
            cy="352.91"
            rx="5.42"
            ry="5.9"
            transform="matrix(0.53, -0.85, 0.85, 0.53, -172.34, 395.74)"
            fill="#f15a29"
          />
          <path
            d="M326.76,303.08c-2,17.54-37.39,26.92-79,21s-73.68-25-71.65-42.55a14.61,14.61,0,0,1,3.05-7.29c9.67-12.71,40.55-18.76,75.93-13.68,29.69,4.25,54.51,15.17,65.57,27.44,4,4.47,6.22,9.11,6.17,13.67C326.84,302.13,326.81,302.6,326.76,303.08Z"
            fill="#808285"
            stroke="#231f20"
            strokeMiterlimit="10"
          />
          <path
            d="M320.38,288.25c-8.58,15.57-39.73,23.92-76.8,18.74-32.32-4.51-56.25-17.65-64.71-32.49,9.68-12.71,40.56-18.76,75.94-13.68C284.49,265.07,309.32,276,320.38,288.25Z"
            fill="#58595b"
            opacity="0.55"
          />
        </g>
        <g className={uvStyle.light} id="light">
          <ellipse
            cx="382.99"
            cy="530.95"
            rx="156.78"
            ry="32.16"
            transform="matrix(1, -0.02, 0.02, 1, -11.77, 8.69)"
            fill="url(#radial-gradient)"
          />
          <path
            d="M250.3,353.21,538.07,522.62s-232.51,9.84-311.83,11.83Z"
            fill="url(#linear-gradient)"
          />
        </g>
        <g className={uvStyle.text} id="text">
          <ellipse
            cx="197.71"
            cy="138.79"
            rx="7.55"
            ry="4.34"
            transform="translate(-42.91 117.45) rotate(-30)"
            fill="#d1d3d4"
          />
          <ellipse
            cx="207.55"
            cy="145.9"
            rx="4.59"
            ry="3.09"
            transform="translate(-46.12 149.26) rotate(-35.86)"
            fill="#d1d3d4"
          />
          <ellipse
            cx="180.46"
            cy="128.58"
            rx="11.85"
            ry="7.79"
            transform="translate(-40.11 107.46) rotate(-30)"
            fill="#d1d3d4"
          />
          <path
            d="M47.82,140.76A27.14,27.14,0,0,1,44,142.47c-10.62,3.79-21.54.42-24.39-7.55a12.32,12.32,0,0,1-.32-7C9.56,123.39,3.05,117.07.89,109.08-2.76,95.6,5,79.3,21.5,64.36a11.84,11.84,0,0,1-2.41-4c-2.85-8,3.45-17.51,14.08-21.31a27.33,27.33,0,0,1,5.51-1.35c.07-11.93,14.2-26,34.56-33.24,23.19-8.3,45.69-4.7,50.24,8a13.42,13.42,0,0,1,.56,2q2.37-1,4.86-1.91c23.19-8.29,45.69-4.7,50.24,8,.15.42.28.84.39,1.27,25.44,3.57,44.12,12.58,47.73,25.92,5.8,21.43-24.75,49.18-68.86,67.79-.33,13-25.7,26.26-58.19,30.09-21.38,2.53-40.71.36-52.39-5"
            fill="#bcbec0"
          />
          <text
            transform="translate(39.48 103.08) rotate(-15.13) scale(0.79 1)"
            fontSize="21.02"
            fill="#00a79d"
            fontFamily="Nova Square"
          >
            Wall EEEEEEEEEEEEEE
          </text>
        </g>
        <g id="handFront">
          <path
            d="M202.85,430.9s-6-28.89-6-33.61c-.75-12.76-.38-59.18-.41-63s-3.19-14.2-13.67-20.32c-4.75-2.21-4.9,1.65-4.9,1.65s-4.53,22.79-4.45,34.66S185,417.62,202.85,430.9Z"
            fill="#231f20"
            stroke="#231f20"
            strokeMiterlimit="10"
            opacity="0.52"
          />
          <path
            d="M148.23,442.29s-11,24.29-14.08-3.58,15.21-85.64,23.74-103.81c6-11.79,8.56-14.44,16.52-12.55s13.54,11.07,13.5,14.89c0,3.34-.6,6.95-3.87,17.43S148.23,442.29,148.23,442.29Z"
            fill="#f1f2f2"
            stroke="#231f20"
            strokeMiterlimit="10"
          />
        </g>
        <g id="head">
          <path
            d="M180.76,229.15c1.91-15,4.7-42,27.45-63.93s62.19-33.47,101.28-7.43c32.06,21.36,47,88.13,15.05,116.64-7,6.26-16.26,10.67-28.09,12.36C230.73,296.18,177.42,261.38,180.76,229.15Z"
            fill="#d1d3d4"
            stroke="#231f20"
            strokeMiterlimit="10"
          />
          <path
            d="M258.65,271.1c-16.58-11.66-14.71-53.19,37.36-76.38a32.18,32.18,0,0,1,4.85-1.73c30.91-8.1,38.68,10.92,39.74,16.3,1.1,5.53,9.25,48.87-19.75,66.83C299.49,288.48,269.19,278.51,258.65,271.1Z"
            fill="#231f20"
            stroke="#231f20"
            strokeMiterlimit="10"
          />
          <ellipse
            cx="288.48"
            cy="242.87"
            rx="14.73"
            ry="19.39"
            transform="translate(-16.85 464.17) rotate(-76.03)"
            fill="#4eb9e2"
          />
          <ellipse
            cx="329.17"
            cy="237.18"
            rx="17.35"
            ry="8.2"
            transform="translate(-34.54 416.97) rotate(-62.08)"
            fill="#4eb9e2"
          />
        </g>
      </g>
    </svg>
  );
}
