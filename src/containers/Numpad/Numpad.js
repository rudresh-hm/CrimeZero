import React from 'react';
import classes from './Numpad.module.css';
import Keypad from './Keypad/Keypad';
import {Link} from 'react-router-dom';
class Numpad extends React.Component{
    state={
        phoneNumber:"",
        arrKeypad:["1","2","3","4","5","6","7","8","9","#","0","Del"]
    }
    keyClickedhandler=(keyPressed)=>{
        let phno=this.state.phoneNumber;
        phno=phno+keyPressed;
        this.setState({phoneNumber:phno});
    }
    deleteKeyHandler=(keyPressed)=>{
        let phno=this.state.phoneNumber;
        phno=phno.substring(0,phno.length-1);
        this.setState({phoneNumber:phno});
    }
    render(){
        return (
            <div className={classes["numpad"]}>
                <div className={classes["phone-number"]}>
                    <input type="text" value={this.state.phoneNumber} readOnly = {true}/>
                </div>
                <Keypad deleteHandler={this.deleteKeyHandler} clickHandler={this.keyClickedhandler}arrkeys={this.state.arrKeypad}/>
                <Link className={classes["send-code"]} to={`/${this.state.phoneNumber}`}>
                    <span>Send SMS</span>
                </Link>
            </div>
        )
    }
}
export default Numpad;