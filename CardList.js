import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns'
import React from 'react';
//icons mteril icons
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
//react icons 
import { FaFacebookF,FaTwitter  } from 'react-icons/fa';
import { ImMail } from "react-icons/im";
import { FcCalendar } from "react-icons/fc";
import { IoMdTime } from "react-icons/io";
import Button from '@material-ui/core/Button';


function CardList(props){

  return (
    <div style={{padding:'10px'}}>
   <Card style={{padding:'25px', width:'100%'}}>
    <Card.Img variant="top" src={props.imgurl} />
    <Card.Body>
      <Card.Title> {props.subject} </Card.Title>
      <Card.Title><h6> Grade {props.grade} </h6></Card.Title>
      
      <Typography className="text-center">
      <Link href="#" style={{ padding:'14px' }}>
           <FaFacebookF size="" />
      </Link>

      <Link href="#" color="inherit" style={{ padding:'14px' }} >
          <ImMail />
      </Link>

      <Link href="#"  variant="body2" style={{ padding:'14px' }} >
          <FaTwitter />
      </Link>
    </Typography>
    <Card.Title className="text-center"><h6> {props.teacher} </h6> </Card.Title>
     <div className="row">
        <div className="col-6"><FcCalendar />  <h5>  {props.date} </h5>  </div>
        <div className="col-6"><IoMdTime />    <h6>  {props.time} </h6>  </div>
     </div> 
      </Card.Body>
      <div className="text-center">
        <Button variant="contained" style={{backgroundColor:'#ffc764', width:'100%'}}>
          <h6>View Details </h6>
        </Button>
      </div>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
      </Card>
      </div>
  );
}

export default CardList;