import React from 'react';
import {Row,Col,Input,Dropdown} from 'antd';
import "../Navbar/Navbar.css";
import Logo from "../../images/logo.jpg";
const Navbar = () => {
    const navLogo ={
        background:"yellow",
        fontWeight:"bolder",
        fontSize:"20px",
        padding:"5px 10px",
        borderRadius:"10px",
        fontFamily:"Anton",
    }
    const navAnchor ={
        textDecoration:"none",
        color:"black",
    }
    const searchBox ={
        borderRadius :"20px",
        fontSize:"14px",
        fontWeight:"bold",
        border:"none",
        width:'350px',
        padding:'15px 10px',
        background:"#EDEDED",
    }
    var isOpen = true;
    const hlp =()=>{
        const Fix = document.getElementById("a-ul")

        
            if(isOpen){
                Fix.style.display="none"
            }
            else{
                Fix.style.display='block'
            }
        
        isOpen = !isOpen;      
     }
    return (
        <>
        <Row id='navbar-wrapper' align="middle" span={24}  >
           
          <Col id='img-div' offset={1} span={7}  >
          <Row id="logo-div" span={24}>
          <Col span={8} >
             <img style={{height:"80px"}} src={Logo} />
           </Col>
           <Col  span={15}>
           <Input id="IP" placeholder="&#128269; Collection,item or user" />
           </Col>
          </Row>
</Col>       
       <Col span={11}   >
          <Row id="nav-link-wrapper"  span={24}>
              <Col id="link-col"  span={13}>
              <ul id='ul-li'>
                  <li ><a  className='active' href="#">Explore</a></li>
                  <li><a className="inactive" href="#">My profile</a></li>
                  <li><a className="inactive" href="#">Following</a></li>
                  <li style={{marginRight:"10px"}}><a className="inactive" href="#">Activity</a></li>
              </ul>
              </Col>
              <Col style={{border:'none',paddingLeft:'0px'}}  id="link-col" span={9} offset={1}>
              <ul className="ul-li1"  id='ul-li' >
              <li><a className="inactive" href="#">Hows it works</a></li>
                  <li id="a" ><a onClick={hlp}  className="inactive" href="#">
                     Community <i class="fa fa-angle-down" aria-hidden="true"></i>
                      </a>
                      <ul id="a-ul" >
                          <li><a href="#">RARI Token</a></li>
                          <li><a href="$#">Discussion</a></li>
                          <li><a href="$#">Voting</a></li>
                          <li><a href="$#">Suggest feature</a></li>
                          <li><a href="$#">rariable protocol</a></li>
                          <li><a href="$#">Subscribe</a></li>
                          <hr/>
                          <li><div id="fafa" className='d-flex justify-content-between'>
                              <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-telegram" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-gamepad" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
                              <a href="#"><i class="fa fa-imdb" aria-hidden="true"></i></a>
                              </div></li>

                      </ul>
                      </li>
                  
              </ul>
              </Col>
          </Row>
       </Col>
       <Col id="navbar-btn" className='d-flex justify-content-between' span={4}   >
           <button id='btn-pro' >Create</button>
           <button id='btn-pro' style={{background:"#ffff",color:'black',border: "1px solid #808080"}} >Signin</button>
           <button id="moon"><i class="fa fa-moon-o" aria-hidden="true"></i>
</button>
       </Col>
   </Row>
 
 
        </>
    )
}

export default Navbar
