import React from 'react'
import Card from '../../common/Card/Card'
import './Section2.scss'

const Section2 = () => {
  return (
    <div className='Section2'>
      <div className="container">
        <h1>
            Акционные <span>товары</span>
        </h1>
        <div className="Section2__cards">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>
    </div>
  )
}

export default Section2