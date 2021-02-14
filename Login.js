//import './StyllingCssfiles/Login.css';

import { BackupOutlined } from "@material-ui/icons";
import React,{ useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

//import { Backend } from "./backend";

function Login(){
  //use state hook define to store variables
//create user state
const [val, setVal] = useState(
    {
    username: "",
    password: "",
    result: 10,
    // used to store firbase retrive data values,
    firebasedata: [],
    checkuser:"name",
    checkpass: "pass",
    
    inputtagvalues:" "
    
    });
//get username
const getusername = (e) => {
  setVal({
    ...val,
    username: e.target.value
  });
}
//get password
const getpassword = (e) => {
   setVal({
    ...val,
    password: e.target.value
  });
  }
  //get password
const setempty = (e) => {
   setVal({
    ...val,
    password: e.target.value
  });
}
//cancel the refresh page
const onsubmitpreventrefresh = (e) => {
       e.preventDefault();
  }

//axios HTTP get method using read data
  const LoginDataretrive = () => {
    if ((val.username.length !== 0) && (val.password.length !== 0)) {
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/register/";
      //string cut
      var x = val.username;
      var l = x.length;
      var id = x.slice(0, l - 10);//remove the last 9 charactore for @gmail.com
      var json = ".json";
      var apiurl = url + id + json;
      //HTTPS  get method using read firebase data
      axios.get(apiurl).then((response) => {
        if (response.data) {
          //database data values assign to userState objects
          var set = response.data;
          // console.log(set);  var obj = JSON.parse(set);//json objects conver to readable string
          //  console.log(Object.values(set)); //array object to convert consol.log(arr[0]}
          var arr = [];
          arr = Object.values(set);//json data set convert as a java script array object
         // console.log(arr);
          setVal({
            ...val,
            firebasedata: arr// save userState array
          });
        }
      }).catch((error) => {
        alert("Please enter valis Email Address or again Register");
      });
      usernamepassword();//method call
    } else {
      alert("Please enter username and password");
    }
}
// check user name password match or not
const usernamepassword = () => {
    //check username password
     if ((val.username === val.firebasedata[2]) && (val.password === val.firebasedata[1])) {
       alert("Login successful.");
        setcookies();//set cookies method call
       LoginDataSave();//method call
        setVal({
            ...val,
          username: "", password: ""// save userState array
        });
     
     } else {
       alert("password or username does not matched");
     }
  }
// set cookies inside store login data  
const setcookies = () => {
    //store data inside cookies
  Cookies.set('usernamecookie', val.username );
  Cookies.set('passwordcookie', val.password );
  
  }

  //read the cookies values
const readcookies = () => {
    //get data inside the cookies
 var x= Cookies.get('usernamecookie');
 var y= Cookies.get('passwordcookie');
    console.log(x);
    console.log(y);
}

const LoginDataSave = () => {
    if ( (val.username.length!==0) && (val.password.length!==0)) {
    var url = "https://react-5ba2b-default-rtdb.firebaseio.com/login/";
     //string cut
    var x = val.username;
    var l = x.length;
    var id =x.slice(0,l-10);//remove the last 9 charactore for @gmail.com
    var json = ".json";
    var apiurl = url + id + json;
//HTTp put method using send data to firebase
    axios.put(apiurl, {
      username: val.username,
      password: val.password,
      logeddate: new Date()
  })
  .then((response) => {
   // console.log(response);
    console.log(response);
  })
  .catch( (error) => {
    console.log(error);
  });
    
    } else {
      alert("Please enter username and password");
    }
  }
//login ckeck fuction
  const loginbtn = () => {
    LoginDataretrive();//call function

    //
     //axios using data pass to expressjs backend to mysql DB to save data
    var url = "http://localhost:3001/log";
    axios.post(url, { username: val.username, password: val.password })
  .then((response) => {
   // console.log(response);
    console.log("successfull send data to backend.");
  })
  .catch( (error) => {
    console.log(error);
  });
    

  }
  //jsx designs
  return (
  <div className="Login">
    <div className="container">
    <div className="row">
      <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
        <div className="card card-signin my-5"> 
          <div className="card-body">
            <h5 className="card-title text-center">Login</h5>

            <form className="form-signin" onSubmit={onsubmitpreventrefresh}>
              <div className="form-label-group">
                <input onChange={getusername}  type="email" id="inputEmail" className="form-control" placeholder="Email address" required  />
                <label >Email address</label>
              </div>

              <div className="form-label-group">
                <input onChange={getpassword}  type="password" id="inputPassword" className="form-control" placeholder="Password" required  />
                <label >Password</label>
              </div>

              <div className="custom-control custom-checkbox mb-3">
                 <input type="checkbox" className="custom-control-input"  />
                <label  className="custom-control-label" >show password</label>
                    <br />
                <Link  to="/reg">
                <label  className="text-danger" >frogot password ?</label>
              </Link>
              </div>

                  <button onClick={loginbtn } className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
              <hr className="my-4" />
              <button className="btn btn-lg btn-google btn-block text-uppercase border border-dark" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</button>
              <button className="btn btn-lg btn-facebook btn-block text-uppercase border border-dark" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
              
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
 ) ;
 
}

export default Login;