import React from 'react'
import "../VideoCard/VideoCard.css"
const VideoCard = ({Heading,pic,video}) => {
    return (
       <>
       <div  className="main-card">

           {Heading && <div className="heading-div">
                {Heading}
            </div> }
           
           {pic && 
            <div className="pic-div">
                <img  src={pic} className="pic-child"/> 
            </div>
}

{
    video &&   <div className="video-crd">
    <video id="real-vid" autoPlay="autoplay" loop muted >
        <source src={video} type="video/mp4"></source>
    </video>
</div>
}
       </div>
     
     
       </>
    )
}
export default VideoCard
