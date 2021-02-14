import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
function StartJurneyEnrolNow() {

    const [v, setV] = useState({ bgimg: "", loading: false });
    
const datafunction = async () => {
    try {
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo/five.json"; //"http://localhost:3001/photo";
      await  axios.get(url).then((res) => {
    setV({ ...v, bgimg: res.data});
      // console.log(res);
      // console.log(v.bgimg);
      }).catch((error) => {
        console.log(error);
      });
    } catch (e) {
      console.log(e);
    }
  }
  //page onload time render method
  useEffect(() => { datafunction(); }, []);
  var x = 'url("';
  var c = v.bgimg;
  var y = '")';
    var z = x + c + y;
    
const styling = {
    backgroundImage: z,//'url("http://www.learneasy.lk/images/start-journey-bg.jpg")',
    backgroundSize: 'cover',
    width: '100%',
    height: 'auto',
    padding: '100px'
}

    //btn hover out event
    const btnleave = (e) => {
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
         e.target.style.border = "none";
    }

    //btn hover event
    const btnhover = (e) => {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";
        e.target.style.border = "2px black solid";
    }


    return (
        <div className="row" style={styling}>
           <div className="col-md-6 col-sm-12" >
           </div>

            <div className="col-md-6 col-sm-12" style={{ color:'white' } }>
                <div className="" >
                    <h1 style={{fontSize:'50px', fontWeight:'bold'}}>Start a Journey.</h1>
                    
                    <h1 style={{fontSize:'50px' , fontWeight:'bold'}}>Enroll Now</h1>
                    <br />
                    <p style={{fontSize:'18px', color:'white'}} >Learn somthing where you are</p>
                </div>
            </div>
            
            <div  className="text-center col-sm-12 " style={{padding:'0px'}}>
                    <Button onMouseEnter={btnhover} onMouseLeave={btnleave} variant="contained" style={{backgroundColor:'black',color:'white',  width:'300px', height:'45px'}}>
                        Register for free
                   </Button>
                    
            </div>
         </div>
        
    );
}
export default StartJurneyEnrolNow;