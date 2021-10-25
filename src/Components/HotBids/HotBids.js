import React from 'react'
import "../HotBids/HotBids.css"
import Carousel from "react-multi-carousel";
import BidCard from './CardBids/BidCard'
const HotBids = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          
        },}
    
    const SData =[
        {
           "src1":"https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xfbeef911dc5821886e1dda71586d90ed28174b7d/avatar/QmRHfRJ9SgrLNiYYY1f4ymLBGLmhDHxXrmxHUkoXLonVAt",
           "src2":"https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x98cb6107a67da3375f16c304aeffe1fcc0b1239f/avatar/QmTCdUSCAgipVudHBUsaYQU2TqWLLSJdF3S4crS8HdRAGe",
           "src3":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMTg0LDM4LDIxNywxKTsgc3Ryb2tlOnJnYmEoMTg0LDM4LDIxNywxKTsgc3Ryb2tlLXdpZHRoOjAuMTU7Jz48cmVjdCAgeD0nMTQnIHk9JzEwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE0JyB5PScxMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNCcgeT0nMTgnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTInIHk9JzEwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE2JyB5PScxMCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMicgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTYnIHk9JzEyJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEyJyB5PScxNCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNicgeT0nMTQnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTInIHk9JzE4JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE2JyB5PScxOCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMCcgeT0nMTAnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTgnIHk9JzEwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEwJyB5PScxMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxOCcgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48L2c+PC9zdmc+",
           "pic":"https://img.rarible.com/prod/image/upload/t_gif_preview/prod-itemImages/0xfbeef911dc5821886e1dda71586d90ed28174b7d:54218/defb951c",
           "heading":"Taxmen",
           "txt1":"",
           "txt1tooltip":"Collection",
           "txt2":"50 ETH",
           "rating":"1/1",
           "value":"6.5",
           "no":"26"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0x60f80121c31a0d46b5279700f9df786054aa5ee5/avatar/QmfNA7QWXzSp5G7qwkR9DxR225AGbtxjtfGDKrX2s9TV2N',
            "src2":'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSczMCcgaGVpZ2h0PSczMCcgc3R5bGU9J2JhY2tncm91bmQtY29sb3I6cmdiYSgyNDYsMjQ2LDI0NiwxKTsnPjxnIHN0eWxlPSdmaWxsOnJnYmEoMjE3LDE2OSwzOCwxKTsgc3Ryb2tlOnJnYmEoMjE3LDE2OSwzOCwxKTsgc3Ryb2tlLXdpZHRoOjAuMTU7Jz48cmVjdCAgeD0nMTQnIHk9JzEwJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE0JyB5PScxMicgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxMicgeT0nMTInIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTYnIHk9JzEyJyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzEyJyB5PScxOCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjxyZWN0ICB4PScxNicgeT0nMTgnIHdpZHRoPScyJyBoZWlnaHQ9JzInLz48cmVjdCAgeD0nMTAnIHk9JzE0JyB3aWR0aD0nMicgaGVpZ2h0PScyJy8+PHJlY3QgIHg9JzE4JyB5PScxNCcgd2lkdGg9JzInIGhlaWdodD0nMicvPjwvZz48L3N2Zz4=',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x6f6ffdeeacddf544c1bb19bd060bb470076286b9/avatar/QmPxyw32GcnvDk2QtTHxiCx4aM2dzrvsXqAE2pkPQkzq3s',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:619902/f01b55c3",
             "heading":"Zombie Pikachu",
             "txt1":"Not for sale ",
             "txt2":"",
             "rating":"1/1",
             "value":"~0.001",
             "no":"33"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/avatar/QmUNbMmMtbzP5ZwpQ7X77cNEqR5DvEmDYqWvw1QQkx7nbE',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x21ff1ac88a4a7c07c7573132f976d05b259632ee/avatar/QmTu8wKdoQuykn9Fghfdwp8Njbx8E15F9exV26CS8thD67',
            "src3":'',
             "pic":"https://img.rarible.com/prod/image/upload/t_gif_preview/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:666251/3237e1ef",
             "heading":"LUCKY_WATCHER",
             "txt1":"from",
             "txt2":"6.5 ETH",
             "rating":"9/490",
             "value":"4.725",
             "no":"1.1k"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0x236672ed575e1e479b8e101aeeb920f32361f6f9/avatar/QmTRSnUSLTkqXrbS96Z6f5cayXC7ou7amJ3oMFHoa5yWMb',
            "src3":'',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x21ff1ac88a4a7c07c7573132f976d05b259632ee/avatar/QmTu8wKdoQuykn9Fghfdwp8Njbx8E15F9exV26CS8thD67',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0x236672ed575e1e479b8e101aeeb920f32361f6f9:1/3a2bcd4e",
             "heading":"BLACK BOX - Series One",
             "txt1":"from",
             "txt2":"2.19 ETH",
             "rating":"5/3K",
             "value":"1.2",
             "no":"339"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/avatar/QmUNbMmMtbzP5ZwpQ7X77cNEqR5DvEmDYqWvw1QQkx7nbE',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x24ce7ae2220eb22bea04f034d63b6ec7396b386e/avatar/QmdpcQ7iZuh9QqvPbpncQVcwadgc9yoPsemuERscu5bw8a',
            "src3":'',
             "pic":"https://img.rarible.com/prod/image/upload/t_gif_preview/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:737188/75fc88f1",
             "heading":"THE ANTIDOTE",
             "txt1":"Auction",
             "txt2":"",
             "rating":"30/30",
             "value":"1",
             "no":"186"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xd07dc4262bcdbf85190c01c996b4c06a461d2430/avatar/QmUNbMmMtbzP5ZwpQ7X77cNEqR5DvEmDYqWvw1QQkx7nbE',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x21ff1ac88a4a7c07c7573132f976d05b259632ee/avatar/QmTu8wKdoQuykn9Fghfdwp8Njbx8E15F9exV26CS8thD67',
            "src3":'',
             "pic":"https://img.rarible.com/prod/image/upload/t_gif_preview/prod-itemImages/0xd07dc4262bcdbf85190c01c996b4c06a461d2430:666251/3237e1ef",
             "heading":"LUCKY_WATCHER",
             "txt1":"from",
             "txt2":"16.69 ETH",
             "rating":"1/10",
             "value":"4.5",
             "no":"305"
        },
        {
            "src1":'',
            "src2":'',
            "src3":'',
             "pic":"",
             "heading":"",
             "txt1":"",
             "txt2":"",
             "rating":"",
             "value":"",
             "no":""
        },
    ]
    return (
        <div className="hot-bids">
            <label id='hot-label' >Hot bids <img id="hot-img" src=" https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png"/> </label>
               <Carousel 
               responsive={responsive}
               >
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
               </Carousel>
         
        </div>
    )
}

export default HotBids
