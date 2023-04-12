import React, { useState } from 'react'
import './data.scss'


const Data = () => {

  const [selected,setselected] = useState(null);

  const toggle = (i) =>{
    if(selected === i){
     return setselected(null)
    }
    setselected(i)
  }


 
  return (
    <div>
     {data.map((val,i) =>(
      <div className='accordion-content' key={i}>

      <div className="accordion-header" onClick={() =>toggle(i)}>
          <h4>{val.q} </h4> <br />
          <span>{selected === i ? '-' : '+'}</span>
      </div>

      <div className={selected === i ? `accordion-body` : `hide`}>
          <p>{val.a}</p>
      </div>

      </div>
     ))}
    </div>
  )
}

export default Data
const data = [
  {
    id: 1,
    q:"How can joining a gym help me lose weight?",
    a:"A gym provides you with access to various types of equipment and fitness programs designed to help you burn calories and shed unwanted pounds. It also offers a supportive environment where you can get guidance from personal trainers and other members."
  },

  {
    id: 2,
    q:"What are the benefits of strength training at the gym?",
    a:"Strength training at the gym can help you build muscle mass, increase bone density, and boost your metabolism. It can also improve your balance and coordination, reduce your risk of injury, and enhance your overall physical performance."
  },

  {
    id: 3,
    q:"How can going to the gym improve my mental health?",
    a:"Exercise releases endorphins, which are feel-good chemicals that can boost your mood and reduce stress and anxiety. Going to the gym also provides an opportunity to socialize with others, which can help combat feelings of loneliness and isolation."
  },
  {
    id:4,
    q: " Can joining a gym improve my overall health?",
    a: " Yes, joining a gym can improve your overall health in many ways, including reducing your risk of chronic diseases like heart disease and diabetes, improving your sleep quality, and boosting your immune system."
  }


]