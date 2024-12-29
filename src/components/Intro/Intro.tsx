import React from 'react'
import './Intro.css'
import Container from '@mui/material/Container'
const Intro = () => {
  return (
    <Container maxWidth="lg" className="intoduction">
      <h1 className='content'>Host your meeting with world-class amenities. Starting at <span className="price">₹199/-!</span></h1>
    </Container>
  )
}

export default Intro
