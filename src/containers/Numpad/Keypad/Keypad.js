import React from 'react';
import classes from './Keypad.module.css';
const Keypad=(props)=>{
    const keyAlpha=["@.?","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz","space","zero","delete"]
    let keysJsx=props.arrkeys.map((item,index)=>{
        let displayedChar=item;
        let clickHandler=props.clickHandler;
        if(item==="Del"){
            clickHandler=props.deleteHandler;
        }
        else if(item==="#"){
            displayedChar=" "
        }
        return (
            <div key={index}onClick={()=>clickHandler(displayedChar)}className={classes["num-holder"]}>
                <p>{item}</p>
                <span>{keyAlpha[index]}</span>
            </div>
        )
    })
    return(
        <div className={classes["keypad"]}>
            {/* <div className={classes["num-holder"]}>
                <p>{}</p>
            </div>     */}
            {keysJsx}
        </div>
    )
}
export default Keypad;