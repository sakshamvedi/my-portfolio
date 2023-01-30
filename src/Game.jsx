import {React,useRef,useState} from 'react'
import './Game.css';
import Card from './Card';
function Game() {
    const [items, setitems] = useState([
        {
            id : 1 , img : "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png"  , stats : "",
        },
        {
            id : 1 , img : "https://miro.medium.com/max/512/1*doAg1_fMQKWFoub-6gwUiQ.png"  , stats : "",
        }
        ,
        {
            id : 2 , img : "https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png"  , stats : "",
        },
        {
            id : 2 , img : "https://miro.medium.com/max/300/1*R4c8lHBHuH5qyqOtZb3h-w.png"  , stats : "",
        },
        {
            id : 3, img : "https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG"  , stats : "",
        },
        {
            id : 3 , img : "https://media.trustradius.com/product-logos/h3/JA/T1A83W5H538P.PNG"  , stats : "",
        }

    ].sort(()=>Math.random()-0.5))
  
    const show = useRef("");
    const [score, setscore] = useState(-1);
    // const [value, setvalue] = useState(0);
const [oldidx, setoldidx] = useState(-1);
const [color, setcolor] = useState(-1);
    function checkstatus(id , idx)
    {
        
      if(score === -1)
      {

        setscore(id);
        items[idx].stats = "active"; 
          setitems([...items] )
          setoldidx(idx);
      }
      else{
      
        items[idx].stats = "active";
        setitems([...items])
        if(score === id)
        {
            
           setscore(-1);
           items[idx].stats = "right"; 
           items[oldidx].stats = "right"; 
           setitems([...items] )
        }
        else if(score != id){
            setscore(-1);
            items[idx].stats = "wrong"; 
            items[oldidx].stats = "wrong"; 
            setcolor(-10);
        }
      }
     
    
       
        
      
    }

  return (
    <>
    <div className="container">
    {items.map((data,index)=>{
      return(
        <>
        <div className= {"card " + data.stats } onClick={()=>checkstatus(data.id , index)}>
        <img src  = {data.img}  />
    
    </div>
        </>
      )
    })}
    </div>
    
    </>
  )
}

export default Game