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
import ChevronRight from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/core/styles";
import useLocalStorage from "../../hooks/use-local-storage";

const useStyles = (width, top, bgColor) => {
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
      top: top,
      backgroundColor: bgColor ? bgColor : theme.palette.background.default,
      boxShadow: "3px 3px 3px 0px rgb(0,0,0,0.25)",
      MozBoxShadow: "3px 3px 3px 0px rgb(0,0,0,0.25)",
      WebkitBoxShadow: "3px 3px 3px 0px rgb(0,0,0,0.25)",
    },
    content: {
      // flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));
};

const Sidebar = ({ top, width, listItems, children, bgColor }) => {
  const match = useRouteMatch();
  const classes = useStyles(width, top, bgColor)();
  const [open, setOpen] = useLocalStorage("uvSideBar3876", true);
  const toggleOpen = () => {
    // console.log(`from side bar cookie`, open);
    setOpen(!open);
  };
  // console.log(`from sidebar out cookie`, open);
  return (
    <div className={classes.root}>
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
      <div className={`${style.drawerList} `}>
        <Rotate
          onClick={toggleOpen}
          isCollapse={open}
          className={`${style.dragHandle} `}
          component={<ChevronRight className={` pointer`} fontSize="small" />}
          degree={180}
        />

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
