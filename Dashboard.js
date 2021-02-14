import React, { useState } from 'react';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { FaUserCheck, FaUserPlus } from "react-icons/fa";
import { GrSettingsOption } from "react-icons/gr";
//import { fas } from '@fortawesome/react-fontawesome';
import Button from '@material-ui/core/Button';
import './Dashboard.css';

import Materials from './Materials';
import Pagesimages from './Pagesimages';
import Upcommingclass from './Upcommingclass';
import styled from 'styled-components';

export default function Dashboard() {

    //variable create in use state
    const [val, setVal] = useState({ variable:"default"  });

    const pageimageFun = () => {
        return (<div> <Pagesimages /> </div>);
    }
    const materialFun = () => {
       return (<div> <Materials /> </div>);
    }
    const upcommingFun = () => {
       return (<div>  <Upcommingclass /> </div>);
    }

    //when clicked the button condition check and load the methods contents
    const switchFun = () => {
        if (val.variable==="pageimageFun" || val.variable==="default") {
           return pageimageFun();
        }
        if (val.variable==="materialFun") {
         return  materialFun();
        }
        if (val.variable==="upcommingFun") {
          return  upcommingFun();
        }
    }
//btn hover out event
    const btnleave = (e) => {
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
      
    }

    //btn hover event
    const btnhover = (e) => {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";
       
    }
    const stylbtn = {}
// 2nd row button style 
    /**const stylbtn = { 
        backgroundColor: 'black',
        color:'white'
    } */

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  height:60px;
`;
// Create a Wrapper component that'll render a <section> tag with some styles


    
    return (
        <div className="m-0">
            
            <div className="row">
                <div className="col-md-2 col-sm-1 bg-warning m-0">
                    <div className="p-1 text-center">
                        
                        <i className="fas fa-spinner fa-pulse"></i>
                        <GrSettingsOption animate="spin" style={{ backgroundColor:"", fontSize:"60px"}} />
                     </div>
                    <ul className="">
                        
                        <li>
                            <Button onMouseEnter={btnhover} onMouseLeave={btnleave} onClick={() => { setVal({ variable: "pageimageFun" }) }} startIcon={<CloudUploadIcon />} variant="contained" style={stylbtn }>
                        Pages images change
                   </Button>  
                        </li>
                        
                        <li>
                    <Button onMouseEnter={btnhover} onMouseLeave={btnleave} onClick={ ()=>{setVal({  variable: "materialFun"})} }  startIcon={<CloudUploadIcon />} variant="contained" style={stylbtn }>
                        Online material section
                    </Button>
                        </li>
                        
                        <li>
                    <Button onMouseEnter={btnhover} onMouseLeave={btnleave} onClick={ ()=>{setVal({ variable: "upcommingFun"})} }  startIcon={<CloudUploadIcon />} variant="contained"  style={stylbtn }>
                        Upcomming classes section
                   </Button>
                        </li>

                       {/**
                        *  <li>
                    <Button onMouseEnter={btnhover} onMouseLeave={btnleave} onClick={ ()=>{setVal({ variable: "logFun"})} }  startIcon={<FaUserCheck />} variant="contained"  style={stylbtn }>
                        Active-users View
                   </Button>
                        </li>

                         <li>
                    <Button onMouseEnter={btnhover} onMouseLeave={btnleave} onClick={ ()=>{setVal({ variable: "regFun"})} }  startIcon={<FaUserPlus />} variant="contained"  style={stylbtn }>
                        All-Registered Users View
                   </Button>
                        </li>
                        */}
                    </ul>
                </div>
                <div className="col-md-10 col-sm-11">
                   
                    <div>
                        {
                            //call method to return jsx here loag when click the button
                            switchFun()
                        
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
