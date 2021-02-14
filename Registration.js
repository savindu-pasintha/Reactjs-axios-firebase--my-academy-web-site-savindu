//import '/StyllingCssfiles/Registration.css';
import React, { useState } from "react";
import axios from 'axios';
import { SiGmail } from "react-icons/si";


function Registration() {
  //use state hook define to store variables
  const [val, setVal] = useState(
    {
      username: "",
      password: "",
      comfrim: "",
      errors:{} //store the errors in the input data
     
    });

  //
  const getusername = (e) => {
    setVal({
      ...val,
      username: e.target.value
    });
  }
  const getpassword = (e) => {
    setVal({
      ...val,
      password: e.target.value
    });
  }
  const getcomfrim = (e) => {
    setVal({
      ...val,
      comfrim: e.target.value
    });
  }
  //cancel the refresh page
  const preventrefresh = (e) => {
    e.preventDefault();
  }
  //login ckeck fuction
  const regdatasubmit = () => {

    if ((validate() === true) && (val.password === val.comfrim)) {

      //execute the put method in axios to dat asave to firebase
      regDataSave();

      //add new value to result 
      setVal({
        ...val,
        result: "Registered successfull"
      });
       
      //axios using data pass to expressjs backend to mysql DB to save data
   var url = "http://localhost:3001/reg";
  axios.post(url, { username:val.username , password: val.password, comfrim: val.comfrim})
  .then((response) => {
   // console.log(response);
    console.log("successfull send data to backend.");
  })
  .catch( (error) => {
    console.log(error);
  });

    
    } else {
      //add new value to result
      console.log("incorrect inputs")
    }
  }
  //validate Registration user enter data
  const validate = () => {
    
    let isValid=true;/// default is true
    let errors={};

    if (! val.username) {
      isValid = false;
      errors["email"] = "Please enter your email.";
    }
  
    if (! val.password) {
      isValid = false;
      errors["password"] = "Please enter your password.";
    }
  
    if (! val.comfrim) {
      isValid = false;
      errors["comfrim"] = "Please enter comfrime password.";
    }
  

    if (typeof val.username !== "undefined") {
          
      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(val.username)) {
        isValid = false;
        errors["email"] = "Please enter valid email address.";
      }
    }
  
    //corrent error variable data equal to useState errors
    setVal({
      errors: errors
    });
  
    return isValid;
  }
  //axios HTTP request to save data to firebase real time database database
  const regDataSave = () => {
   
    var url = "https://react-5ba2b-default-rtdb.firebaseio.com/register/";
     //string cut
    var x = val.username;

    var l = x.length;

    var id =x.slice(0,l-10);//remove the last 9 charactore for @gmail.com
    var json = ".json";
    var apiurl = url + id + json;

    axios.put(apiurl, {
      //this is a json array name to values set
      username: val.username,
      password: val.password,
      comfrim: val.comfrim     
  })
  .then((response) => {
   // console.log(response);
    alert('Registered Successfull.');

    //empty the input tag values
    setVal({
      ...val,
      username: "",
      password: "",
      comfrim: ""
    });

    console.log("Registered");
  })
  .catch( (error) => {
    console.log(error);
  });
  }

 

  // frond end code of jsx
  return (
    <div className="Registration()">
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin my-5">
              
          <div className="card-body">
            <h5 className="card-title text-center">Register</h5>
            <form className="form-signin" onSubmit={preventrefresh}>

                  <div className="form-label-group">
                     <label >Email address</label>  
                <input  value={val.username} onChange={getusername} type="email" id="inputEmail" className="form-control" placeholder="Email address" required  />
                   <label className="text-danger">{val.errors.email}</label>
                </div>

                  <div className="form-label-group">
                     <label >Password</label>
                <input value={val.password} onChange={getpassword} type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                    <label className="text-danger">{val.errors.password}</label>
              </div>

                  <div className="form-label-group">
                     <label >Comfrim Password</label>
                <input value={val.comfrim} onChange={getcomfrim} type="password" id="inputComfrime" className="form-control" placeholder="Comfrim Password" required />
                   <label className="text-danger">{val.errors.comfrime}</label>   
              </div>

              <div className="custom-control  mb-3">
                <label className = "text-danger" >Terms and conditions  ?</label>
              </div>

                  <button onClick={regdatasubmit}  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
             <hr className="my-4" />
              
              <br />
              
              <button className="btn btn-lg btn-google btn-block text-uppercase border border-dark" type="submit"><i className="fab fa-google mr-2"></i> Sign Up with Google</button>
              <button className="btn btn-lg btn-facebook btn-block text-uppercase border border-dark" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign Up with Facebook</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>

  ) ;
}

export default Registration;