import React, { useState } from "react";
import axios from 'axios';
import DocForm from "react-cross-form";//cros origin xmlHttp error fix
import { post } from "jquery";


//import {photochange} from './backendmysqlnodejs';
 //  var mysql = require('mysql');// import mysql libraries


export default function Pageimages() {

  const [val, setVal] = useState(
    {
      //files data store variables
      carosalone: "",
      carosaltwo: "",
      carosalthree: "",
      aboutus: "",
      enrole:"",
      //method three image variable
      profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      // used to store firbase retrive data values,
    });


const axiosFunc = async (url,id,imgvalue) => {
  //url = "http://localhost:3001/one";
  //id=1;
  //imgvalues=val.variablename;  
  try {
    
    //await axios.post(url, { id: id, img1:imgvalue})
    await axios.patch(url, {  id : imgvalue }).then((response) => {
   // console.log(response);
    //console.log(response);
  })
     .catch((error) => {
     throw error;
   // console.log(error);
  });
  } catch (e) {
    throw e;
  }
  
  } 
const isempty = () => {
      if (
         (val.aboutus.length !== 0)
         &&
         (val.carosalone.length !== 0)
         &&
         (val.carosalthree.length !== 0)
         &&
         (val.carosaltwo.lengthct !== 0)
         &&
         (val.enrole.lengthiption !== 0)
        
      ) {
         return 1;
      } else {
         return 0;
      }

   }  
/**Update button onChange events */
  //work method
const uploadimageone = (e) => {
    const reader = new FileReader();//using file reader
          reader.onload = () =>{// if after loading
         if (reader.readyState === 2) {
       
           setVal({
             ...val, //assign file data values to the variable useState
             carosalone: reader.result,
           });
          //console.log(reader.result);  // console log as a base64 String converting of binary data
           
         }
  }
  // Read in the image file as a data URL. ok onemath nh
  reader.readAsDataURL(e.target.files[0]);
  
  }
  
   //work method
const uploadimagetwo = (e) => {
    const reader = new FileReader();//using file reader
          reader.onload = () =>{
         if (reader.readyState === 2) {
       
           setVal({
             ...val, //assign file data values to the variable useState
             carosaltwo: reader.result,
           });
         
            }
  }
  reader.readAsDataURL(e.target.files[0]);
  }
  
   //work method
const uploadimagethree = (e) => {
    const reader = new FileReader();//using file reader
          reader.onload = () =>{
         if (reader.readyState === 2) {
       
           setVal({
             ...val, //assign file data values to the variable useState
             carosalthree: reader.result,
           });
         
            }
  }
  reader.readAsDataURL(e.target.files[0]);
  }

   //work method
const uploadimageabout = (e) => {
    const reader = new FileReader();//using file reader
          reader.onload = () =>{
         if (reader.readyState === 2) {
       
           setVal({
             ...val, //assign file data values to the variable useState
             aboutus: reader.result,
           });
         
            }
  }
  reader.readAsDataURL(e.target.files[0]);
}

   //work method
const uploadimageenrol = (e) => {
    const reader = new FileReader();//using file reader
          reader.onload = () =>{
         if (reader.readyState === 2) {
       
           setVal({
             ...val, //assign file data values to the variable useState
             enrole: reader.result,
           });
         
            }
  }
  reader.readAsDataURL(e.target.files[0]);
  }
  
/** bottons OnClick events */
//btn 1  method
  const uploadimageonebtn = async (e) => {
    if (val.carosalone.length !== 0) {
      //console.log(val.carosalone);
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo.json";//"http://localhost:3001/homepagecarasalimg1";
      //  var id = 1;
      const imgvalue = val.carosalone;
      try {
        await axios.patch(url, { one: imgvalue }).then((response) => {
          console.log(response);
        }).catch((error) => {
          throw error;
          // console.log(error);
        });
      } catch (e) { throw e; }
    } else {
      alert("please select image");
    }
}
 //btn 2 method
  const uploadimagetwobtn = async (e) => {
    if (val.carosaltwo.length !== 0) {
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo.json";//"http://localhost:3001/homepagecarasalimg2";
      //  var id = 1;
      const imgvalue = val.carosaltwo;
      try {
        await axios.patch(url, { two: imgvalue }).then((response) => {
          console.log(response);
        }).catch((error) => {
          throw error;
          // console.log(error);
        });
      } catch (e) { throw e; }
    }else {
    alert("please select image");
  }
}  
 //btn 3 method
  const uploadimagethreebtn = async (e) => {
    if (val.carosalthree.length !== 0) {
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo.json";//"http://localhost:3001/homepagecarasalimg3";
  
      const imgvalue = val.carosalthree;
      //  var id = 1;
      try {
        await axios.patch(url, { three: imgvalue }).then((response) => {
          console.log(response);
        }).catch((error) => {
          throw error;
          // console.log(error);
        });
      } catch (e) { throw e; }
    }else {
      alert("please select image");
    }
  }
 //btn 4 method
  const uploadimageaboutbtn = async (e) => {
    if (val.aboutus.length !== 0) {
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo.json";//"http://localhost:3001/startjurneyimg";
      // var id = 1;
      const imgvalue = val.aboutus;
      //  var id = 1;
      // const imgvalue = val.carosalone;
      try {
        await axios.patch(url, { four: imgvalue }).then((response) => {
          console.log(response);
        }).catch((error) => {
          throw error;
          // console.log(error);
        });
      } catch (e) { throw e; }
    } else {
      alert("please select image");
    }
  } 
 //btn 5 method
  const uploadimageenrolbtn = async (e) => {
    if (val.enrole.length !== 0) {
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo.json";//"http://localhost:3001/aboutuspageimg";
      //var id = 1;
      const imgvalue = val.enrole;
      //  var id = 1;
      //  const imgvalue = val.carosalone;
      try {
        await axios.patch(url, { five: imgvalue }).then((response) => {
          console.log(response);
        }).catch((error) => {
          throw error;
          // console.log(error);
        });
      } catch (e) { throw e; }
    } else {
      alert("please select image");
    }
  }
 
  const insertallbtn = async (e) => {
    if (isempty() === 1) {
      try {
        var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo.json"; //"http://localhost:3001/photo";
        var id = 1;
        await axios.put(url, { "id": id, "one": val.carosalone, "two": val.carosaltwo, "three": val.carosalthree, "five": val.enrole, "four": val.aboutus })
          .then((response) => {
            // console.log(response);
            console.log(response);
            alert("Added all.")
          }).catch((error) => {
            throw error;
            // console.log(error);
          });
      } catch (e) { throw e; }
    } else {
      alert("Please select all the images");
    }

  /**console.log(val.carosalone);
    console.log("1-----------------------------");
  console.log(val.carosaltwo);
    console.log("2-----------------------------");
  console.log(val.carosalthree);
    console.log("3-----------------------------");
  console.log(val.enrole);
    console.log("4-----------------------------");
  console.log(val.aboutus); */
  } 
  
  const updateallbtn = async (e) => {
    if (isempty() === 1) {
      try {
        var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo.json"; //"http://localhost:3001/photo";
        var id = 1;
        await axios.patch(url, { "id": id, "one": val.carosalone, "two": val.carosaltwo, "three": val.carosalthree, "five": val.enrole, "four": val.aboutus })
          .then((response) => {
            // console.log(response);
            console.log(response);
            alert("Updated all.")
          }).catch((error) => {
            throw error;
            // console.log(error);
          });
      } catch (e) { throw e; }
    } else {
      alert("Please select all the images.");
    }
}  
    //cancel the refresh page
const onsubmitpreventrefresh = (e) => {
       e.preventDefault();
  }
// audio/image/video data fileupload method three that method work correctly
  /**  const [val, setVal] = useState({profileImg:null});  */
 const filesreadHandler = (e) => {
    const reader = new FileReader();//using file reader
          reader.onload = () =>{
         if (reader.readyState === 2) {
        //assign values to the variable useState
           setVal({ ...val, profileImg: reader.result });
          console.log(reader.result);
        }
    }
   reader.readAsDataURL(e.target.files[0]);
  // console.log(reader.readAsDataURL(e.target.files[0]));
   
   /** Copy to Html if you slected file is audio/vidio/image  out put read it
 *       <form className="form-signin" onSubmit={onsubmitpreventrefresh}>
        <div className="text-center " style={{width:'100%', height:''}}>
				     <img src={val.profileImg} alt="" id="img" className="img" style={{ width: '150px', height: '150px' }} />
             <br/> <audio controls src={val.profileImg} type="audio/mp3" />
             <br/> <video width="320" height="240" controls src={val.profileImg} type="video/mp4" />
             <br/> <input onChange={filesreadHandler} type="file" accept="audio/*,video/*,image/*" name="image-upload" id="input"  />
        </div>
        </form>
 **/
				
  }

  
    return (
        <div>
            <h1 className="text-center text-light bg-dark p-3" >Page-Photos-Change</h1>
        <div className="row">
       {/** Imgae priview */}
         
			
       {/**Carosal */}
          <div className="card-body">
            <h2 className="card-title text-left"></h2>
            <form className="form-signin" onSubmit={onsubmitpreventrefresh}>
                   {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                    <h5>Home page Carosal image - 1</h5>  <input onChange={uploadimageone} accept="image/*" type="file" id="inputEmail" className="form-control" placeholder="Home page Carosal Image - 1" required  />
               </div>
                <div className=" col-sm-2" style={{ widht: '100px' }}>
                  <br/>
                  <button onClick={uploadimageonebtn}  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
              </div>
                    {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                   <h5>Home page Carosal image - 2</h5> <input onChange={uploadimagetwo} accept="image/*"  type="file" id="inputEmail" className="form-control" placeholder="Home page Carosal image - 2" required  />
               </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                 <br/> <button onClick={uploadimagetwobtn} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
              </div>
              
                     {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                  <h5>Home page Carosal image - 3</h5>  <input onChange={uploadimagethree}  accept="image/*" type="file" id="inputEmail" className="form-control" placeholder="Home page Carosal image - 3" required  />
               </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <br/> <button onClick={uploadimagethreebtn}  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
            </div>
                         {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                  <h5>About-Us page image</h5>  <input onChange={uploadimageabout} accept="image/*"  type="file" id="inputEmail" className="form-control" placeholder="About-Us page image" required  />
               </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <br/> <button onClick={ uploadimageaboutbtn } className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
             </div>
                         {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                  <h5>Start-Journey Enrole Now Image</h5>  <input onChange={uploadimageenrol} accept="image/*" type="file" id="inputEmail" className="form-control" placeholder="Start-Journey Enrole Now Image" required  />
               
                </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <br/> <button onClick={uploadimageenrolbtn}   className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
             </div>                        
          </form>     
          </div>
        </div>

       <form>
        <div className="text-center row" style={{width:'100%', height:''}}>
				   1: <img src={val.carosalone} alt="" id="img" className="img col-sm-2" style={{ width: '150px', height: '150px',padding:"10px" }} />
           2: <img src={val.carosaltwo} alt="" id="img" className="img col-sm-2" style={{ width: '150px', height: '150px',padding:"10px" }} />
          3: <img src={val.carosalthree} alt="" id="img" className="img col-sm-2" style={{ width: '150px', height: '150px',padding:"10px" }} />
          Aboutus: <img src={val.aboutus} alt="" id="img" className="img col-sm-2" style={{ width: '150px', height: '150px',padding:"10px" }} />
          Enrole: <img src={val.enrole} alt="" id="img" className="img col-sm-2" style={{ width: '150px', height: '150px',padding:"10px" }} />
          </div>
        </form>

        <div className="text-center row" style={{ width: '100%' }}>
             <div className=" col-sm-12 p-5" >
                  <button onClick={insertallbtn}   className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add All</button>  
                  <button onClick={updateallbtn}   className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update All</button>    
          </div>
        </div>
      </div>
   

    );
}
