//import logo from './logo.svg';
//import React from './react';
import { Button,Form } from 'react-bootstrap';
function Table() {


  return (

    <div >
       <h1 className="text-center">Manage Time Tables</h1>
       <Form className="row container " style={{ width: '400px', display: 'block' , textaAlign: 'center'}} >
          <div className="col-12 " >
             <Form.Group controlId="formBasicEmail" >
               <Form.Label> Select category</Form.Label>
               <Form.Control type="text" placeholder=" O/L or A/L " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail" >
               <Form.Label>Teacher name</Form.Label>
               <Form.Control type="text" placeholder=" T.M.Savindu Pasintha ( IT Bsc Honce ) " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail" >
               <Form.Label>Fee</Form.Label>
               <Form.Control type="text" placeholder="Rs. 2000.00  " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail" >
               <Form.Label> Subject name</Form.Label>
               <Form.Control type="text" placeholder=" English  " />
             </Form.Group>

          </div>
          <div className="col-12" >
            <Form.Label>Class Day Times Enter</Form.Label>
          <Form.Group controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Monday    09:00 am - 11:00 am  " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Thuesday  09:00 am - 11:00 am  " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Wendsday 09:00 am - 11:00 am  " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Thursday   09:00 am - 11:00 am  " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Friday       09:00 am - 11:00 am  " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Saturday   09:00 am - 11:00 am  " />
             </Form.Group>

             <Form.Group controlId="formBasicEmail">
               <Form.Control type="text" placeholder="Sunday    09:00 am - 11:00 am  " />
             </Form.Group>
          </div>
          <div className=" p-right text-center">
             <Form.Group controlId="formBasicCheckbox">
               <Form.Check type="checkbox" label="Check me out" />
             </Form.Group>

             <Button variant="primary" type="submit">
               Submit
             </Button>
          </div>  
        </Form>
    </div>
  ) ;
}

export default Table;
