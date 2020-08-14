import React from 'react';
import classes from './Content.module.css'
const Content=(props)=>{
    return(
        <div className={classes["content"]}>
            <h1 className={classes["heading-primary"]}>One step away from <span className="blue">help.</span></h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
        </div>
    )
}
export default Content;