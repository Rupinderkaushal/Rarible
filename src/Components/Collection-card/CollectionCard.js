import React from 'react'
import "../Collection-card/CollectionCard.css"
const CollectionCard = ({srno,src,hddr,money}) => {
    return (
        <div className="card-div">
            <div><label id="card-label">{srno}</label></div>
            <div><img id="card-img" src={src}/></div>
            <div>
               <label className="card-text">
               <span id='card-header'>{hddr}</span>
                <span id="card-amount">{money}</span>
               </label>
            </div>
        </div>
    )
}

export default CollectionCard
