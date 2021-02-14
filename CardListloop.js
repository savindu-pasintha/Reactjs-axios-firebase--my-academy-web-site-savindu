import CardList from './CardList';
import Button from '@material-ui/core/Button';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function CardListloop() {

    const [v, setV] = useState({ dataset:{} });
    const datafunction = async () => {
     
         try {
            //var obj = { id: val.id, description: val.description }
            var url = "https://react-5ba2b-default-rtdb.firebaseio.com/upcommingclass/"; //"http://localhost:3001/photo";
         //   var id = val.id
            var json = ".json";
            var apiurl = url  + json;
        
            await axios.get(apiurl).then((response) => {
               // console.log(response);
               //console.log(response.data);
                setV({ ...v, dataset: response.data});
             //   Object.values(response.data) 
            //  console.log(response.data);
            //   return 1;
            }).catch((error) => {
               throw error;
               // console.log(error);
            });
         } catch (e) { throw e; }
      }   
  //page onload time render one time method
  useEffect(() => { datafunction(); }, []);
  
//card props to pass value created as a property
   /** const arrayobj = [

        {
            id: 0,
             type: "O/L",
                  grade: "13",
                     subject: "Maths",
                        teachername: "A/L Maths Pilot Exam Pastpaper",
                          date: "2020-05-24",
                            time : "09:00 am",
                             description: "Assciation of Advance Education's model paper for Combine Maths- 2020",
                                 imgurl:"https://www.learneasy.lk/uploads/1065/5-Scholarsip-1.jpg" 
                },
        {
            id: 1,
             type: "O/L",
                  grade: "11",
                     subject: "Maths",
                        teachername: "A/L Maths Pilot Exam Pastpaper",
                          date: "2020-05-24",
                            time : "09:00 am",
                             description: "Assciation of Advance Education's model paper for Combine Maths- 2020",
                                 imgurl:"https://www.learneasy.lk/uploads/1066/5-Scholarsip-2.jpg" 
                  },
        {
            id: 2,
            type: "O/L",
                    grade: "11",
                     subject: "Maths",
                        teachername: "A/L Maths Pilot Exam Pastpaper",
                          date: "2020-05-24",
                            time : "09:00 am",
                             description: "Assciation of Advance Education's model paper for Combine Maths- 2020",
                                 imgurl:"https://www.learneasy.lk/uploads/1117/11-History.jpg" 
        },
         {
            id: 3,
            type: "O/L",
                    grade: "11",
                     subject: "Maths",
                        teachername: "A/L Maths Pilot Exam Pastpaper",
                          date: "2020-05-24",
                            time : "09:00 am",
                             description: "Assciation of Advance Education's model paper for Combine Maths- 2020",
                                 imgurl:"https://www.learneasy.lk/uploads/1261/Pharmacist-weekday-copy.jpg" 
        },
         {
            id: 4,
            type: "O/L",
                    grade: "11",
                     subject: "Maths",
                        teachername: "A/L Maths Pilot Exam Pastpaper",
                          date: "2020-05-24",
                            time : "09:00 am",
                             description: "Assciation of Advance Education's model paper for Combine Maths- 2020",
                                 imgurl:"http://www.learneasy.lk/images/classes/class_cancelled.jpeg" 
                },
         {
            id: 5,
            type: "O/L",
                    grade: "11",
                     subject: "Maths",
                        teachername: "A/L Maths Pilot Exam Pastpaper",
                          date: "2020-05-24",
                            time : "09:00 am",
                             description: "Assciation of Advance Education's model paper for Combine Maths- 2020",
                                 imgurl:"https://www.learneasy.lk/uploads/1283/9-Science-1.jpg" 
                },
        

            ]; */
    

  
    
    //return the tite
    const title =() => {
    return(
            <div className="col-12 " style={{padding:'45px'}}>
                <h3 className="text-center col-12" style={{fontWeight:'bold', fontSize:'45px', color:'#111d5e'}}>Up Comming Classes</h3>
            </div>
            );
    }

    /**
     * btn click event
    const btnclick = (e) => {
        e.target.style.backgroundColor = "red";
    } */

    //btn hover out event
    const btnleave = (e) => {
        e.target.style.backgroundColor = "black";
        e.target.style.color = "white";
         e.target.style.border = "none";
    }

    //btn hover event
    const btnhover = (e) => {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "black";
        e.target.style.border = "2px black solid";
    }

    //return the tite
    const btn =() => {
    return(
            <div  className="text-center col-12 " style={{padding:'45px'}}>
            <Button onMouseEnter={btnhover} onMouseLeave={btnleave} variant="contained" style={{backgroundColor:'black',color:'white',  width:'300px', height:'45px'}}>
                  View All online classes
               </Button>
            </div>
            );
    }


var arrayname = v.dataset ;
 var   x = Object.values(arrayname); //object{} convert as a array []
  //  console.log(x);//apidata
   // const moreitem = arr.map();
    const items = x.map((d) => {
            return (
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <CardList
                        id={d.id}
                        type={d.type}
                        grade={d.grade}
                        subject={d.subject}
                        teacher={d.teacher}
                        date={d.date}
                        time={d.time}
                        description={d.description}
                        imgurl={d.image}
                    />
                </div>
            );
        });
    


    return (
        <div className="row" style={{backgroundColor:'#e7d9ea', padding:'25px'}}>
            {
                //return the title
                    title()
            }
            
            {  //return the loop cards
                items
            }
            {
                //return btn
                btn()
            }
             
        </div>
    );
}
export default CardListloop;