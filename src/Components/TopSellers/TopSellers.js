import { Button } from 'antd';
import React from 'react';
import CollectionCard from '../Collection-card/CollectionCard';
import "../TopSellers/TopSellers.css"

const TopSellers = () => {
    const CardValue = [
        {
            "srno":"1",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x8c64bdf3d8cd8ac8d1fa7dbcfceffb5885655574/avatar/Qmd8vhGFTqBnFxHKhwQ3Z8nLYRarYZpmvkHi6KcSoLEyQU",
            "hddr":"spooky condoms",
            "money":"$15,990"
        },
        {
            "srno":"2",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x1ee9e4a15ab1ce6fb55ada784d372bba65d6dd20/avatar/QmQrnJLeSCuf82t54F8KgD1kfkffZiuPpxJjkteQVLPM8H",
            "hddr":"G.I. JOE",
            "money":"$15,728"
        },
        {
            "srno":"3",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x8dd711f6938a96ddd905ad3314f9851b97faffc6/avatar/QmTByqYAi1z3kDfUCqEngee5cmS8HjAs2AVjorej4vi74p",
            "hddr":"WizardFrog",
            "money":"$10,742"
        },
    ]
  const CardVal2 =[
              {
            "srno":"4",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xc591674216324dc6f5496be098dfb52b674cbaca/avatar/QmUTqvHHaDoXGdvpEkuDp2KMXip5BZK5hkc4fmfD4k2awQ",
            "hddr":"Georgina",
            "money":"$6,213"
        },
        {
            "srno":"5",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xa1fdfa0a7bbd68f01563df802c2efe56788319e8/avatar/Qmb83q53eM8daZBKfAmCab6bMqJw9aNaSJDEkSdmvJMBB9",
            "hddr":"AusChauffeur",
            "money":"$4,105"
        },
        {
            "srno":"6",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x0c88f0f125c59cad35c704b8044107f2e51d28fe/avatar/QmZourQ1zoCgbFjFhuFu21oErfjgW1i6k6xHk5vGyK6pSQ",
            "hddr":"Cryptoadz",
            "money":"$3,004"
        },
  ]
      const CardVal3=[
          {
            "srno":"7",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x6eba3c64a1271978c4fc775a064a7fd3621a75ca/avatar/QmQDsBKZLyt1eqct244MWkUCvjypewdd2dCUYDtX51WKxP",
            "hddr":"Remarkable Archive",
            "money":"$2,417"
        },
        {
            "srno":"8",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xc46db2d89327d4c41eb81c43ed5e3dff111f9a8f/avatar/Qmc6EyjbWQEVTvSTyRqrR6AX4gL1h7fAXHkeEbnHZuvHyB",
            "hddr":"Deeze",
            "money":"$2,137"
        },
        {
            "srno":"9",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xe4c6c46645988bbafd8ef6b4d1b60d969cc857c3/avatar/QmctMZ3DWwKHcbEkCc3DA2mf5uUZboCsQpHnArbcFM1gJn",
            "hddr":"iuri",
            "money":"$2,071"
        },
      ]
       const CardVal4 =[
             {
            "srno":"10",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x12f0c01e37c1d0b86b52dd8febc3bf157b82b7f1/avatar/QmQKfJ4UaR33LTp7HRMA37srPXEWfq9EMwLodiHQDnui6p",
            "hddr":"Sina Ates",
            "money":"$2,057"
        },
        {
            "srno":"11",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x6015528bb72757652b2a5d5f46505181e0dbd907/avatar/QmQdDB1Ura9mJWYqeh9uz8PZfnehiup5fXhG4nVW7GqjzY",
            "hddr":"chromospace",
            "money":"$2,057"
        },
        {
            "srno":"12",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xc83c14cd6455eb090af5cda94bedb686c3c39a41/avatar/Qme2Au5PSXj8jReyzZR4Hgcb8KqLjWz5tmSG7bBrEnLsT4",
            "hddr":"TεсhNόir",
            "money":"$2,028"
        },
       ]
       const CardVal5 =[
              {
            "srno":"13",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0xabc0e3faee254dc26c44724e40be2208f2aa8c20/avatar/Qmd39BY7P1AM4qXZjJPqshmBkwUgV1dBPnw4PQkpoKcJ1F",
            "hddr":"Knxtti",
            "money":"$2,017"
        },
        {
            "srno":"14",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x94cf4be973e9a5135e7d000f7dabcd1f6026a59c/avatar/QmULgLQB6Qywawz2ZkJhXYF4sLTsYTeNK4KKkDfWWrniKB",
            "hddr":"Saira",
            "money":"$1,628"
        },
        {
            "srno":"15",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-users/0x3433c2753da24df566ea14c40584179e97396cf3/avatar/QmZTRVsTCQdJt2gs7Qu3f8nfA2qLYJnRrNLqU3j8z6NKwb",
            "hddr":"Moxarra",
            "money":"$1,326"
        },
       ]
       const CardVal6 =[
               {
            "srno":"16",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xa4631a191044096834ce65d1ee86b16b171d8080/avatar/QmSEqX2dtkWRiwfYLPMq1psYmLT4GgybTmHAmoTwUjViAx",
            "hddr":"CreatureToadz",
            "money":"$1,029,399"
        },
        {
            "srno":"17",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x059edd72cd353df5106d2b9cc5ab83a52287ac3a/avatar/QmcJMTboitFVH7TxZAxpNjhnBfREHLtw2ow8cuAoeV7yxr",
            "hddr":"Art Blocks Curated",
            "money":"$972,207"
        },
        {
            "srno":"18",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x7e6bc952d4b4bd814853301bee48e99891424de0/avatar/QmcwFpFJ7HcqCSohG4Ea7qwV21gDiQ6CYj5a8BnfrGwArp",
            "hddr":"Jungle Freaks",
            "money":"$960,466"
        },
       ]
    let open= false;
   
    const ListShow =()=>{
        const drop = document.querySelector('#seller-ul')
        
            if(!open){
                drop.style.display='block';
            }
            else{
                drop.style.display="none"
            }
        
        open = !open;

    }
    const ListShow1 =()=>{
        const drop = document.querySelector('#seller-ul-one')
        
            if(!open){
                drop.style.display='block';
            }
            else{
                drop.style.display="none"
            }
        
        open = !open;

    }
    

    return (
      
        
        <div className="main-wrapper-top-seller">
            <div className="seller-header">
               <p>Top <span style={{marginRight:"10px"}}><a style={{color:"#1162E6"}} onClick={ListShow} >sellers <i  class="fa fa-angle-down" aria-hidden="true"></i>
               <ul id="seller-ul">
                   <li>sellers</li>
                   <li>buyers</li>
               </ul>
               </a></span>
               in <a onClick={ListShow1}  >
               <span style={{marginRight:"10px",color:"#1162E6"}} >day <i  class="fa fa-angle-down" aria-hidden="true">
                   <ul id="seller-ul-one">
                       <li>1 day</li>
                       <li>7 days</li>
                       <li>30 days</li>
                   </ul>
                   </i></span>
               </a>
               </p>
               
            </div>
            <div id="top-col">
             <div>
             {CardValue.map((val)=>(
                   <CollectionCard
                   srno={val.srno}
                   src={val.src}
                   hddr={val.hddr}
                   money={val.money}
                   />
               ))}
             </div>
             <div>
             {CardVal2.map((val)=>(
                   <CollectionCard
                   srno={val.srno}
                   src={val.src}
                   hddr={val.hddr}
                   money={val.money}
                   />
               ))}
             </div>
                <div>
                    {CardVal3.map((val)=>(
                        <CollectionCard
                        srno={val.srno}
                        src={val.src}
                        hddr={val.hddr}
                        money={val.money}
                        />
                    ))}
                </div>
                <div>
                    {CardVal4.map((val)=>(
                        <CollectionCard
                        srno={val.srno}
                        src={val.src}
                        hddr={val.hddr}
                        money={val.money}
                        />
                    ))}
                </div>
                <div>
                    {CardVal5.map((val)=>(
                        <CollectionCard
                        srno={val.srno}
                        src={val.src}
                        hddr={val.hddr}
                        money={val.money}
                        />
                    ))}
                </div>
                <div>
                    {CardVal6.map((val)=>(
                        <CollectionCard
                        srno={val.srno}
                        src={val.src}
                        hddr={val.hddr}
                        money={val.money}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TopSellers;
