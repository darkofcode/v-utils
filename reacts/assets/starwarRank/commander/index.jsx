import uvStyle from "./style.module.scss";

export default function Lieutenant({ width = "56px", height = "50px" }) {
  return (
    <div style={{ width, height }} className={uvStyle.wrapper}>
      <div className={uvStyle.black}></div>

      <div className={uvStyle.big}>
        <div className={uvStyle.red}></div>
        <div className={uvStyle.red}></div>
        <div className={uvStyle.red}></div>
        <div className={uvStyle.blue}></div>
        <div className={uvStyle.blue}></div>
        <div className={uvStyle.blue}></div>
      </div>
      <div className={uvStyle.black}></div>
    </div>
  );
}
