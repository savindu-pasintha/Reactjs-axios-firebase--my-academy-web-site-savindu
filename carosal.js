import { Carousel } from 'react-bootstrap';
import {useState,useEffect} from 'react';
import axios from 'axios';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  const [v, setV] = useState({
    bgimg1: "",
    bgimg2: "",
    bgimg3: "",
    loading: false
  });
    const datafunction = async () => {
    try {
      var url = "https://react-5ba2b-default-rtdb.firebaseio.com/photo.json"; //"http://localhost:3001/photo";
      await  axios.get(url).then((res) => {
    setV({ ...v,  bgimg1: res.data.one, bgimg2: res.data.two, bgimg3: res.data.three});
      // console.log(res);
      // console.log(v.bgimg);
      }).catch((error) => {
        console.log(error);
      });
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => { datafunction(); }, []);
 // var x = 'url("'; var c = v.bgimg; var y = '")'; var z = x + c + y;

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={v.bgimg1}  //"https://www.learneasy.lk/uploads/856/banner-1.png"
            alt="First slide"
            width="100%"
            height="600"

          />
          <Carousel.Caption>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            //src={url}
           src={v.bgimg2}   //"http://www.learneasy.lk/images/classes/class-banner.jpg"
            alt="Second slide"
              width="100%"
            height="600"
          />
  
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={v.bgimg3}  //"https://www.learneasy.lk/uploads/1010/5.jpg"
            alt="Third slide"
              width="100%"
            height="600"
          />
  
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;