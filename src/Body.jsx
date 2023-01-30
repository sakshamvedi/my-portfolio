import {React, useState,useEffect, useRef} from 'react'
import "./Body.css";
import Game from './Game';
import { Link } from 'react-router-dom';
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
  
   <div className="upper-bar">
   <p>Home</p>
   <Link to={"/projects"} >
   <p>Projects </p>
   </Link>
   <h1>Vishu</h1>
   <div className="bar">
   <a href="mailto:sakshamvedi@gmail.com">
   <p>Connect With Me </p>
   </a>
   <a href='https://www.linkedin.com/in/sakshamvedi/' target={"_blank"}>
   <p>Linked In</p>
   </a>
   </div>

   </div>
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
<p>Scroll</p>
   <div className="line"></div>

    <h2><b>A</b>bout <b>M</b>e</h2>
    <div className="main-box">
    <div className="box1">
<p>I am a <b>Chameleon like Developer</b> .....</p>
<hr></hr>
<p>
    <ul>
<li><b>Adaptability</b> to new technologies and programming languages</li>
<li><b>Flexibility</b> to work on different projects and with different teams</li>
<li><b>Versatility</b> to handle different roles and responsibilities within the development process</li>
<li>Strong<b> problem-solving</b> skills</li>
<li>Attention to detail in identifying and <b>fixing tasty bugs</b> and errors in the code</li>

    </ul>
</p>

</div>
<div className="box2">
    <img src='chamelon.png' height={"500px"}/>
</div>
</div>

</div>

<div className="languages">
<p>Scroll</p>
   <div className="line"></div>
    <h2>Skills </h2>
<div className="frontend">
<b> Front End Developer </b>  with React, JQuery , Javascript, SASS, and a tonn of  extensions 
</div>
   <div className="solar">
    <img src="solar-front.gif" alt="" />
   </div>
   <div className="frontend">
<b>Better Code Quality </b>  with SCSS , JSX , DRY-Concepts &  Good File Structure .
</div>
<br></br>
<br></br>
<br></br>
<div className="frontend">
<b>Probelm Solving Skills </b> Proven ability to apply critical thinking and problem-solving skills to develop efficient and effective solutions in any Programming language.
</div>
<br></br>
<br></br>
<br></br>
<div className="frontend">
<b>Computer Fundamentals </b> I have a good grasp in computer fundamentals like Networks , API'S , Database Designs , Operating Systems & a lot more so , I Easily communicate with others developer in their language <b>  Like  I send you schema make sure the form ready till evening ..</b>
</div>


</div>

<div className="game">
<p>Scroll</p>
   <div className="line"></div>
    <h2>Bored !! Let's Play a game ....</h2>
    <div className="containers">
    <Game/>
    <div className="box2">
        <p>"BAAS or Custom DB ....? " </p>
        <img src='panda.png'/>
    </div>
    </div>
</div>


<div className="experience">
<p>Scroll</p>
   <div className="line"></div>
    <h2>Experience</h2>
    <div className="box">
        <div className="card1">
           
            <h3>Front End Intern in <b>TechChefz</b> </h3>
            <h2>(Dec - Current)</h2>
            <ul>
                <li> Work on AEM (Adobe Experience Manager)</li>
                <li> Make several components like cards,badge,carousals etc </li>
                <li> Debugged Codes of Different People</li>
                <li>Add functaionality using Jquery and JS </li>
            </ul>
        </div>
        <div className="card1">
           
           <h3>Project Lead in <b>Deepotsav App</b> </h3>
           <h2>(Sep - Oct)</h2>
           <ul>
              <li>Lead a team of 6 people to create an android application deepotsav under Governer of U.P.</li>
              <li>Write neat and clean code for creating home screen of this application in react js & Create a chat section for this application to send and recieve chat (only for authorized users)
</li>
              <li>Worked on agile methodology</li>
           </ul>
       </div>
       <div className="card1">
           
           <h3>Co-Founder <b>Hackscript</b> </h3>
           <h2>(Nov - Current)</h2>
           <ul>
              <li>Made a website where people who want to learn in groups can join </li>
              <li>Made this with the help of React JS  & BaaS</li>
              <li> Successfully led 20+ Hackathon in hackscript</li>
              <li>Organize upto 10+ SDE speakers for mentoring our participants</li>
             
           </ul>
       </div>
       <div className="card1">
           
           <h3>Worked as  <b>D.S.A. Teacher </b> </h3>
           <h2>(Part time)</h2>
           <ul>
              <li>Teach upto 50+ Students DSA and frontend </li>
              <li>Got best appreciation as cool and patient teacher </li>
              <li> Successfully explain difficult algorithm with animation </li>
             
             
           </ul>
       </div>
    </div>
</div>

<div className="search">
<p>Scroll</p>
   <div className="line"></div>
    <h2>Find Me ... </h2>
    <img src='https://static.vecteezy.com/system/resources/previews/010/353/285/original/colourful-google-logo-on-white-background-free-vector.jpg'/>
    
    <input value={"Saksham Vedi"}/>
    <a href='https://www.google.com/search?client=firefox-b-d&q=saksham+vedi' target={"_blank"}>Search</a>
</div>

<div className="footer">
    <p>This Web-Page is solely created by Saksham Vedi</p>
</div>
   </>
  )
}

export default Body