import React from 'react'

function Card(props) {
  return (
    <article className= {` card  ${props.className} `} >
      {props.children}
    </article>
  )
}

export default Card
