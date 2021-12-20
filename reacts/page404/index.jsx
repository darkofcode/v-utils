import uvStyle from "./style.module.scss";
import NavLink from "@iComponent/HeaderAppBar/NavLink";
import { getFullRouteLink } from "@share/data/routerLink";
export default function Page404() {
  const fullRoute = getFullRouteLink();
  return (
    <div className={uvStyle.wrapper}>
      <div className={uvStyle.wrapper404}>
        <div className={uvStyle.f404}>404</div>
        <div className={uvStyle.divider} />

        <div>The page you are looking for</div>
        <div>is not found</div>
        <div>Go To</div>

        <div className={uvStyle.btnWrapper}>
          <Link to="/" text="home" />
          <Link to={fullRoute.post} text="post" />
          <Link to={fullRoute.course} text="course" />
        </div>
      </div>
    </div>
  );
}
const Link = (props) => {
  return <NavLink {...props} btnProps={{ color: "info" }} />;
};
