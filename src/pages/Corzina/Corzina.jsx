import React from 'react'
import { Link } from 'react-router-dom'
import CorzinaCard from '../../common/CorzinaCard/CorzinaCard'
import { useInfoContext } from '../../Context/InfoContext'
import './Corzina.scss'

const Corzina = () => {
  const {products, prodBalance} = useInfoContext()
  return (
    <div className='Corzina'>
      <div className="container">
        <div className="corzina__path">
          <span>Главная</span>
          <span className='path-last'>Корзина</span>
        </div>
        <h1 className='sort__name'>Корзина</h1>
        <div className="corzina__main">
          {products ? 
            <CorzinaCard/>
             : 
          <div className='d-flex w-100 justify-content-center'>Корзина пусто</div>}
        </div>
        <div className="corzina__foot">
          {products ? 
            <Link to={'/corzina/decor'} className="foot__btn">
              Оформить заказ
            </Link> :
            <div></div>
          }
          <span className='foot__price'>{prodBalance}  ₸</span>
        </div>
      </div>
    </div>
  )
}

export default Corzina