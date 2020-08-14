import React from 'react';
import classes from './Content.module.css'
const Content=(props)=>{
    return(
        <div className={classes["content"]}>
            <h1 className={classes["heading-primary"]}>One step away from <span className="blue">help.</span></h1>
            <p>How it works: Send the code in the format 0[space][code], the code is the number on the keypad corresponding to each letter of the superhero's name. </p>
        </div>
    )
}
export default Content;