import React from 'react'
import './Section3.scss'

const Section3 = () => {
  return (
    <div className='Section3'>
        <div className="container">
            <h1>
              категории <span>товаров</span>
            </h1>
            <p>
              10 000+ ходовых позиций по спецмальным ценам
            </p>
            <div className="Section3__categories">
              <div className="Section3__category">
                <div className="img"></div>
                <p className='category-name'>
                  Бытовая химия
                </p>
              </div>
              <div className="Section3__category">
                <div className="img"></div>
                <p className='category-name'>
                  Косметика и гигиена
                </p>
              </div>
              <div className="Section3__category">
                <div className="img"></div>
                <p className='category-name'>
                  Товары для дома
                </p>
              </div>
              <div className="Section3__category">
                <div className="img"></div>
                <p className='category-name'>
                  Товары для детей и мам
                </p>
              </div>
              <div className="Section3__category">
                <div className="img"></div>
                <p className='category-name'>
                  Посуда
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Section3