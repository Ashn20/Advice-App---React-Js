import React, { useState } from 'react'
import './Advice.css'

export const AdviceApp = () => {

let [advice, setAdvice] = useState("Please click the button to get Advice")

async function getAdvice(){
  let res=await fetch("https://api.adviceslip.com/advice");
  let data=await res.json();
  setAdvice(data.slip.advice);
}


return (
<div>
      <h3>{advice}</h3>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  )
}
