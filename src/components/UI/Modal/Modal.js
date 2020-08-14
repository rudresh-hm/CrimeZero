import React from 'react';
import classes from './Modal.module.css'
const Modal=(match)=>{
    return(
        <div className={classes["modal"]}>
            {match.children}
        </div>
    )
}
export default Modal;