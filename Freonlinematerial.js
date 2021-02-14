import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
//import cart
import Loopcard from './Loopcard';

function Freeonlinenaterial() {
const [v, setV] = useState({ data:[] });

const datafunction = async () => {
     
         try {
            //var obj = { id: val.id, description: val.description }
            var url = "https://react-5ba2b-default-rtdb.firebaseio.com/onlinematerials/"; //"http://localhost:3001/photo";
         //   var id = val.id
            var json = ".json";
            var apiurl = url  + json;
        
            await axios.get(apiurl).then((response) => {
               // console.log(response);
               //console.log(response.data);
                setV({ ...v, data: response.data});
             //   Object.values(response.data) 
            //  console.log(v.data);
            //   return 1;
            }).catch((error) => {
               throw error;
               // console.log(error);
            });;
         } catch (e) { throw e; }
      }   
  //page onload time render method
  useEffect(() => { datafunction(); }, []);



    
   //back ground style
     const stl={
        
            backgroundColor : '#6930c3',
            width: '100%', 
         height: 'auto',
         padding: '25px'
    }

    // 2nd row button style 
    const stybtn = { 
        backgroundColor: 'yellow',
        border:'10px, solid, black',
        width: '200px', 
        height: '35px',  
    }



//card props to pass value created as a property
    /**const arrayobj = [

        {
            id:0,
        grade: "O/L",
            subject: "Geography",
                title: "O/L Geography Pastpaper",
                    description: "Pastpaper - Tamil Medium",
                         imgurl:"https://www.learneasy.lk/uploads/16/geo.png"
    },
        {
            id: 1,
            grade: "A/L",
                subject: "Chemistry",
                    title: "A/L Chemistry Pilot Exam Pastpaper",
                        description: "Assciation of Advance Education's model paper for Chemistry - 2020",
                            imgurl:"https://www.learneasy.lk/uploads/15/chemistry.jpg"
        },
        {
                  id:2,
                grade: "A/L",
                    subject: "Biology",
                        title: "A/L Biology Pilot Exam Pastpaper",
                           description: "Assciation of Advance Education's model paper for Biology - 2020",
                               imgurl:"https://www.learneasy.lk/uploads/11/bio.png"
            },
        {
                      id:3,
                    grade: "A/L",
                     subject: "Maths",
                         title: "A/L Maths Pilot Exam Pastpaper",
                             description: "Assciation of Advance Education's model paper for Combine Maths- 2020",
                                 imgurl:"https://www.learneasy.lk/uploads/13/maths.png" 
                }

    ]; */
    
    var arrayname = [];
    arrayname = v.data;//apidata
   // const moreitem = arr.map();
    const Moreitems = arrayname.map(
        (data) => {
            return (
           
                <div className="col-sm-12 col-md-3 col-lg-3">
                    <Loopcard 
                        id={data.id}
                        grade={data.grade} 
                        subject={data.subject} 
                        title={data.title}
                        description={data.description} 
                        imgurl={data.image}
                        />
                 </div>
              
            );
    });

    return (
     <div  style={stl} >
         <div className="row "  >
                <h1 className="text-center text-light col-12 text-bold " style={{ padding:'25px',fontSize:'60px',fontFamily: 'Potta One', fontWeight: 'bold' }}>
                    ..Free online materials..
                </h1>
         </div>
        <div className="row">
                {
                    Moreitems
                }
        </div>
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12 text-center" style={{padding:'30px'}}>
                <Button style={stybtn} variant="contained" >See All Materials</Button>
                </div>  
          </div>      
    </div>
    );
}

export default Freeonlinenaterial;