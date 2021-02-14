import React, { useState } from 'react';
import axios from 'axios';
import { AddRounded, Message } from '@material-ui/icons';
export default function Materials() {

   const [val, setVal] = useState(
      {
         id: "",
         grade: "",
         subject: "",
         title: "",
         description: "",
         image: "",
      });
   const isempty = () => {
      if (
         (val.id.length !== 0)
         &&
         (val.grade.length !== 0)
         &&
         (val.description.length !== 0)
         &&
         (val.title.length !== 0)
         &&
         (val.subject.length !== 0)
         &&
         (val.image.length !== 0)
      ) {
         return 1;
      } else {
         return 0;
      }

   }
   const insertallbtn = async (e) => {
      if (isempty() === 1) {
         try {
            var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
            var id = val.id
            var json = ".json";
            var apiurl = url + id + json;
            await axios.put(apiurl, {
               id: val.id, grade: val.grade, subject: val.subject, title: val.title, description: val.description, image: val.image,
            })
               .then((response) => {
                  // console.log(response);
                  console.log(response);
                  alert("All Added.");
               }).catch((error) => {
                  throw error;
                  // console.log(error);
               });
         } catch (e) { throw e; }
      }
      else {
         alert(" pleae enter values.");
      }
   }
   const updateallbtn = async (e) => {
      if (isempty() === 1) {
         try {
            var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
            var id = val.id
            var json = ".json";
            var apiurl = url + id + json;

            var obj = {
               id: val.id,
               grade: val.grade,
               subject: val.subject,
               title: val.title,
               description: val.description,
               image: val.image,
            };
 
            await axios.patch(apiurl, obj).then((response) => {
               // console.log(response);
               console.log(response);
               alert("All update.");
            }).catch((error) => {
               throw error;
               // console.log(error);
            });
         } catch (e) { throw e; }
      }
   else {
      alert(" pleae enter values.");
   }
}
// update grade
const btnone = async () => {
   try {
      if ((val.id.length !== 0) && (val.grade.length !== 0)) { 
         
         var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
         var id =val.id
         var json = ".json";
         var apiurl = url + id + json;
         var obj = { id: val.id, grade: val.grade };
         await axios.patch(apiurl, obj ).then((response) => {
               // console.log(response);
            console.log(response);
              alert("Updated.");
            }).catch((error) => {
               throw error;
               // console.log(error);
            });
      } else {
         alert("please enter values");
      }
       
  } catch (e) { throw e; }
   }   
  //update subject 
 const btntwo = async () => {
   try {
      if ((val.id.length !== 0) && (val.subject.length !== 0)) { 
         var obj = { id: val.id, subject: val.subject}
            
         var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
         var id =val.id
         var json = ".json";
         var apiurl = url + id + json;
        
         await axios.patch(apiurl, obj ).then((response) => {
               // console.log(response);
            console.log(response);
              alert("Updated.");
            }).catch((error) => {
               throw error;
               // console.log(error);
            });
      } else {
        alert("please enter values");
      } 
       
  } catch (e) { throw e; }
   }  
   //update title
const btnthree = async () => {
   try {
      if ((val.id.length !== 0) && (val.title.length !== 0)) { 
         
         var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
         var id =val.id
         var json = ".json";
         var apiurl = url + id + json;
         var obj = { id: val.id, title: val.title };
         await axios.patch(apiurl, obj ).then((response) => {
               // console.log(response);
            console.log(response);
              alert("Updated.");
            }).catch((error) => {
               throw error;
               // console.log(error);
            });
      } else {
        alert("please enter values");
      } 
       
  } catch (e) { throw e; }
   }
   //update image
const btnfour = async () => {
   try {
      if ((val.id.length !== 0) && (val.image.length !== 0)) {
         var obj = { id: val.id, image: val.image }
           
         var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
         var id = val.id
         var json = ".json";
         var apiurl = url + id + json;
         
         await axios.patch(apiurl, obj).then((response) => {
            // console.log(response);
            console.log(response);
            alert("Updated.");
         }).catch((error) => {
            throw error;
            // console.log(error);
         });
      } else {
         alert("please enter values");
      }
       
  } catch (e) { throw e; }
   }  
   //update discription
const btnfive = async () => {
   try {
     if ((val.id.length !== 0) && (val.description.length !== 0)) {
          var   obj = { id: val.id, description: val.description}
         var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
         var id =val.id
         var json = ".json";
         var apiurl = url + id + json;
        
         await axios.patch(apiurl, obj ).then((response) => {
               // console.log(response);
            console.log(response);
            alert("Updated.");
            }).catch((error) => {
               throw error;
               // console.log(error);
            });
     } else {
        alert("please enter values");
      } 
       
  } catch (e) { throw e; }
   } 
const isvalidid = async () => {
      if (val.id.length !== 0) {
         try {
            //var obj = { id: val.id, description: val.description }
            var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
            var id = val.id
            var json = ".json";
            var apiurl = url + id + json;
        
            await axios.get(apiurl).then((response) => {
               // console.log(response);
               console.log(response.data);
               if (response.data !== 0) {
                  return 1;
               } else {
                  return null;
               }
            //   return 1;
            }).catch((error) => {
               throw error;
               // console.log(error);
            });;
         } catch (e) { throw e; }
      }
      else {
        alert("please enter values");
      } 
   }    
 //update discription
   const deletebtn = async () => {
     // console.log(isvalidid());
   
   try {
     if (val.id.length !== 0){
        // var   obj = { id: val.id, description: val.description}
         var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
         var id =val.id
         var json = ".json";
         var apiurl = url + id + json;
         await axios.delete(apiurl).then((response) => {
               // console.log(response);
            console.log(response);
            alert("Deleted.");
            }).catch((error) => {
              // throw error;
               console.log(error.Message);
            });
     } else {
        alert("please enter values");
      } 
       
  } catch (e) { throw e; } 
}    
   
    
  //work method
const uploadimageone = (e) => {
    const reader = new FileReader();//using file reader
          reader.onload = () =>{
         if (reader.readyState === 2) {
       
           setVal({
             ...val, //assign file data values to the variable useState
             image: reader.result,
           });
         
            }
  }
  reader.readAsDataURL(e.target.files[0]);
  }    
    //form submit after the refresh page
const onsubmitpreventrefresh = (e) => {
       e.preventDefault();
  }

  

    return (
        <div>
            <h1 className="text-center text-light bg-dark p-3">Online-Materials</h1>
            <div className="row">
              {/**Carosal */}
          <div className="card-body">
            <h2 className="card-title text-left"></h2>
            <form className="form-signin" onSubmit={onsubmitpreventrefresh}>
                 {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                  <input onChange={(e) => { setVal({ ...val, id: e.target.value }) }}  type="text" id="inputEmail" className="form-control" placeholder="ID" required  />
               </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <button onClick={ deletebtn }  className="btn btn-lg btn-danger btn-block text-uppercase" type="submit">Delete</button>  
              </div>
             </div>   
              {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                  <input onChange={(e) => { setVal({ ...val, grade: e.target.value }) }}  type="text" id="inputEmail" className="form-control" placeholder="Grade" required  />
               </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <button onClick={ btnone}  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
             </div>
                    {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                  <input onChange={(e) => { setVal({ ...val, subject: e.target.value }) }}  type="text" id="inputEmail" className="form-control" placeholder="Subject" required  />
               </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <button onClick={ btntwo }  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
             </div>
                     {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                  <input onChange={(e) => { setVal({ ...val, title: e.target.value }) }}  type="text" id="inputEmail" className="form-control" placeholder="Title" required  />
               </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <button onClick={ btnthree}  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
            </div>
                         {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                   <h5>Photo</h5> <input onChange={uploadimageone}  type="file" id="inputEmail" className="form-control" placeholder="Image" required  />
                </div>
                
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <br/> <button onClick={ btnfour}  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
              </div>
             </div>
                         {/** row 1 */}
             <div className="row p-2">
                <div className="form-label-group col-sm-10">
                <textarea name="Text1" cols="40" rows="5" onChange={(e) => { setVal({ ...val, description: e.target.value }) }}  type="text" id="inputEmail" className="form-control" placeholder="Description" required />
                  </div>
               <div className=" col-sm-2" style={{widht:'100px'}}>
                  <button onClick={ btnfive }  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">update</button>  
               </div>
            </div>   
                                      
            </form>
                    
          </div>
       
          </div>
          
           <form className="row " style={{width:'100%', height:'150px'}}>
             <div className="text-center col-sm-12" style={{width:'150px', height:'150px'}}>
				    <img src={val.image} alt="" id="img" className="img  " style={{ width: '150px', height: '150px',padding:"10px" }} />
             </div>
          </form>
           
           <div className="row p-5" style={{widht:'100px'}}>
                  <button onClick={ insertallbtn }  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Add All</button>  
                  <button onClick={ updateallbtn }  className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Update All</button>  
          </div>

        </div>
    );
}
