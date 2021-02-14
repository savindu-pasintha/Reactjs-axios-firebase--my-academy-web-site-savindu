import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch,Link,NavLink, Router } from 'react-router-dom';

import './index.css';
//import App from './App';


import reportWebVitals from './reportWebVitals';

//bootstrap
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

//import 'bootstrap/dist/js/bootstrap';
// imported custom js files
//import className from './cls';
/**
import App from './App';
import Footer from './frontEndDesignsFiles/CommonFiles/footer';
import NavigationBar from './frontEndDesignsFiles/CommonFiles/NavigationBar';
import Login from './frontEndDesignsFiles/Login';
import Registration from './frontEndDesignsFiles/Registration';
import BackgroundWave from './frontEndDesignsFiles/CommonFiles/BackgroundWave';
import APIaccess from './APIaccess';
import TimeTable from './frontEndDesignsFiles/CommonFiles/TimeTable';
import ContactUs from './frontEndDesignsFiles/ContactUs';
import CardsList from './frontEndDesignsFiles/CardList';
import ControlledCarousel from './frontEndDesignsFiles/carosal';
import Table from './Manage/Table';
import Acheive from './frontEndDesignsFiles/Acheive';
import Freeonlinenaterial from './frontEndDesignsFiles/Freonlinematerial';
import CardListloop from './frontEndDesignsFiles/CardListloop';
import StartJurneyEnrolNow from './frontEndDesignsFiles/StartJurneyEnrolNow';
*/


import NavigationBar from './frontEndDesignsFiles/CommonFiles/NavigationBar';
//import Demo from './frontEndDesignsFiles/backend';  <Demo /> 
 
ReactDOM.render(
  <React.StrictMode>

    <NavigationBar />
</React.StrictMode>,
  document.getElementById('root')
);

     

    /**
     * <ControlledCarousel />
    <Acheive />
    <Freeonlinenaterial />
     <App /> */ 
    /*<APIaccess  /* <BackgroundWave /> <Registration />
     <Login />*/
   /** <CardsList /> 
    * <Table />
     <TimeTable />
     <CardListloop />
    <StartJurneyEnrolNow />

   
     <ContactUs />
     <Footer />
   */
    

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
