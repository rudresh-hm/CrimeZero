import React from 'react';
import classes from './Header.module.css';
//import {Link} from 'react-router-dom';
const Header=(props)=>{
    const gotoDailsection=()=>{
        document.getElementById("dailsection").scrollIntoView({ behavior: "smooth" });
    }
    return(
        <header className={classes["app-header"]}>
            <div className={classes["half"]}>
                <div className={classes["content"]}>
                    <h1 className={classes["heading-primary"]}>Send a code to your heroes when in <span className="red">trouble.</span></h1>
                    <p>Crime zero Inc is a initiative to reduce the crime rate by alerting your superheroes when a crime occurs.</p>
                        <button onClick={gotoDailsection} className="btn btn-red">Emergency SMS</button>
                </div> 
            </div>
            <div className={classes["image-holder"]}>
                <img className={classes["image"]} src="../../../ironan-removebg.png" alt="hello"/>
            </div>
        </header>
    )
}
export default Header;