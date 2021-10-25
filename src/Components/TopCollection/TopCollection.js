import { Button } from 'antd';
import React from 'react';
import CollectionCard from '../Collection-card/CollectionCard';
import "../TopCollection/TopCollection.css"

const TopCollection = () => {
    const CardValue = [
        {
            "srno":"1",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x8a90cab2b38dba80c64b7734e58ee1db38b8992e/avatar/QmVqUTEU7NCjGBYzswoeb5vK6HoQ12YJhM1k3QNYDzmGty",
            "hddr":"Doodles",
            "money":"$6,818,513"
        },
        {
            "srno":"2",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/avatar/QmfNrXe67J4t1EvXLxPhxTavQCLryurWFj1DDRKkjNQqit",
            "hddr":"BoredApeYachtClub",
            "money":"$6,007,134"
        },
        {
            "srno":"3",
            "src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoOTcsMjE3LDM4LDEpOyBzdHJva2U6cmdiYSg5NywyMTcsMzgsMSk7IHN0cm9rZS13aWR0aDowLjI0Oyc+PHJlY3QgIHg9JzIyJyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMzAnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTQnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzMwJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE0JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PSczMCcgeT0nMzAnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48L2c+PC9zdmc+",
            "hddr":"ALPACADABRAZ",
            "money":"$3,740,686"
        },
    ]
  const CardVal2 =[
              {
            "srno":"4",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83/avatar/QmSjBZQd49nPgRgdipheNwhhUcyAvjeVefcL1GYTeSdpKn",
            "hddr":"KaijuKingz",
            "money":"$3,424,327"
        },
        {
            "srno":"5",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x4cd0ea8b1bdb5ab9249d96ccf3d8a0d3ada2bc76/avatar/QmaSsuPYLm4dmMg8Rd7HpqmSu5CoL7wNagJirm1gWHoknm",
            "hddr":"Boonji Project",
            "money":"$2,202,764"
        },
        {
            "srno":"6",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6/avatar/QmPUDbRb14E25r8SsdNjwLpNhEvKnCuQpaAZdZrKNnexp9",
            "hddr":"Cryptoadz",
            "money":"$1,798,619"
        },
  ]
      const CardVal3=[
          {
            "srno":"7",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x57a204aa1042f6e66dd7730813f4024114d74f37/avatar/Qmcb9JzbUwPDdE6WjYxEMcheCd53mtCusmMzYQDR7oeZsu",
            "hddr":"CyberKongz",
            "money":"$1,620,004"
        },
        {
            "srno":"8",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x1a92f7381b9f03921564a437210bb9396471050c/avatar/QmbBKhfy9DSKEGA9tjjfrN45a4GYBAmYcUT3iq6qLSEbDD",
            "hddr":"Cool Cats",
            "money":"$1,603,019"
        },
        {
            "srno":"9",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270/avatar/QmcJMTboitFVH7TxZAxpNjhnBfREHLtw2ow8cuAoeV7yxr",
            "hddr":"Art Blocks Factory",
            "money":"$1,541,685"
        },
      ]
       const CardVal4 =[
             {
            "srno":"10",
            "src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTY2LDIxNywzOCwxKTsgc3Ryb2tlOnJnYmEoMTY2LDIxNywzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMjQ7Jz48cmVjdCAgeD0nMjInIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PScxOCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMzAnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzE0JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScyMicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzE4JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PC9nPjwvc3ZnPg==",
            "hddr":"Women and Weapons",
            "money":"$1,365,233"
        },
        {
            "srno":"11",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xf62c6a8e7bcdc96cda11bd765b40afa9ffc19ab9/avatar/QmWSPqNa4CRo4bh16GBuNMMQqSaK43AFptDtKZ2Gt9h2NJ",
            "hddr":"HeadDAO",
            "money":"$1,275,937"
        },
        {
            "srno":"12",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x60e4d786628fea6478f785a6d7e704777c86a7c6/avatar/QmaoafyjBy97NKEPZzAD3FK8RcwCJHb263dDJbhCaXPWpo",
            "hddr":"MutantApeYachtClub",
            "money":"$1,243,972"
        },
       ]
       const CardVal5 =[
              {
            "srno":"13",
            "src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0OCcgaGVpZ2h0PSc0OCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMzgsOTMsMjE3LDEpOyBzdHJva2U6cmdiYSgzOCw5MywyMTcsMSk7IHN0cm9rZS13aWR0aDowLjI0Oyc+PHJlY3QgIHg9JzIyJyB5PScxNCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyMicgeT0nMTgnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjInIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzIyJyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxOCcgeT0nMjInIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMjYnIHk9JzIyJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzE4JyB5PScyNicgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScyNicgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMTgnIHk9JzMwJyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PHJlY3QgIHg9JzI2JyB5PSczMCcgd2lkdGg9JzQnIGhlaWdodD0nNCcvPjxyZWN0ICB4PScxNCcgeT0nMjYnIHdpZHRoPSc0JyBoZWlnaHQ9JzQnLz48cmVjdCAgeD0nMzAnIHk9JzI2JyB3aWR0aD0nNCcgaGVpZ2h0PSc0Jy8+PC9nPjwvc3ZnPg==",
            "hddr":"SUN SIGNALS",
            "money":"$1,209,607"
        },
        {
            "srno":"14",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0x5df340b5d1618c543ac81837da1c2d2b17b3b5d8/avatar/QmTbotUB7znkrS7GTT3fYousTJQryNEB8ka7k6P7yDoo1t",
            "hddr":"Party Ape Billionaire Club",
            "money":"$1,129,759"
        },
        {
            "srno":"15",
            "src":"https://img.rarible.com/prod/image/upload/t_avatar_big/prod-collections/0xf7143ba42d40eaeb49b88dac0067e54af042e963/avatar/QmZPJijCq3DrYbuLC4jTAtPVtbnHBkoGBXy3PC4L7wqobS",
            "hddr":"Metasaurs",
            "money":"$1,104,623"
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
   
    const CLikr =()=>{
        const drop = document.querySelector('#collected-dropdown')
        
            if(!open){
                drop.style.display='block';
            }
            else{
                drop.style.display="none"
            }
        
        open = !open;

    }
    

    return (
      
        
        <div className="main-wrapper-top-collection">
            <div className="top-collection-header">
                <div className="collection-dropdown">
                 <p id="collection-text">Top collections in 
                     <a style={{marginLeft:'5px'}} onClick={CLikr} >
                     <span style={{color:"#1162E6"}}>1day</span><span><i style={{marginLeft:"5px",fontSize:"15px",color:"#1162E6"}} class="fa fa-angle-down" aria-hidden="true"></i></span>
                     </a>
                     <ul id="collected-dropdown">
                         <li >1 day</li>
                         <li>7 days</li>
                         <li>30 days</li>
                     </ul>
                      </p>
                </div>
                <div >
                    <Button className="collection-button"><label id="btn-text">See all</label></Button>
                </div>
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

export default TopCollection;
