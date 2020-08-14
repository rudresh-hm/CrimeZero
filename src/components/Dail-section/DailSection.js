import React from 'react';
import classes from './DailSection.module.css'
import Content from './Content/Content';
import Numpad from '../../containers/Numpad/Numpad';
import Modal from '../UI/Modal/Modal';
import Backdrop from '../UI/Backdrop/Backdrop';
import Superhero from './SuperHero/Superhero';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
const DailSection=(props)=>{
    return(
        <Router>
            <section id="dailsection" className={`${classes["dail-section"]}`}>
            <Switch>
                <Route path="/:id" exact render={props =>
                    <div className={classes["popup-holder"]}>
                        <Link to="/">
                            <Backdrop/>
                        </Link>
                        <Modal className={classes["modal"]}>
                            <Superhero {...props}/>
                        </Modal>
                    </div>
                } />
            </Switch>
            <Content/>
            <Numpad/>
            </section>
        </Router>
        
    )
}
export default DailSection;