import React, { useState, useEffect } from 'react';
import classes from './Superhero.module.css';
const Superhero=(props)=>{
    const [superhero,setSuperhero]=useState("");
    const [error,setError]=useState("");
    const fetchHero=async ()=>{
        console.log(props.match.params.id);
        let response=await fetch(`https://sleepy-plateau-90986.herokuapp.com/${props.match.params.id}`);
        let dataObj=await response.json();
        setSuperhero(dataObj.superhero);
        setError(dataObj.err);
    }
    useEffect(() => {
        fetchHero();
      },[]);
    return (
        <div className={classes["popup"]}>
            <div>
                {superhero===""?null:<h1>{superhero} to the rescue!!</h1>}
                <p>{error}</p>
            </div>
        </div>
    )
}
export default Superhero;