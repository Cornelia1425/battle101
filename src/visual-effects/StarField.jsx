// this is a special component used to render the stars in the background
import React, { useState } from 'react'
import Star from './Star'

const randomPos = extraBufferX => {
  const leftBuffer = extraBufferX ? 110 : 10
  const posX = `${Math.floor(Math.random() * 80) + leftBuffer}vw`
  const posY = `${Math.floor(Math.random() * 80) + 10}vh`
  return { posX, posY }
}

const generateStarField = () => {
  const fieldArr = []
  for (let i = 0; i < 10; i++) {
    fieldArr.push(randomPos(false))
  }
  for (let i = 0; i < 10; i++) {
    fieldArr.push(randomPos(true))
  }
  return fieldArr
}

function StarField(props) {

  const [stars, setStars] = useState(generateStarField())

  const mappedStars = stars.map((star, i) => <Star key={i} posX={star.posX} posY={star.posY} />)

  return (
    <>
      {mappedStars}
    </>
  )
}

export default StarField
