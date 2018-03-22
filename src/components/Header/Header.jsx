import React, { Fragment } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { translate } from "react-i18next";
import { app } from "../../firebase/rebase.config.js";
import * as actions from "../../actions";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import classNames from "classnames";
import Drawer from "material-ui/Drawer";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import List from "material-ui/List";
import Typography from "material-ui/Typography";
import Divider from "material-ui/Divider";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import ChevronLeftIcon from "material-ui-icons/ChevronLeft";
import ChevronRightIcon from "material-ui-icons/ChevronRight";
import { ListItem, ListItemIcon, ListItemText } from "material-ui/List";
import ReportIcon from "material-ui-icons/Report";
import StarIcon from "material-ui-icons/Star";
import Button from "material-ui/Button";
import { withRouter, Link } from "react-router-dom";

const drawerWidth = 240;

const styles = theme => ({
  appBar: {
    position: "absolute",
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    "& $loginButton": {
      marginLeft: 12,
      marginRight: 0
    }
  },
  flex: {
    flex: 1
  },
  loginButton: {
    marginLeft: 12,
    marginRight: 24
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawerPaper: {
    position: "relative",
    height: "100vh",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    width: 60,
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  drawerInner: {
    // Make the items inside not wrap when transitioning:
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    width: "100%",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: 24,
    height: "calc(100% - 56px)",
    marginTop: 56,
    [theme.breakpoints.up("sm")]: {
      height: "calc(100% - 64px)",
      marginTop: 64
    }
  }
});

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleLogin = () => {
    const { isAuthenticated, setIsAuthenticated, history } = this.props;
    if (isAuthenticated) {
      app
        .auth()
        .signOut()
        .then(
          () => setIsAuthenticated(false),
          error => {
            throw new Error(error);
          }
        );
    } else {
      history.push("/login");
    }
  };

  render () {
    const { classes, theme, history, t, isAuthenticated } = this.props;

    return (
      <Fragment>
        <AppBar
          className={classNames(
            classes.appBar,
            this.state.open && classes.appBarShift
          )}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(
                classes.menuButton,
                this.state.open && classes.hide
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              noWrap
              className={classes.flex}
            >
              <Link to={"/"}>Curious</Link>
            </Typography>
            <Button
              className={classes.loginButton}
              color="inherit"
              onClick={this.handleLogin}
            >
              {isAuthenticated ? t("logout") : t("login")}
            </Button>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !this.state.open && classes.drawerPaperClose
            )
          }}
          open={this.state.open}
        >
          <div className={classes.drawerInner}>
            <div className={classes.drawerHeader}>
              <IconButton onClick={this.handleDrawerClose}>
                {theme.direction === "rtl" ? 
                  <ChevronRightIcon />
                  : 
                  <ChevronLeftIcon />
                }
              </IconButton>
            </div>
            <Divider />
            <List>
              <ListItem button onClick={() => history.push("/inbox")}>
                <ListItemIcon>
                  <ReportIcon />
                </ListItemIcon>
                <ListItemText primary="Inbox" />
              </ListItem>
              <ListItem button onClick={() => history.push("/starred")}>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItem>
            </List>
          </div>
        </Drawer>
      </Fragment>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = ({ userReducer }) => ({
  isAuthenticated: userReducer.isAuthenticated
});

const enhance = compose(
  connect(mapStateToProps, actions),
  withRouter,
  translate("header"),
  withStyles(styles, { withTheme: true })
);

export default enhance(MiniDrawer);
