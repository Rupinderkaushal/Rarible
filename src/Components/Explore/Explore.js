import React from 'react'
import "../HotBids/HotBids.css"
import Carousel from "react-multi-carousel";
import BidCard from '../HotBids/CardBids/BidCard';
import "../Explore/Explore.css";
const Explore = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          
        },}
    
    const SData =[
        
        
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0xb007d041fcde13439212976b2c798c2279b9642a/avatar/QmRZhArCP7mjRmtJJ9zWB1kj7FY1q3tpyKJ3By5MCWqWsC',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0xb007d041fcde13439212976b2c798c2279b9642a/avatar/QmRZhArCP7mjRmtJJ9zWB1kj7FY1q3tpyKJ3By5MCWqWsC',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:79620866622375052805449593826879326143915809581831826021747550262892660003917/32e11963",
             "heading":"Crypto Nft Creator Ape #300 - Limited Edition",
             "txt1":"",
             "txt2":"0.03 ETH",
             "rating":"1/1",
             "value":"place a bid",
             "no":"1"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x572c88c0f02b4f695719663906f7f443845bace3/avatar/QmWTbRLVDWRxMmhhBp7rNVahGtgDD7WL62GSxjkB2CBMTP',
            "src3":'',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xb66a603f4cfe17e3d27b87a8bfcad319856518b8:39429902936700115092360571740973927624629403581475154612701916875461511610379/88999ed",
             "heading":"Ancient Abstract: Pegasi",
             "txt1":"from",
             "txt2":"0.161 ETH",
             "rating":"1/1",
             "value":"place a bid",
             "no":"5"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x989291369c87f9220a566e7fdb3b89dc55aba21b/avatar/QmcajhbMg9D7WFNxcuDcF69bmuVnrUFgKr4z85K9mVpgJh',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x989291369c87f9220a566e7fdb3b89dc55aba21b/avatar/QmcajhbMg9D7WFNxcuDcF69bmuVnrUFgKr4z85K9mVpgJh',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:962196/f803cd0d",
             "heading":"One Day..",
             "txt1":"minimum bid",
             "txt2":"",
             "rating":"1/1",
             "value":"0.069 ETH",
             "no":"91"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x572c88c0f02b4f695719663906f7f443845bace3/avatar/QmWTbRLVDWRxMmhhBp7rNVahGtgDD7WL62GSxjkB2CBMTP',
            "src3":'',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:633141/bfb241fb",
             "heading":"Caligula 1974: Rebirth",
             "txt1":"from",
             "txt2":"0.013 ETH",
             "rating":"2/3",
             "value":"0.007",
             "no":"164"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x989291369c87f9220a566e7fdb3b89dc55aba21b/avatar/QmcajhbMg9D7WFNxcuDcF69bmuVnrUFgKr4z85K9mVpgJh',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x989291369c87f9220a566e7fdb3b89dc55aba21b/avatar/QmcajhbMg9D7WFNxcuDcF69bmuVnrUFgKr4z85K9mVpgJh',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:624676/6886d7ea",
             "heading":"MY car",
             "txt1":"from",
             "txt2":"0.089 ETH",
             "rating":"1/1",
             "value":"place a bid",
             "no":"13"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0xb007d041fcde13439212976b2c798c2279b9642a/avatar/QmRZhArCP7mjRmtJJ9zWB1kj7FY1q3tpyKJ3By5MCWqWsC',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0xb007d041fcde13439212976b2c798c2279b9642a/avatar/QmRZhArCP7mjRmtJJ9zWB1kj7FY1q3tpyKJ3By5MCWqWsC',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:79620866622375052805449593826879326143915809581831826021747550262892660003917/32e11963",
             "heading":"Crypto Nft Creator Ape #300 - Limited Edition",
             "txt1":"",
             "txt2":"0.03 ETH",
             "rating":"1/1",
             "value":"place a bid",
             "no":"1"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x572c88c0f02b4f695719663906f7f443845bace3/avatar/QmWTbRLVDWRxMmhhBp7rNVahGtgDD7WL62GSxjkB2CBMTP',
            "src3":'',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xb66a603f4cfe17e3d27b87a8bfcad319856518b8:39429902936700115092360571740973927624629403581475154612701916875461511610379/88999ed",
             "heading":"Ancient Abstract: Pegasi",
             "txt1":"from",
             "txt2":"0.161 ETH",
             "rating":"1/1",
             "value":"place a bid",
             "no":"5"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x989291369c87f9220a566e7fdb3b89dc55aba21b/avatar/QmcajhbMg9D7WFNxcuDcF69bmuVnrUFgKr4z85K9mVpgJh',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x989291369c87f9220a566e7fdb3b89dc55aba21b/avatar/QmcajhbMg9D7WFNxcuDcF69bmuVnrUFgKr4z85K9mVpgJh',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:962196/f803cd0d",
             "heading":"One Day..",
             "txt1":"minimum bid",
             "txt2":"",
             "rating":"1/1",
             "value":"0.069 ETH",
             "no":"91"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x572c88c0f02b4f695719663906f7f443845bace3/avatar/QmWTbRLVDWRxMmhhBp7rNVahGtgDD7WL62GSxjkB2CBMTP',
            "src3":'',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:633141/bfb241fb",
             "heading":"Caligula 1974: Rebirth",
             "txt1":"from",
             "txt2":"0.013 ETH",
             "rating":"2/3",
             "value":"0.007",
             "no":"164"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x989291369c87f9220a566e7fdb3b89dc55aba21b/avatar/QmcajhbMg9D7WFNxcuDcF69bmuVnrUFgKr4z85K9mVpgJh',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x989291369c87f9220a566e7fdb3b89dc55aba21b/avatar/QmcajhbMg9D7WFNxcuDcF69bmuVnrUFgKr4z85K9mVpgJh',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:624676/6886d7ea",
             "heading":"MY car",
             "txt1":"from",
             "txt2":"0.089 ETH",
             "rating":"1/1",
             "value":"place a bid",
             "no":"13"
        },
       
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
        // {
        //     "src1":'',
        //     "src2":'',
        //     "src3":'',
        //      "pic":"",
        //      "heading":"",
        //      "txt1":"",
        //      "txt2":"",
        //      "rating":"",
        //      "value":"",
        //      "no":""
        // },
    ]
    return (
        <div className="hot-bids">
            <div className="explore-header">
               <div className="explore-button">
                   <div style={{fontSize:'30px',fontWeight:"bolder",color:"black",margin:"10px"}}>Explore</div>
                   <div >
                       <button id="exp-btn"><i style={{color:"black"}} class="fa fa-list-ul" aria-hidden="true"></i> category</button>
                       <button id="exp-btn"><i style={{color:"black"}} class="fa fa-list-ul" aria-hidden="true"></i> collections</button>
                       <button id="exp-btn"><i style={{color:"black"}} class="fa fa-bolt" aria-hidden="true"></i> sale type</button>
                       <button id="exp-btn"><i style={{color:"black"}} class="fa fa-usd" aria-hidden="true"></i> price range</button>
                   
                   </div>
               </div>
               <div className='side-btn'>
                   <button id="exp-btn" ><span id="top-txt">Filter&Sort </span><i style={{color:"black",marginRight:"10px"}} class="fa fa-bars" aria-hidden="true"></i>Recently added</button>
               </div>
            </div>
             
             <div id="bidcrd">
             {SData.map((val)=>(
               <BidCard
               src1={val.src1}
               src2={val.src2}
               src3={val.src3}
               pic={val.pic}
               txt1={val.txt1}
               txt2={val.txt2}
               heading={val.heading}
               rating={val.rating}
               value={val.value}
               no={val.no}
               />
          ))}
             </div>
               
         
        </div>
    )
}

export default Explore
