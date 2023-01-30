import {React, useState} from 'react'
import "./Project.css"
function Project() {
    const [items, setitems] = useState([
        {
            id : 1 , title : "BrickBox : A UI Framework "  , link : "brickboxe.netlify.app/",
        },
        {
            title : "Sukoon : A application to give you peace " , link : "https://sukooon.netlify.app/"
        },
        {
            title : "HackScript : A Project Store" , link : "https://hackscript.netlify.app/"
        },
        {
            title : "HackStore :  a online Store" , link : "https://hackstores.netlify.app/"
        },
        {
            title : "MovieFixers : A movie Guide" , link : "https://moviefixers.netlify.app/"
        }

    ])



  return (
    <>
    <div className="pcontainer">
        <div className="box1">
            <h1>Projects</h1>
        </div>
        <div className="box2">
         <img src='sqrl.png'/>
        </div>
        </div>

        <div className="projects">
            <div className="maincard">
            {items.map((data,index)=>{
      return(
        <>
        <div className="cards">
            <div className="upper"></div>
            <h1>{data.title}</h1>
            <a href={data.link}>View Project</a>
        </div>
        </>
      )
    })}



            </div>
        </div>
   
    </>
  )
}

export default Project