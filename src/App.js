import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import DailSection from './components/Dail-section/DailSection';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/">
            <Navigation/>
            <Header/>
            <DailSection/>
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}
export default App;
