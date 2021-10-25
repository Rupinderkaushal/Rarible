import React from 'react'
import "../Footer1/Footer1.css"
const Footer1 = () => {
    return (
        <div>
            <div className="footer-header">
                <div id='footer-left'>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <label style={{fontWeight:'bolder',color:'black',marginBottom:"10px"}} >Get the latest Rarible updates</label>
                        <input id="footer-input" placeholder="your email" />
                    </div>
                    <div>
                        <ul style={{listStyleType:'none'}}>
                            <li style={{color:"black",marginBlock:"15px"}} id="ul-li-one">Rarible</li>
                            <li id="ul-li-one" >Explore</li>
                            <li id="ul-li-one" >Blog</li>
                            <li id="ul-li-one" >Jobs</li>
                            <li id="ul-li-one" >Bug bounty</li>
                        </ul>
                    </div>
                </div>
                <div id='footer-right'>
               
                    <div>
                        <ul style={{listStyleType:'none'}}>
                            <li style={{color:"black",marginBlock:"15px"}} id="ul-li-one">Community</li>
                            <li id="ul-li-one" >RARI Token</li>
                            <li id="ul-li-one" >Discussion</li>
                            <li id="ul-li-one" >Voting</li>
                            <li id="ul-li-one" >Subscribe</li>
                        </ul>
                    </div>
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <label style={{fontWeight:'bolder',color:'black',marginBottom:"10px"}}>Language</label>
                        <input id="right-input" placeholder="English"/>
                    </div>
               
               
                </div>
             < hr id="vik" />
             <div id="copyright" >
                 <div  >
                     <label style={{margin:"0px 10px",fontWeight:"bolder"}}><a >© Rarible, Inc. All rights reserved.</a></label>
                     <label style={{margin:"0px 10px ",fontWeight:"bolder"}}  ><a >Terms</a></label>
                     <label style={{margin:"0px 10px",fontWeight:"bolder"}} ><a>Privacy policy</a></label>
                 </div>
                 <div >
            <a>    <i style={{margin:"0px 10px",fontWeight:"bolder"}} class="fa fa-twitter" aria-hidden="true"></i></a> 
             <a>    <i style={{margin:"0px 10px",fontWeight:"bolder"}} class="fa fa-telegram" aria-hidden="true"></i></a> 
               <a>  <i style={{margin:"0px 10px",fontWeight:"bolder"}} class="fa fa-instagram" aria-hidden="true"></i></a> 
                <a> <i style={{margin:"0px 10px",fontWeight:"bolder"}}  class="fa fa-jsfiddle" aria-hidden="true"></i></a> 
                <a> <i style={{margin:"0px 10px",fontWeight:"bolder"}} class="fa fa-youtube-play" aria-hidden="true"></i></a> 
                 </div>
             </div>
            </div>
        </div>
    )
}

export default Footer1
