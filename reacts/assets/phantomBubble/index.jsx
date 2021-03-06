import { useEffect } from "react";
import uvStyle from "./style.module.scss";

export default function Phantom(props) {
  useEffect(() => {
    const clouds = document.querySelectorAll(`#${uvStyle.cloud} g`);
    // const clouds = cloud?.children;
    for (let i = 0; i < clouds.length; i++) {
      const elm = clouds[i];
      elm.classList.add(uvStyle.cloudRound);
      elm.style.setProperty("--cloudDelay", `${i}s`);
    }

    const bigCloud = document.querySelector(`#${uvStyle.cloud} path`);
    bigCloud?.classList.add(uvStyle.cloud);

    // star
    const star = document.querySelector(`#${uvStyle.star}`);
    const stars = star?.children;
    for (let i = 0; i < stars?.length; i++) {
      const elm = stars[i];
      elm.style.setProperty("--starDelay", `${i}s`);
      elm.classList.add(uvStyle.star);
    }

    const gas = document.querySelector(`#${uvStyle.gas}`);
    const gases = gas?.children;
    for (let i = 0; i < gases?.length; i++) {
      const elm = gases[i];
      elm.style.setProperty("--gasDelay", `${i}s`);
      elm.classList.add(uvStyle.gas);
    }
  }, []);
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 509.46 724.92">
      <defs>
        <linearGradient
          id="Orange_Yellow"
          x1="22.75"
          y1="609.15"
          x2="507.66"
          y2="609.15"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff33b" />
          <stop offset="0.04" stopColor="#fee72e" />
          <stop offset="0.12" stopColor="#fed51b" />
          <stop offset="0.2" stopColor="#fdca10" />
          <stop offset="0.28" stopColor="#fdc70c" />
          <stop offset="0.67" stopColor="#f3903f" />
          <stop offset="0.89" stopColor="#ed683c" />
          <stop offset="1" stopColor="#e93e3a" />
        </linearGradient>
      </defs>
      <title>Asset 6user</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id={uvStyle.gas}>
          <polyline
            id="third"
            points="396.56 601.49 134.78 601.49 247.37 314.37 264.99 311.93 265.67 311.91 266.35 311.93 283.96 314.37"
            fill="#be1e2d"
            opacity="0.64"
          />
          <polygon
            id="second"
            points="374.34 601.42 156.99 601.42 247.37 314.37 264.99 312 265.67 311.91 266.34 312 283.96 314.37 374.34 601.42"
            fill="#e01f26"
            opacity="0.57"
          />

          <polygon
            id="first"
            points="329.92 601.4 201.42 601.4 254.05 314.35 264.23 312.01 264.67 311.91 265.09 312 275.63 314.35 329.92 601.4"
            fill="#f3bb3a"
            opacity="0.68"
          />
        </g>

        <g className={uvStyle.phantom}>
          <polygon
            points="267.78 156.41 267.61 58.36 265.65 58.46 260.63 58.7 261.48 156.92 267.74 156.92 267.78 156.41"
            fill="#414042"
          />
          <path
            d="M266.1,58.46h0l.08-37.24c-2.17-3.32-3.95-.13-3.95-.13l.35,37.56Z"
            fill="#6d6e71"
          />
          <polygon
            points="265.21 333.92 265.21 333.92 246.31 335.28 238.48 338 221.8 337.32 212.61 328.81 200.69 324.05 137.72 297.15 137.38 229.75 195.59 23.45 197.72 23.45 197.72 248.77 211.63 248.77 215.97 244.94 215.97 240.09 226.06 230 227.08 220.17 231.16 220.17 242.06 164.38 255.33 156.22 265.21 156.22 265.21 333.92 265.21 333.92"
            fill="#939598"
          />
          <polygon
            points="191.84 65.58 192.87 246.09 192.87 246.09 144.61 248.65 144.61 231.78 191.84 65.58"
            fill="#414042"
          />
          <polygon
            points="193.12 257.85 193.12 314.25 144.61 293.06 144.61 260.13 193.12 257.85"
            fill="#414042"
          />
          <rect x="209.04" y="254.77" width="8.68" height="5.96" fill="#414042" />
          <rect x="209.04" y="263.62" width="8.34" height="4.94" fill="#414042" />
          <rect x="209.04" y="271.45" width="8.17" height="5.96" fill="#414042" />
          <rect x="245.8" y="231.11" width="19.23" height="14.3" fill="#414042" />
          <polygon
            points="227.08 234.17 219.76 239.96 219.42 245.75 226.57 245.58 227.08 234.17"
            fill="#414042"
          />
          <polygon
            points="252.35 180.04 256.78 180.04 256.95 167.88 251.76 168.04 252.35 180.04"
            fill="#414042"
          />
          <polygon
            points="253.46 152.04 254.4 145.58 255.76 151.88 255.84 168.04 253.12 168.04 253.46 152.04"
            fill="#6d6e71"
          />
          <rect x="251.92" y="286.83" width="13.28" height="1.96" fill="#58595b" />
          <rect x="254.88" y="264.26" width="2.21" height="22.55" fill="#58595b" />
          <rect x="264.24" y="263.83" width="0.96" height="22.98" fill="#58595b" />
          <polygon
            points="245.24 306.09 245.84 330.26 252.82 331.79 265.12 332.3 265.24 289.15 258.35 288.98 245.24 306.09"
            fill="#58595b"
          />
          <polygon
            points="227.84 291.7 242.31 294.43 241.97 330 227.16 326.09 227.84 291.7"
            fill="#58595b"
          />
          <polygon
            points="241.29 277.41 241.12 255.79 229.2 253.58 229.03 275.53 241.29 277.41"
            fill="#58595b"
          />
          <polygon
            points="264.21 333.92 264.21 333.92 283.1 335.28 290.93 338 307.61 337.32 316.8 328.81 328.72 324.05 391.69 297.15 392.04 229.75 333.82 23.45 331.69 23.45 331.69 248.77 317.78 248.77 313.44 244.94 313.44 240.09 303.36 230 302.33 220.17 298.25 220.17 287.36 164.38 274.08 156.22 264.21 156.22 264.21 333.92 264.21 333.92"
            fill="#939598"
          />
          <polygon
            points="337.57 65.58 336.54 246.09 336.54 246.09 384.8 248.65 384.8 231.78 337.57 65.58"
            fill="#414042"
          />
          <polygon
            points="336.29 257.85 336.29 314.25 384.8 293.06 384.8 260.13 336.29 257.85"
            fill="#414042"
          />
          <rect
            x="311.7"
            y="254.77"
            width="8.68"
            height="5.96"
            transform="translate(632.07 515.49) rotate(-180)"
            fill="#414042"
          />
          <rect
            x="312.04"
            y="263.62"
            width="8.34"
            height="4.94"
            transform="translate(632.41 532.17) rotate(-180)"
            fill="#414042"
          />
          <rect
            x="312.21"
            y="271.45"
            width="8.17"
            height="5.96"
            transform="translate(632.58 548.86) rotate(-180)"
            fill="#414042"
          />
          <rect
            x="264.38"
            y="231.11"
            width="19.23"
            height="14.3"
            transform="translate(547.99 476.52) rotate(-180)"
            fill="#414042"
          />
          <polygon
            points="302.33 234.17 309.65 239.96 309.99 245.75 302.84 245.58 302.33 234.17"
            fill="#414042"
          />
          <polygon
            points="277.06 180.04 272.63 180.04 272.46 167.88 277.65 168.04 277.06 180.04"
            fill="#414042"
          />
          <polygon
            points="275.95 152.04 275.01 145.58 273.65 151.88 273.57 168.04 276.29 168.04 275.95 152.04"
            fill="#6d6e71"
          />
          <rect
            x="264.21"
            y="286.83"
            width="13.28"
            height="1.96"
            transform="translate(541.7 575.62) rotate(-180)"
            fill="#58595b"
          />
          <rect
            x="272.32"
            y="264.26"
            width="2.21"
            height="22.55"
            transform="translate(546.85 551.07) rotate(-180)"
            fill="#58595b"
          />
          <rect
            x="264.21"
            y="263.83"
            width="0.96"
            height="22.98"
            transform="translate(529.38 550.64) rotate(-180)"
            fill="#58595b"
          />
          <polygon
            points="284.17 306.09 283.57 330.26 276.59 331.79 264.3 332.3 264.17 289.15 271.06 288.98 284.17 306.09"
            fill="#58595b"
          />
          <polygon
            points="301.57 291.7 287.11 294.43 287.44 330 302.25 326.09 301.57 291.7"
            fill="#58595b"
          />
          <polygon
            points="288.13 277.41 288.3 255.79 300.21 253.58 300.38 275.53 288.13 277.41"
            fill="#58595b"
          />
        </g>
        <g id={uvStyle.cloud}>
          <g id="cloudG11">
            <circle cx="473.28" cy="597.8" r="36.18" fill="#f26522" />
            <circle cx="473.28" cy="597.8" r="20.36" fill="#be1e2d" />
          </g>
          <g id="cloudG10">
            <circle cx="110.9" cy="588.78" r="49.59" fill="#f26522" />
            <circle cx="110.9" cy="588.78" r="27.91" fill="#be1e2d" />
          </g>
          <g id="cloudG9">
            <circle cx="295.08" cy="659.6" r="65.32" fill="#f26522" />
            <circle cx="295.08" cy="659.6" r="36.77" fill="#be1e2d" />
          </g>
          <g id="cloudG8">
            <circle cx="342.92" cy="529.03" r="47.29" fill="#f29e5f" />
            <circle cx="342.92" cy="529.03" r="26.62" fill="#ce2427" />
          </g>
          <g id="cloudG7">
            <circle cx="389.79" cy="575.7" r="32.91" fill="#f29e5f" />
            <circle cx="389.79" cy="575.7" r="18.52" fill="#ce2427" />
          </g>
          <g id="cloudG6">
            <circle cx="317.89" cy="548.53" r="40.39" fill="#f29e5f" />
            <circle cx="317.89" cy="548.53" r="22.74" fill="#ce2427" />
          </g>
          <g id="cloudG4">
            <circle cx="209.55" cy="567.26" r="46.1" fill="#f29e5f" />
            <circle cx="209.55" cy="567.26" r="25.95" fill="#ce2427" />
          </g>
          <g id="cloudG12">
            <circle cx="192.07" cy="523.46" r="27.16" fill="#f29e5f" />
            <circle cx="192.07" cy="523.46" r="15.29" fill="#ce2427" />
          </g>

          <path
            d="M502.91,623.87c-9.32-3.28-13.47,0-13.47,0S500.06,604,480.64,601c-4.57-16.2-16.83-10.5-21-1.77,0,0-11-14.27-22.26-5.87-1.3,1-5.83-6.59-13.14-1.11a21.88,21.88,0,0,0-6.81-.51,12.75,12.75,0,0,0-7.93-2.79,12.17,12.17,0,0,0-4.32.78c-1.12-7-6.61-12.21-13.23-12.21a12.24,12.24,0,0,0-4.68.92c-.18-11.3-10.06-20.39-22.22-20.39a23.28,23.28,0,0,0-12.23,3.42c-1.19-3.16-7.62-5.59-15.37-5.59h-.34c-3.32-7.05-9.24-11.74-16-11.74a16.07,16.07,0,0,0-11.79,5.54c-4.58-5.77-12.36-9.56-21.19-9.56a27.37,27.37,0,0,0-20,8.18c-4.69-5.49-12.43-9.07-21.18-9.07-9,0-16.92,3.79-21.59,9.55a16.53,16.53,0,0,0-12-5.53c-6.85,0-12.87,4.68-16.26,11.74h-.34c-7.89,0-14.45,2.42-15.65,5.58a24.18,24.18,0,0,0-12.47-3.41c-12.38,0-22.44,9.09-22.63,20.38a12.89,12.89,0,0,0-4.76-.92c-6.75,0-12.34,5.27-13.48,12.22a12.67,12.67,0,0,0-4.41-.78,13.09,13.09,0,0,0-8.06,2.78,22.78,22.78,0,0,0-7,.51c-7.45-5.47-12.06,2.08-13.38,1.11C83.56,584,72.35,598.3,72.35,598.3c-4.22-8.73-16.7-14.44-21.36,1.76-19.78,3-9,22.91-9,22.91s-4.22-3.27-13.71,0-4,10.58-4,10.58,2.8,5.42,10.4,9.92a10.93,10.93,0,0,0-2.81,7c0,9.87,15.55,17.87,34.72,17.87,17.58,0,32.1-6.72,34.41-15.44,5.87,4.49,14,7.27,23,7.27,9.55,0,18.14-3.12,24.07-8.09,6.61,13.57,26.26,23.41,49.46,23.41,15.66,0,29.7-4.48,39.2-11.56a37.47,37.47,0,0,0,13.4,2.37c9,0,16.89-2.9,21.37-7.27a11.58,11.58,0,0,0,3.9-8.3,1.62,1.62,0,0,0,0-.22,43.27,43.27,0,0,0,13.62,5.66,55,55,0,0,0,12.69,1.45c10.7,0,20.34-2.94,27.1-7.64a51.29,51.29,0,0,0,12.48,1.51c1.38,0,2.74,0,4.08-.16,4,9,15.66,15.48,29.36,15.48a40.13,40.13,0,0,0,14.9-2.78,24.34,24.34,0,0,0,19.83,10.44A23.8,23.8,0,0,0,424,669.64a29,29,0,0,0,6.77.79c10,0,18.25-4.91,20.06-11.4a59.89,59.89,0,0,0,8,.66c2.78,11.23,11.36,19.42,21.51,19.42,7.37,0,13.91-4.32,18-11,5.28-3,9.06-10.76,9.06-19.92a30.49,30.49,0,0,0-1.53-9.7C507.42,634.8,510.1,626.39,502.91,623.87Z"
            fill="url(#Orange_Yellow)"
          />

          <g id="cloudG3">
            <circle cx="258.73" cy="532.86" r="49.59" fill="#f26522" />
            <circle cx="258.73" cy="532.86" r="27.91" fill="#be1e2d" />
          </g>
          <g id="cloudG2">
            <circle cx="46.77" cy="651.63" r="40.01" fill="#f26522" />
            <circle cx="46.77" cy="651.63" r="22.52" fill="#be1e2d" />
          </g>
          <g id="cloudG1">
            <circle cx="146.83" cy="536.61" r="40.39" fill="#f29e5f" />
            <circle cx="146.83" cy="536.61" r="22.74" fill="#ce2427" />
          </g>
        </g>
        <g id={uvStyle.star}>
          <polygon
            points="58.37 96.98 56.25 95.75 54.05 96.8 54.55 94.41 52.87 92.63 55.31 92.38 56.48 90.23 57.47 92.47 59.87 92.92 58.05 94.55 58.37 96.98"
            fill="#f7941d"
          />
          <polygon
            points="410.97 13.49 406.73 11.04 402.32 13.14 403.34 8.35 399.97 4.8 404.84 4.29 407.18 0 409.16 4.47 413.97 5.37 410.33 8.64 410.97 13.49"
            fill="#f7941d"
          />
          <polygon
            points="110.97 53.57 108.85 51.59 106.02 52.21 107.25 49.58 105.79 47.08 108.67 47.44 110.6 45.28 111.14 48.13 113.79 49.29 111.25 50.69 110.97 53.57"
            fill="#f7941d"
          />
          <polygon
            points="442.63 154.93 437.93 153.09 433.75 155.91 434.06 150.88 430.09 147.77 434.97 146.51 436.69 141.77 439.4 146.02 444.44 146.19 441.24 150.09 442.63 154.93"
            fill="#f7941d"
          />
          <polygon
            points="207.99 37.74 202.54 35.13 197.31 38.14 198.1 32.16 193.62 28.11 199.56 27.02 202.03 21.51 204.9 26.82 210.91 27.46 206.74 31.83 207.99 37.74"
            fill="#f7941d"
          />
          <polygon
            points="71.9 245.06 69.33 242.92 66.12 243.83 67.36 240.73 65.51 237.95 68.84 238.17 70.91 235.55 71.73 238.78 74.86 239.94 72.04 241.72 71.9 245.06"
            fill="#f7941d"
          />
          <polygon
            points="47.98 314.47 45.09 314.76 43.7 317.3 42.53 314.65 39.69 314.1 41.85 312.18 41.49 309.3 43.99 310.76 46.61 309.53 45.99 312.36 47.98 314.47"
            fill="#f7941d"
          />
          <polygon
            points="345.6 224.63 342.57 223.86 340.22 225.92 340.02 222.8 337.34 221.19 340.24 220.04 340.94 216.99 342.93 219.4 346.05 219.12 344.38 221.76 345.6 224.63"
            fill="#f7941d"
          />
          <polygon
            points="160.75 229.74 156.07 227.14 151.26 229.53 152.29 224.26 148.54 220.43 153.86 219.78 156.34 215.03 158.6 219.89 163.89 220.78 159.97 224.44 160.75 229.74"
            fill="#f7941d"
          />
          <polygon
            points="429.6 344.63 425.51 344.01 422.68 347.02 422.01 342.94 418.27 341.17 421.94 339.27 422.47 335.17 425.41 338.08 429.48 337.31 427.61 341.01 429.6 344.63"
            fill="#f7941d"
          />
          <polygon
            points="141.09 345.4 137.46 344.17 134.39 346.46 134.44 342.63 131.3 340.41 134.97 339.27 136.1 335.61 138.32 338.74 142.16 338.69 139.86 341.77 141.09 345.4"
            fill="#f7941d"
          />
          <polygon
            points="5.52 214.93 3.55 214.77 2.3 216.3 1.84 214.38 0 213.66 1.69 212.63 1.8 210.66 3.3 211.95 5.21 211.45 4.45 213.27 5.52 214.93"
            fill="#f7941d"
          />
          <polygon
            points="473.26 74.25 468.87 73.77 465.98 77.12 465.08 72.8 461 71.09 464.84 68.89 465.2 64.48 468.48 67.45 472.78 66.44 470.97 70.47 473.26 74.25"
            fill="#f7941d"
          />
          <ellipse cx="375.48" cy="76.04" rx="1.79" ry="2.81" fill="#f7941d" />
          <path d="M118.88,228.72v0Z" fill="#f7941d" />
          <ellipse cx="138.54" cy="13.23" rx="3.06" ry="3.57" fill="#f7941d" />
          <ellipse cx="473.52" cy="15.78" rx="2.81" ry="1.79" fill="#f7941d" />
          <polygon
            points="25.58 358.43 22.54 358.41 20.81 360.9 19.89 358.01 16.98 357.13 19.45 355.36 19.39 352.33 21.83 354.13 24.7 353.13 23.74 356.01 25.58 358.43"
            fill="#f7941d"
          />
          <polygon
            points="463.7 275.7 460.67 275.69 458.94 278.18 458.02 275.29 455.11 274.41 457.58 272.64 457.51 269.61 459.96 271.4 462.82 270.41 461.87 273.29 463.7 275.7"
            fill="#f7941d"
          />
          <polygon
            points="470.85 198.09 468.44 196.25 465.56 197.21 466.55 194.34 464.76 191.9 467.79 191.96 469.56 189.5 470.44 192.4 473.33 193.32 470.84 195.05 470.85 198.09"
            fill="#f7941d"
          />
          <polygon
            points="241.06 120.47 236.52 118.93 232.68 121.8 232.74 117 228.83 114.23 233.41 112.81 234.83 108.23 237.6 112.15 242.39 112.08 239.53 115.93 241.06 120.47"
            fill="#f7941d"
          />
          <polygon
            points="302.34 129.66 297.5 127.51 292.99 130.28 293.53 125.02 289.5 121.58 294.68 120.47 296.71 115.58 299.36 120.16 304.64 120.57 301.1 124.51 302.34 129.66"
            fill="#f7941d"
          />
          <ellipse cx="10.26" cy="94.94" rx="2.04" ry="3.06" fill="#f7941d" />
          <ellipse cx="107.92" cy="105.92" rx="5.74" ry="5.87" fill="#f7941d" />
          <circle cx="493.32" cy="323.7" r="4.09" fill="#f7941d" />
        </g>
      </g>
    </svg>
  );
}
