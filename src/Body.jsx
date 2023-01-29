import {React, useState,useEffect, useRef} from 'react'
import "./Body.css";
function Body() {

const [pupil, setPupilStyle] = useState({});
   const eye = useRef("");
   const reye = useRef(" ");
   
useEffect(() => {
eye.current.style.left = "20px";
document.onmousemove =   function changepupil(e){
    var x = e.clientX*100 / window.innerWidth + "%";
    var y = e.clientY*100 /window.innerWidth + "%";
 
    eye.current.style.left = x;
    eye.current.style.top = y;
    eye.current.style.transform = "translate(-"+x+", -"+y+")";
    reye.current.style.left = x;
    reye.current.style.top = y;
    reye.current.style.transform = "translate(-"+x+", -"+y+")";
}
}, [onmousemove])



  return (
   <>
  
   <div className="upper-bar"></div>
<div className="mid-bar">
<div className="box1">
    <h1>
        Hey !! my name is <b>Saksham</b>
    </h1>
   
</div>
<div className="box2">
    <div className="eye">
    <div className='pupil' style={pupil}  ref = {reye}/>
    </div>
    <div className="eye2">
    <div className='pupil2' style={pupil}  ref = {eye}/>
    </div>
   <img src='dog.png' height = {"400px"} />
</div>

</div>

<div className="about-bar">
    <h2><b>A</b>bout <b>M</b>e</h2>
</div>

   </>
  )
}

export default Body