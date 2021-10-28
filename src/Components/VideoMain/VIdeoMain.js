import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../VideoMain/VideoMain.css"
import SliderBoot from '../Sliderboot/SliderBoot';
import Videoflex from '../mainvideoflex/Videoflex';
const VideoMain = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          
        },}
    
       
    return (
        <div id="car">
             {/* <Carousel responsive={responsive}
            
            >      
            <SliderBoot/>
           <Videoflex /> 
              
                </Carousel> */}
                <div >
                <SliderBoot/>
                </div>
               <div id="yes">
                   <Videoflex/>
                   <Videoflex/>
               </div>
           
            </div>
            
    )
}

export default VideoMain


