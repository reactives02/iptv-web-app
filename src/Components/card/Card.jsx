import React from "react";
import "./card.css";
import { BsPlay } from "react-icons/bs";
import { GrLinkNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";




const Card = ({ handleChannel,data, type,d,index}) => {
  const navigate = useNavigate();

    function handleClick(item) {
      // console.log(item)
      // setquery()
      navigate("/watch",{state:item});
    }
    function activeCard(index) {
      const card = document.getElementById(index);
      console.log(card);
      var elems = document.querySelector(".active");
      if(elems !=null) {
        // elems.classList.remove("active");
        elems.className="cardmain";
      }
      card.className='active';

    }
      
    
   
  return (
    <>
  {
    type === "Home"?

    <div key={index} className="cardmain">
      
      <div className="cardsHoverdiv">
        
          <div onClick={()=>handleClick(data)}>

          
            <GrLinkNext className="icon" />
            <p>Select</p>
            
              </div>
        
      </div>
      <div  className="img-brand">
        
          
            <img src={`/countryFlags/${data.code?.toLowerCase()}.png`} alt="" />
            
              
        
      </div>
      
      <div className="channelTitle">
        
           <p>{data.name}</p> 
        
        
      </div>
    </div>:

    <div key={index} id={index}  className="cardmain">
      
      <div className="cardsHoverdiv">
        
          
              <div  onClick={()=>{handleChannel(index); activeCard(index)}}>

        
            <BsPlay style={{ width: "80px", height: "80px", color: "white" }} />
            
            
            </div>
        
      </div>
      <div  className="img-brand">
        
           <img src={d.tvg.logo} alt="" />
        
      </div>
      
      <div className="channelTitle">
        
          <p>{d.name}</p>
        
        
      </div>
    </div>
  }

            </>
  );
};

export default Card;
