import React from "react";
import style from "./sidebar-styles.module.scss";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { NavLink, useRouteMatch } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import PropTypes from "prop-types";
import Rotate from "../rotate/rotate-component";
import { useTheme } from "@material-ui/styles";
import ChevronRight from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";
import useLocalStorage from "../../hooks/use-local-storage";

const useStyles = (width, top, bgColor, open) => {
  return makeStyles((theme) => ({
    root: {
      display: "flex",
      height: "100%",
    },
    drawer: {
      width: width,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: width,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      [theme.breakpoints.down("xs")]: {
        width: "57px",
      },
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.down("xs")]: {
        width: 0,
      },
    },
    drawerPaper: {
      paddingTop: "22px",
      top: top,
      backgroundColor: bgColor ? bgColor : theme.palette.background.default,
      boxShadow: "2px 2px 3px 1px rgb(0,0,0,0.25)",
      MozBoxShadow: "2px 2px 3px 1px rgb(0,0,0,0.25)",
      WebkitBoxShadow: "2px 2px 3px 1px rgb(0,0,0,0.25)",
    },
    content: {
      // flexGrow: 1,
      padding: theme.spacing(3),
    },
    handle: {
      paddingLeft: "18px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      paddingTop: "2px",
      backgroundColor: "#364f7c",
      borderRight: "1px solid #0000002e",
      [theme.breakpoints.down("xs")]: {
        paddingLeft: 0,
      },
    },
    handleOpen: {
      paddingLeft: "18px",
    },
  }));
};

const Sidebar = ({ top, width, listItems, children, bgColor }) => {
  const theme = useTheme();
  const match = useRouteMatch();
  const [open, setOpen] = useLocalStorage("uvSideBar3876", true);
  const classes = useStyles(width, top, bgColor, open)();
  const toggleOpen = () => {
    // console.log(`from side bar cookie`, open);
    setOpen((pre) => !pre);
  };
  // console.log(`from side bar`, theme);
  // console.log(`from sidebar out cookie`, open);
  return (
    <div className={classes.root}>
      <div className={style.drawerWrapper}>
        <div
          className={clsx(classes.handle, { [classes.handleOpen]: open })}
          style={{ zIndex: theme.zIndex.drawer + 1 }}
        >
          <Rotate onClick={toggleOpen} isCollapse={open} component={<ChevronRight fontSize="small" />} degree={180} />
        </div>
        <Drawer
          className={clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          })}
          classes={{
            paper: clsx({
              [classes.drawerOpen]: open,
              [classes.drawerClose]: !open,
              [classes.drawerPaper]: true,
            }),
          }}
          variant="permanent"
        >
          <List className={`${style.drawerList} `}>
            {listItems.map((item, index) => (
              <NavLink
                key={index}
                activeClassName={`active-link`}
                className={` flex flex-center`}
                to={`${match.url}/${item.path}`}
              >
                <ListItem button>
                  <div className={`${style.icon} mr-4`}>{item.icon}</div>
                  <ListItemText primary={item.name} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Drawer>
      </div>
      <div className={`${style.drawerList} `}>
        <div style={{ height: "100%", overflowY: "auto" }}>{children}</div>
      </div>
    </div>
  );
};
Sidebar.propTypes = {
  top: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  listItems: PropTypes.array.isRequired,
  bgColor: PropTypes.string,
};
export default Sidebar;
