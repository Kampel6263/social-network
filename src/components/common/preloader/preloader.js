import classes from "../../users/users.module.css";
import preloader from "../../../images/Ripple-1s-200px.svg";
import React from "react";

let Preloader = (props) => {
    return <div className={classes.loadingContainer}><img className={classes.loading} src={preloader}/></div>

}

export default Preloader;