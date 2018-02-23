// @flow
import React from "react";
import Header from "../components/Header/Header";
import { withStyles } from "material-ui/styles";
import CenteredGrid from "../components/Grid/Grid";

const styles = theme => ({
    root: {
        width: "100%",
        height: "100vh",
        marginTop: 0,
        zIndex: 1,
        overflow: "hidden"
    },
    appFrame: {
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%"
    },
    main: {
        width: "100%",
        padding: "20px",
        marginTop: "80px"
    }
});

const DefaultLayout = ({ classes, theme, children }) =>
    <div className={classes.root}>
        <div className={classes.appFrame}>
            <header>
                <Header />
            </header>
            <main className={classes.main}>
                <CenteredGrid>{children}</CenteredGrid>
            </main>
        </div>
    </div>
;

export default withStyles(styles, { withTheme: true })(DefaultLayout);
