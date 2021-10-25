import React from 'react'
import "../HotBids/HotBids.css"
import Carousel from "react-multi-carousel";
import BidCard from '../HotBids/CardBids/BidCard';
const LiveAuctions = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          
        },}
    
    const SData =[
        
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x2ef8cfb97ecccf7c62f551639fe6db79022d0d8c/avatar/QmTg1o8tpHu3kvUH384QLHEjGCuLJ2Zb7oVho2FhsuZsTs',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x2ef8cfb97ecccf7c62f551639fe6db79022d0d8c/avatar/QmTg1o8tpHu3kvUH384QLHEjGCuLJ2Zb7oVho2FhsuZsTs',
             "pic":"https://img.rarible.com/prod/image/upload/t_gif_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:21246002769332815148105743785163875760590032290720736867783089616151247847467/ca4b5ef5",
             "heading":"Valium66",
             "txt1":"Highest bid",
             "txt2":"",
             "rating":"1/1",
             "value":"~0.001",
             "no":"16"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0xd074b6d066f5513fc545fc111ba123e958e58b60/avatar/QmSRez8DzmxecpJgBzDK8cbL1CLgwYvJYqowQn5nsW1WWs',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0xd074b6d066f5513fc545fc111ba123e958e58b60/avatar/QmSRez8DzmxecpJgBzDK8cbL1CLgwYvJYqowQn5nsW1WWs',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:94287288501180495480430358608020171356288371097289608735097303223810054422540/c310b180",
             "heading":"The Rusty Robots - Arsch Karte",
             "txt1":"Highest bid",
             "txt2":"",
             "rating":"1/1",
             "value":"0.01",
             "no":"29"
        },
        {
            "src1":"https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0x39f61d322877c063d0f831f252b8b45ef54fd486/avatar/QmZgT68gN34YvThdYKMgkaprYxXjgX3KxqhcAEMtJKmuY5",
            "src2":"https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0x39f61d322877c063d0f831f252b8b45ef54fd486/avatar/QmZgT68gN34YvThdYKMgkaprYxXjgX3KxqhcAEMtJKmuY5",
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xf6793da657495ffeff9ee6350824910abc21356c/avatar/Qmcy6LyYhHQoCpRneFQgidvWrThzojjJds29GbP7zPdNZx',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0x39f61d322877c063d0f831f252b8b45ef54fd486:19/49609348",
             "heading":"Daisy Garden - ArtificialPaintings A14 by AI",
             "txt1":"Highest bid",
             "txt2":"",
             "rating":"1/1",
             "value":"0.158",
             "no":"88"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0x60f80121c31a0d46b5279700f9df786054aa5ee5/avatar/QmfNA7QWXzSp5G7qwkR9DxR225AGbtxjtfGDKrX2s9TV2N',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x19bae24e3ac4764c834ae229d8e38ff18cbbf215/avatar/QmZcRGNoWbDFp4kK4Yi2yPHk1VBbBzxJMbgWt2SoFKmKu4',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x19bae24e3ac4764c834ae229d8e38ff18cbbf215/avatar/QmZcRGNoWbDFp4kK4Yi2yPHk1VBbBzxJMbgWt2SoFKmKu4',
             "pic":"https://img.rarible.com/prod/image/upload/t_gif_preview/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1134412/2f7fe619",
             "heading":"ArtificialPaintings R0031 by AI 4K",
             "txt1":"Highest bid",
             "txt2":"",
             "rating":"1/1",
             "value":"0.265",
             "no":"230"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0xb74d8477f9724d974af87436ac0371d3899c6415/avatar/QmPJbsJo2hFFvjcp4LgEz7FHpXPwVScU32dRgFATZpe4qP',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x5d9d68f2698b8e0aa6e29777f365533849a6dd94/avatar/QmYusHwa4myJQ2wiji8xkCnv6hDBHxKzRRwsAkhTbhRQcZ',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0x5d9d68f2698b8e0aa6e29777f365533849a6dd94/avatar/QmYusHwa4myJQ2wiji8xkCnv6hDBHxKzRRwsAkhTbhRQcZ',
             "pic":"https://img.rarible.com/prod/image/upload/t_preview/prod-itemImages/0xf6793da657495ffeff9ee6350824910abc21356c:77666465730367201104070144389128564760121680709925244570425811228176276258840/c1061d52",
             "heading":"Gorillionares Club",
             "txt1":"Highest bid",
             "txt2":"",
             "rating":"1/1",
             "value":"0.122",
             "no":"88"
        },
        {
            "src1":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-collections/0x60f80121c31a0d46b5279700f9df786054aa5ee5/avatar/QmfNA7QWXzSp5G7qwkR9DxR225AGbtxjtfGDKrX2s9TV2N',
            "src2":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0xcdbdc56a87d31a6197ca05b2124fc0a62827c1e7/avatar/QmVfQCWzNGtk3R9ohF2yeqsk8y2EFFSC2S7Ss34juHYbpY',
            "src3":'https://img.rarible.com/prod/image/upload/t_avatar_preview/prod-users/0xcdbdc56a87d31a6197ca05b2124fc0a62827c1e7/avatar/QmVfQCWzNGtk3R9ohF2yeqsk8y2EFFSC2S7Ss34juHYbpY',
             "pic":"https://img.rarible.com/prod/image/upload/t_gif_preview/prod-itemImages/0x60f80121c31a0d46b5279700f9df786054aa5ee5:1374603/d59feaed",
             "heading":"DEATH SKULL#3",
             "txt1":"Highest bid",
             "txt2":"",
             "rating":"1/1",
             "value":"0.005",
             "no":"26"
        },
        {
            "src1":'',
            "src2":'',
            "src3":'',
             "pic":"",
             "heading":"",
             "txt1":"Highest bid",
             "txt2":"",
             "rating":"1/1",
             "value":"",
             "no":""
        },
        {
            "src1":'',
            "src2":'',
            "src3":'',
             "pic":"",
             "heading":"",
             "txt1":"Highest bid",
             "txt2":"",
             "rating":"1/1",
             "value":"",
             "no":""
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
            <label style={{color:'black',fontSize:"28px"}} id='hot-label' >Live auctions <img id="hot-img" src=" https://cdn.jsdelivr.net/npm/emoji-datasource-apple@6.0.1/img/apple/64/1f525.png"/> </label>
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

export default LiveAuctions
