//import './StyllingCssfiles/footer.css';
//list of icons 
//icons mteril icons
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
//react icons 
import { FaFacebookF,FaTwitter,FaLinkedinIn  } from 'react-icons/fa';

import { FiPhoneCall } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { ImInstagram,ImOffice } from "react-icons/im";


function Footer() {

  const x = {
    margin: '3px',
    border: '1px solid black'
  };

  return (

    <div className="Footer" style={x} >
       <footer className="bg-light text-center text-lg-start">
           
           <div className="row">
              <div className="col-4">
                
              </div>

              <div className="col-4">
                 <div className="">
                 <Link href="#" style={{ padding:'14px' }}>
                    <ImOffice size="" />
                  </Link>
                   <h6>My-academy office</h6>
                 </div>
                 <div className="">
                 <Link href="#" style={{ padding:'14px' }}>
                    <FiPhoneCall size="" />
                  </Link>
                   <h6>+94 768 755 787</h6>
                 </div>
                 <div className="">
                 <Link href="#" style={{ padding:'14px' , color:'red' }}>
                    <SiGmail size="" />  
                  </Link>
                  <h6>myacademy@gmail.com</h6>
                 </div>
              </div>

              <div className="col-4 ">
                <div className="col-4 "> <p> <br></br> </p> </div>
                <div className="text-center "><h3>Follow us on</h3></div>
                <div className=" text-center">
                <Typography>
                  
                  <Link href="#" style={{ padding:'4px',border: '2px solid red' , color:'red' }}>
                    <FaFacebookF size="" />
                  </Link>

                  <Link href="#" color="inherit" style={{ padding:'24px'}} >
                     <ImInstagram />
                  </Link>

                  <Link href="#"  variant="body2" style={{ padding:'14px'}} >
                      <FaTwitter />
                  </Link>
                  <Link href="#"  variant="body2" style={{ padding:'4px',border: '2px solid red' , color:'red' }} >
                      <FaLinkedinIn />
                  </Link>
                </Typography>
                </div>
                </div>
           </div>
           
           
           <div className="text-center p-3" style={{ background:" rgba(0, 0, 0, 0.2) " }} >
           © 2021 Copyright:
           <a className="text-dark" href="kk">Myacadem.lk</a>
           
           
         </div>
        
       </footer>
    </div>

  );


}

export default Footer;