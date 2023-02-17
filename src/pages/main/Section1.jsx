import React from 'react'
import { Link } from 'react-router-dom'
import './Section1.scss'

const Section1 = () => {
  return (
    <div className='Section1'>
        <div className="opacity"></div>
        <div className="container">
            <div className="left">
                <h1>
                    Бытовая химия, косметика и хозтовары
                </h1>
                <h2>
                    оптом по кокчетаву и области
                </h2>
                <Link to={'./catalog'} className="to-catalog-btn">
                    В КАТАЛОГ
                </Link>
                <div className="btns">
                    <div>
                        <button>
                            +
                        </button>
                        <h3>
                            Только самые <br />выгодные предложения
                        </h3>
                    </div>
                    <div>
                        <button>+</button>
                        <h3>
                            Бесплатная доставка <br/>по <span>Кокчетаву от 10 тыс ₸</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>        
    </div>
  )
}

export default Section1