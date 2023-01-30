import React from 'react'
import './Game.css'
function Card({props}) {
  return (
    <div className="card">
        <img src  = {props.img}/>
    </div>
  )
}

export default Card;