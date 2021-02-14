//imports
import React, { useState } from 'react';
import $ from 'jquery';

function Acheive() {

//Hooks created 
   // const [count, setCount] = useState(0);
    const [count, setCount]= useState({
        a:18 , b:5,c:9,d:12,e:11
     });
//method 1
    
    
//sleep function
 function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

    async function f1() {
        let x = 0;
        while (x < 10) {
            //call sleep method
            await sleep(400);
    
            setCount({
                ...count,
                a: x * 555,
                b: x*49,
                c: x*89,
                d: x * 23,
                e: x*2490
                });
                
            x++; 
            }
            }


 
       const looping = () => { f1()   }
  
//Jquery hover method 
    const enter = (e) => {  
    e.target.style.background = '';
    } 

    const leave = (e) => {
   
        e.target.style.background = 'white';

    }
       
     
 
    return (
      <div>
        <div className="container">
            <div className="title-block">
                <div className="title-block__wrap" style={{ padding: '60px', fontWeight: 'bold'}}>
                    <h2 className="text-center " style={{  color: '#09015f', backgroundColor: '#80ffdb', fontSize:'45px',fonFamily: 'Hanalei' }}>Achieve Your Goals With <br /> My Academy</h2>
                    <p className="text-center text-dark">My Academy provide an easy, smart and large platform for online classes.</p>
                </div>
            </div>
                <div onMouseLeave={looping} onMouseEnter={enter  } className=" row" style={{ padding: '60px'}}>
                <div className="l-features__item col-md-3 text-center">
                    <div className="l-features__icon"><img src="http://www.learneasy.lk/images/home/icon-students.png" alt="" />
                    </div>
                    <h3 > {count.a}<span>+Students</span></h3>
                    <p>Future Genius</p>
                </div>
                <div className="l-features__item col-md-3 col-sm-12 text-center">
                    <div className="l-features__icon"><img src="http://www.learneasy.lk/images/home/icon-teachers.png" alt="" />
                    </div>
                    <h3>{count.b}+ <span>Teachers</span></h3>
                    <p>All your teachers are here!</p>
                </div>
                <div className="l-features__item col-md-3 col-sm-12 text-center">
                    <div className="l-features__icon"><img src="http://www.learneasy.lk/images/home/icon-papers.png" alt="" />
                    </div>
                    <h3>{count.c}+ <span>Past Papers</span></h3>
                    <p >Find as many past papers with us!</p>
                </div>
                <div className="l-features__item col-md-3 col-sm-12 text-center">
                    <div className="l-features__icon"><img src="http://www.learneasy.lk/images/home/icon-sessions.png" alt="" />
                    </div>
                    <h3>{count.d}+ <span>Class Sessions</span></h3>
                    <p>Learn Anything</p>
                    </div>
                </div>
                    
                {/**end row 1 */}
                {/** start row 2 */}
                <div className="l-features__item row ">
                    <div className="col-md-12 col-sm-12 text-center">
                        <div className="l-features__icon"><img src="http://www.learneasy.lk/images/home/icon-hd.png" alt="" /></div>
                        <h3>{ count.e}+ HD Quality</h3>
                    <p>Live streaming classes
                        in HD quality</p>
                    </div>
                    </div>
                    
            </div>
        </div>
    );
}
                                
export default Acheive;