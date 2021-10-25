import React from 'react'
import "../CardBids/BidCard.css"
const BidCard = ({src1,src2,src3,pic,txt1,txt2,rating,value,no,heading}) => {
    let open = false;
    const OnClick =()=>{
        const Vik = document.getElementById("dots-dropdown")
        if(!open){
            Vik.style.display="block"
        }
        else{
            Vik.style.display="none"
        }
        open =!open;
    }
    
   
    return (
        <div className='bid-card' >
          <div id="margin-div">
          <div id="card-head">
           <div >
               {src1 &&  <a    href="#"> <img title="img1"  className="bid-card-img" src={src1} />
               </a> }
               {src2 &&  <a id="bid-pic" href="#"> <img  className="bid-card-img" src={src2} />
               
               </a> }  {src3 &&  <a  href="#"> <img id="bid-pic"  className="bid-card-img" src={src3} />
               
               </a> }
              
                {/* <a href="#"><img id="bid-pic" className="bid-card-img" src={src2}/></a>
                   <a href="#">    <img id="bid-pic" className="bid-card-img" src={src3} />
            </a>            */}
            </div>
            <div>
           <a onClick={OnClick} href="#">
           <i id="dots-a" class="fa fa-ellipsis-h" aria-hidden="true"></i>
           <ul id='dots-dropdown'>
               <li>yes</li>
           </ul>
           </a>
            </div>
           </div>
           <div id="card-pic">
               <img id="pic-holder" src={pic}/>
           </div>
           <div>
               <label id="bid-card-txt">{heading}</label> <br/>
               <label id="bid-card-txt" style={{color:'grey'}} >{txt1} <span style={{color:"black"}}>{txt2}</span><span style={{marginLeft:"5px"}}>{rating}</span></label>
               <label  className="bid-crd-tXt" id="bid-card-txt" ><span>Bid <span>{value} wETH</span></span> <span><i class="fa fa-heart-o" aria-hidden="true"></i><span style={{marginLeft:"5px",color:"grey"}}>{no}</span></span></label>
           </div>
          </div>
        </div>
    )
}

export default BidCard
