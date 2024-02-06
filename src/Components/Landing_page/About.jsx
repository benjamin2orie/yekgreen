

import React from 'react'
import Breakfast from '../../Components/Image/Breakfast.jpg';

const About = () => {
  return (
    <div>
      <img src={ Breakfast} alt='breakfast dish menu'/>
      <h3 style={{ color: '#000', fontSize: '30px', textTransform: 'capitalize'}}>Welcome to about page</h3>
    </div>
  )
}

export default About;
