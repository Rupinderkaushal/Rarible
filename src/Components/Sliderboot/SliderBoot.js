import React from 'react'
import "../Sliderboot/SliderBoot.css"
import "react-multi-carousel/lib/styles.css";
const SliderBoot = () => {
    return (
        <div>
 
<div
  id="carouselVideoExample"
  class="carousel slide carousel-fade"
  data-mdb-ride="carousel"
>
  
  <div class="carousel-indicators">
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="2"
      aria-label="Slide 3"
    ></button>
     <button
      type="button"
      data-mdb-target="#carouselVideoExample"
      data-mdb-slide-to="3"
      aria-label="Slide 4"
    ></button>
  </div>

  
  <div class="carousel-inner">
   <div class="carousel-item active ">
 <video  class="img-fluid" autoplay="autoplay" loop muted>
   <source src="https://img.rarible.com/feat/video/webm/x2/770b44db9520b3636d04a0968907d847/299bb062/ezgif.com-gif-maker.mp4" type="video/mp4" />
 </video>

 </div>


 <div class="carousel-item  ">
 <video  class="img-fluid" autoplay="autoplay" loop muted>
   <source src="https://img.rarible.com/feat/video/webm/x2/2b15f961fed182849758bb4e9bb1358d/217573fa/rarible-header-loop1.mp4" type="video/mp4" />
 </video>

 </div>


 <div class="carousel-item">
 <video  class="img-fluid" autoplay="autoplay" loop muted>
   <source
    src="https://img.rarible.com/feat/video/webm/x2/92eb5ee45b096847f45fa05918c4cea7/b4229563/rarible_video_2.mp4"
    type="video/mp4"
  />
</video>

</div>
<div class="carousel-item">
<video  class="img-fluid" autoplay="autoplay" loop muted>
  <source
    src="https://img.rarible.com/feat/video/webm/x3/155f0090bdf271e803d7330217b3a407/e1aad713/GenerationIII-FullCycleFeature1.mp4"
    type="video/mp4"
  />
</video>
</div>
   
  </div>
</div>


        </div>
    )
}

export default SliderBoot
