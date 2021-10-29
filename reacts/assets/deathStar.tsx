export default function DeathStar({
  className,
  style,
  stroke = "#cecece",
  fill = "#1d1d1d",
  ...others
}: any) {
  return (
    <svg
      className={className}
      style={style}
      {...others}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 318.72 337.79"
    >
      <path
        d="M318.22,145v-8.18H223.75v-6.63H308v-6.64H228.35v-9.19h59.74v-6.9H227.58v-5.61h7.92V95.74h66.64v-6.9H235.5V81.7h57.7V74.29H201.8V67.65h85.27V61.27H182.65V55.65H269.2V49.27H159.92V40.33h93.87V29.1H175.24v-6h40.85V7.17a168.53,168.53,0,1,0-56.68,330.09V316.59H126.48v-8.68H192.6V297.44H148.18v-10H246V281.1H171.41V274H294.73V263.48H251.84v-6.64H297v-5.57H204.19v-5.91h88V239H255.92v-6.91H312v-4.6H216.6v-10.7h38.56v-6.89H240.35V197.36h63.83V190H249V178h59.49V170.8H248.26V162h53.11v-7.51H251.58V145ZM114.41,109.11c-15.28,22.23-39.7,32-54.54,21.79s-14.49-36.5.79-58.73,39.7-32,54.54-21.8S129.69,86.87,114.41,109.11Z"
        fill={fill}
        stroke={stroke}
        strokeMiterlimit="10"
        opacity="0.6"
      />
    </svg>
  );
}
