import React from 'react';
import classes from './Navigation.module.css';

const Navigation=(props)=>{
    return(
        <nav className={classes["navigation"]}>
            <a className={`${classes["logo"]} ${classes["link"]}`} href="//#region ">Crime Zero</a>
            <span className={classes.left}>
                <a className={`${classes["github"]} ${classes["link"]}`} href="https://github.com/rudresh-hm/CrimeZero">Github link</a>
            </span>
            
        </nav>
    )
}
export default Navigation;