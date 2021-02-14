import axios from 'axios';
import React, { useState } from "react";

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
//cancel the refresh page
const onsubmitpreventrefresh = (e) => {
       e.preventDefault();
  }
//axios HTTP get method using read data
  const LoginDataretrive = () => {
    var url = "https://react-5ba2b-default-rtdb.firebaseio.com/register/";
     //string cut
    var x = val.username;
    var l = x.length;
    var id =x.slice(0,l-10);//remove the last 9 charactore for @gmail.com
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
        console.log(arr);
        setVal({
          ...val,
          firebasedata: arr// save userState array
        });
      }
  }).catch((error) => {
     alert("Please enter valis Email Address or again Register");
  });
    
}
// check user name password match or not
const usernamepassword = () => {
    //check username password
     if ((val.username === val.firebasedata[2]) && (val.password === val.firebasedata[1])) {
       alert("Login successful.");
     } else {
       alert("password not matched");
     }
}

const LoginDataSave = () => {

    if ( (val.username.length === !0) && (val.password.length === !0)) {
    
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
  
  






