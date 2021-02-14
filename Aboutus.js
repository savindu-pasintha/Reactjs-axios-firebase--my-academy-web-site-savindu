//import './StyllingCssfiles/Aboutus.css';
import StartJurneyEnrolNow from './StartJurneyEnrolNow';
import Footer from '../frontEndDesignsFiles/CommonFiles/footer';
import ContactUs from '../frontEndDesignsFiles/ContactUs';
import axios from 'axios';
import React, { useState, useEffect } from 'react';

function About() {

  const [v, setV] = useState({ bgimg:"",loading: false });
  const datafunction = async () => {
    try {
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo/four.json"; //"http://localhost:3001/photo";
      await  axios.get(url).then((res) => {
    setV({ ...v, bgimg: res.data});
       console.log(res);
       console.log(v.bgimg);
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
  //image add
  const styling = {
   
    backgroundImage: z , //'url("http://www.learneasy.lk/images/home/banner-graphic.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '13cm',
}

  //const font
  const font = {
    fontSize: '1rem',
    color: '#3f3f3f',
    letterSpacing: '.25px',
    lineHeight: ' 2.0rem',
    
    textAlign: 'justify',
     textJustify: 'inter-word'
  }

  const li = {
    color: "red"
  }

  return (
   
    <div >
      <div className="row">

        <div className="col-md-6 col-sm-12">
          <div className="text-center" >
            <h1 style={{ paddingTop:'25%', color:'#312c51', fontSize:'55px', fontWeight:'bold'}}>About My Academy </h1>
          </div>
        </div >
          <div className="col-md-6 col-sm-12">
            <div  style={styling}></div>
          </div>
       </div>
      

      <div className="row">

        <div className="col-md-6 col-sm-12 col-lg-8">
          <div className="p-5" style={font}>
                <p>My academy platform has been developed to provide you with an open learning environment with no barriers whatsoever. We also utilize the new technology tools and aim to strengthen our program on a regular basis.</p>  <p  >My academy focuses on offering an online forum for students and teachers to collaborate with the same experience as the regular classroom. Students are given an opportunity to learn from home with various teachers from different places. Teachers reduce traveling time to visit students from various places and boost successful teaching.</p>
          </div>

           <div className="p-5 mx-2" style={{backgroundColor:'#f1f1f1', width:'100%'}}>
              <div className=" p-4">
               <h2 style={{color:'#4d375d'}}>
                Take a look at the advantages you can get by on boarding to Learn Easy.
               </h2>
              </div>
              <div className="seg">
                            <h5 style={{color:'black'}}>For Students</h5>
                            <ul class="list-dot" style={font}>
                                <li>Take part in popular teachers' classes from home.</li>
                                <li>Find verity of online classes and teachers</li>
                                <li>Distance is no longer an issue to attend to your class of your choice.</li>
                                <li>Clarify doubts from the tutor during the class.</li>
                                <li>Save money and valuable time for travelling and waiting.</li>
                                <li>No more dress-code rules. Be at your own comfort.</li>
                                <li>Even you take a holiday, you will not miss the class</li>
                                <li>You can go back and download your tutorials any time!</li>
                                <li>Access large number of tutorials, past papers and other study materials free.</li>
                           </ul>
                </div>

          
            <div className="seg">
                            <h5 style={{color:'black'}}>For Teachers</h5>
                            <ul className="list-dot" style={font}>
                                <li>You can schedule and live stream classes to your students.</li>
                                <li>Learn Easy is well designed to conduct your private classes.</li>
                                <li>Stream your classes from anywhere</li>
                                <li>No more time wasting on travelling to different locations</li>
                                <li>Allow/Restrict students who are attending to your classes</li>
                                <li>Save more time for your personal work and family.</li>
                                <li>Teach in a more productive manner as you can do LIVE Streaming / Screen Sharing / White Board Sharing</li>
                                <li>Manage student payments without a hassle</li>
                            </ul>
              </div>
           </div>
        </div>


        {
          /**
           * right side box
           */
        }

        <div className="col-md-6 col-sm-12 col-lg-4" style={{ paddingTop:'25%' }}>
          <div style={{backgroundColor:'#0a043c', width:'350px', height:'250px'}}>
            <div class="l-class-box__body  text-left" style={{color:'white'}}>
                            <h4 className="text-center">Get In Touch With Us !</h4>
                            <p className="text-justify text-left" style={{paddingTop:'5%'}}>For navigation or for inquiries about our services / customizations or For Support</p>
                            <div className="mb-30" style={{paddingTop:'2%'}}>
                            <h5>Please contact us</h5>
                            <ul class="list-icon mb-0">
                                <li style={{color:'white'}}>
                                    <a href="tel:+94777123123" style={{color:'white'}}>
                                        <i><img src="http://www.learneasy.lk/images/ft-icon-phone.png" alt="" /></i>
                                        -- > +94 766 674 945
                                    </a>
                                </li>
                                <li style={{color:'white'}}>
                                    <a href="mailto:learneasy.lk@gmail.com" style={{color:'white'}}>
                                        <i><img src="http://www.learneasy.lk/images/ft-icon-email.png" alt="" /></i>
                                       -- > myacademy.lk@gmail.com
                                    </a>
                                </li>
                </ul>
                </div>
                        </div>
          </div>
         </div>
      </div>

       <div className="pt-5">
          <StartJurneyEnrolNow />
          <ContactUs />
          <Footer />
        </div>
    </div>

  ) ;
}

export default About;