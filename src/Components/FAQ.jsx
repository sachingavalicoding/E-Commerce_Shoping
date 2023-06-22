import { useState } from 'react';
import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';
const FAQ = (props) => {

    const[isAnsShow,setIsAnsShow] = useState(false);
  return (
    <article className='faq' onClick={ () => setIsAnsShow(prev =>!prev)}>
      <div> 
      <h4>{props.question} </h4> 
       <button className='faq__icon'>
          {
            isAnsShow ? <AiOutlineMinus /> : <AiOutlinePlus />
          }
         
       </button>
      </div>
      {
        isAnsShow &&
      <p>
        {props.answer}
      </p>
      }

    </article>
  )
}

export default FAQ
