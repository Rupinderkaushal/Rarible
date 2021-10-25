import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../VideoMain/VideoMain.css"
import SliderBoot from '../Sliderboot/SliderBoot';
import VideoCard from '../VideoCard/VideoCard';
const VideoMain = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          
        },}
    
        const WebUrl =[
            {
                "url":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/4dd448eb3afbdf0d25ed559201a08ed8/96876ad5/Screenshot2021-10-20at13_58_07.png",
                "heading" :"Felix Rothschild"
            },
            {
                "heading" :"Osiriso Metaverse",
                "url":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/a9ef55675c791dddfe85ce5b0791c5a9/5c24a890/Screenshot2021-10-20at13_47_54.png",
               
            },
            {
              "video" : "https://img.rarible.com/feat/video/webm/x2/2fe7b5ffeb4c1ec35bc40860470b5ff5/ae1a6c22/rari_main.mp4"
            },
            {
                "heading" :"Drops",
    
                "video":"https://img.rarible.com/feat/video/webm/x2/19a92cffef18629bd6adf0e2fa45302a/331100db/Rarible_Feature1.mp4"
            },
            {
                "heading" :"Savage Dogs",
                     "url":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/5f9588185ceec28c336ffaec400b2736/ba693a75/Screenshot2021-10-20at00_58_06.png"
            },
            {
               "heading":'Split_VZN',
               "url":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/d908b57275545a95c3ed2e465ae15e0f/32c3e4e8/Screenshot2021-10-20at00_52_19.png"
            },
            {
               "heading":"Machineast",
                "video":"https://img.rarible.com/feat/video/webm/x2/871c1604baa112ee32446b04fb6043a9/3ce76091/1c91c11f.mp4"
            },
            {
                "heading":"cocoNFT",
                "video":"https://img.rarible.com/feat/video/webm/x2/e0f0aab8e74103da117b55da694e94b7/0e543dd5/alexivamusic.mp4"
            },
            {
                "video":"https://img.rarible.com/feat/video/webm/x1/90396535aa7b8b6316b7570df5282206/9a5cdf85/800.mp4"
            },
            {
                "heading":"Susan Sarandon",
               "url":"https://res.cloudinary.com/rarible-inc/image/upload/t_featured/attachments/f973a0481193be79ae5af6828b3535b8/b614418d/2_SusanSarandonNFT.png"
            },
            {
                "video":"https://img.rarible.com/feat/video/webm/x1/51c88343b354cdd41ec81c82a13df62d/661c1b9c/skiesopensealogo1.png"
            }
        ]
    
    return (
        <div id="car">
            <Carousel responsive={responsive}
            
            >      
           <SliderBoot/>
               {WebUrl.map((val) =>(
               <VideoCard 
               id="bump"
               Heading={val.heading}
               pic={val.url}
               video ={val.video}
               />
               ))}
              
            </Carousel> 
           
            </div>
            
    )
}

export default VideoMain


