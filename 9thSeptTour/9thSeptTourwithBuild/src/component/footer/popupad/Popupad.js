import React,{useState} from 'react'
import './Popupad.css'


const Popupad = () => {
    const [turn , setTurn] = useState(true)
  const [transformUp, setTransformUp] = useState(true)

   const  handlepopup = (()=>{
    setTransformUp(false);
    setTimeout(() => {
      setTransformUp(true);


    }, 20000);


  })  


  return (
    <div>
          { turn && ( 
    <div className="popads">

      <div className="blurForml" style={{transform: transformUp ? 'translateY(-10%)' : 'translateY(200%)' ,transform: transformUp ? 'translateX(-59%)' : 'translateX(200%)' }}>
        <form style={{overflow:'hidden'}}>
          <label style={{overflow:'hidden'}}> 
          <button type="button" style={{fontSize:'250%'  ,fontWeight:'bold', background:'transparent' ,border:'none'  ,float:'top' , display:'flex'}} onClick={() => handlepopup()} >x</button> 
          <img style={{maxWidth:'1600px' , width:'100%'}} src='https://cdn2.vectorstock.com/i/1000x1000/72/86/discount-50-percent-off-advertising-vector-9527286.jpg' />
          </label>  
          
       
           
        </form>

      </div>
    </div>
  )} 
    </div>
  )
}

export default Popupad