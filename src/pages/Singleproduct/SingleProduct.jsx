import React, { useState } from 'react'
import Card from '../../common/Card/Card'
import { useInfoContext } from '../../Context/InfoContext'
import './SingleProduct.scss'

const SingleProduct = () => {
  const {setProducts ,setProdBalance ,price} = useInfoContext()
  const [count, setCount] = useState(1)
  const plus = () =>{
    setCount(prev => prev + 1)
  }
  const minus = () =>{
    if(count < 2){
      setCount(prev => prev)      
    } else{
      setCount(prev => prev - 1)
    }
  }
  const addCorzina = () => {
    setProducts(prev => prev + count)
    setProdBalance(prev => prev + count * price)
  }
  return (
    <div className='SingleProduct'>
      <div className="container">
        <div className="full-card">
          <div className="full-card__path">
            <span>Главная</span>
            <span>Косметика и гигиена</span>
            <span>Уход за руками</span>
            <span>Мыло твердое</span>
            <span className='path-last'>BioMio BIO-SOAP Экологичное туалетное мыло. Литсея и бергамот, 90 г</span>
          </div>
          <div className="full-card__info">
            <div className="info__left">
              <img src="./images/full-card.png" alt="full-card" />
            </div>
            <div className="info__right">
              <p>
                В наличии
              </p>
              <h2 className="prod-name">
                <span>BioMio BIO-SOAP</span> Экологичное туалетное 
                мыло. Литсея и бергамот   
              </h2>
              <div className="weight">
                <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.303 7.99994C12.7749 7.99994 12.278 7.71869 12.0092 7.26869L9.99986 3.93743L7.99361 7.26869C7.72173 7.72181 7.22486 8.00306 6.69673 8.00306C6.55611 8.00306 6.41548 7.98431 6.28111 7.94369L1.99986 6.71868V12.2812C1.99986 12.7406 2.31236 13.1406 2.75611 13.2499L9.51236 14.9406C9.83111 15.0187 10.1655 15.0187 10.4811 14.9406L17.2436 13.2499C17.6874 13.1374 17.9999 12.7374 17.9999 12.2812V6.71868L13.7186 7.94056C13.5842 7.98119 13.4436 7.99994 13.303 7.99994ZM19.9467 4.49369L18.3374 1.28118C18.2405 1.08743 18.0311 0.974934 17.8155 1.00306L9.99986 1.99993L12.8655 6.75306C12.9842 6.94993 13.2217 7.04368 13.4436 6.98118L19.628 5.21556C19.9374 5.12493 20.0874 4.78118 19.9467 4.49369ZM1.66236 1.28118L0.0529828 4.49369C-0.0907672 4.78118 0.0623578 5.12493 0.368608 5.21243L6.55298 6.97806C6.77486 7.04056 7.01236 6.94681 7.13111 6.74993L9.99986 1.99993L2.18111 1.00306C1.96548 0.978059 1.75923 1.08743 1.66236 1.28118Z" fill="#3F4E65"/>
                </svg>
                <span>90</span>г
              </div>
              <div className="functions">
                <div className="f__top">
                  <div className="ft__price">
                    480,76 ₸
                  </div>
                  <div className="ft__adding">
                    <button type='button'  onClick={minus} className="adding__btn">
                      -
                    </button>
                    <span className='adding__num'>
                      {count}
                    </span>
                    <button type='button' onClick={plus} className="adding__btn">
                      +
                    </button>
                  </div>
                  <button onClick={addCorzina} className='ft__to-corzina'>
                    В КОРЗИНУ
                    <span>
                      <svg width="24" height="17" viewBox="0 0 41 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M40.6514 5.78617C40.3916 5.42327 40.043 5.24182 39.6055 5.24182H11.7559L11 3.27403C10.8086 2.62887 10.5488 2.07779 10.2207 1.6208C9.89258 1.16381 9.54395 0.841232 9.1748 0.65306C8.80566 0.464888 8.48438 0.3372 8.21094 0.269996C7.9375 0.202792 7.66406 0.169189 7.39062 0.169189H1.77148C1.41602 0.169189 1.11523 0.290157 0.869141 0.532093C0.623047 0.774028 0.5 1.08317 0.5 1.45951C0.5 1.67457 0.554688 1.8829 0.664062 2.08451C0.773438 2.28612 0.930664 2.44069 1.13574 2.54822C1.34082 2.65575 1.55273 2.70951 1.77148 2.70951H7.39062C7.5 2.70951 7.60254 2.72295 7.69824 2.74983C7.79395 2.77672 7.92383 2.89096 8.08789 3.09258C8.25195 3.29419 8.38867 3.59661 8.49805 3.99983L14.3809 20.1531C14.4355 20.3144 14.5244 20.4689 14.6475 20.6168C14.7705 20.7646 14.9141 20.8789 15.0781 20.9595C15.2422 21.0402 15.4199 21.0805 15.6113 21.0805H33.3301C33.6035 21.0805 33.8564 20.9998 34.0889 20.8385C34.3213 20.6773 34.4785 20.4756 34.5605 20.2337L40.8359 6.97569C40.9727 6.54558 40.9111 6.14908 40.6514 5.78617ZM32.4277 18.4998H16.6367L12.4531 7.82246H37.7188L32.4277 18.4998ZM30.0625 22.4798C29.1602 22.4798 28.3877 22.7957 27.7451 23.4274C27.1025 24.0591 26.7812 24.8186 26.7812 25.7057C26.7812 26.5928 27.1025 27.3522 27.7451 27.9839C28.3877 28.6156 29.1602 28.9315 30.0625 28.9315C30.9648 28.9315 31.7373 28.6156 32.3799 27.9839C33.0225 27.3522 33.3438 26.5928 33.3438 25.7057C33.3438 24.8186 33.0225 24.0591 32.3799 23.4274C31.7373 22.7957 30.9648 22.4798 30.0625 22.4798ZM18.25 22.4798C17.6484 22.4798 17.0947 22.6277 16.5889 22.9234C16.083 23.2191 15.6865 23.6089 15.3994 24.0927C15.1123 24.5766 14.9688 25.1143 14.9688 25.7057C14.9688 26.5928 15.29 27.3522 15.9326 27.9839C16.5752 28.6156 17.3477 28.9315 18.25 28.9315C19.1523 28.9315 19.9248 28.6156 20.5674 27.9839C21.21 27.3522 21.5312 26.5928 21.5312 25.7057C21.5312 25.4906 21.5107 25.2755 21.4697 25.0605C21.4287 24.8454 21.3672 24.6438 21.2852 24.4557C21.2031 24.2675 21.1006 24.086 20.9775 23.9113C20.8545 23.7366 20.7178 23.5753 20.5674 23.4274C20.417 23.2796 20.2529 23.1452 20.0752 23.0242C19.8975 22.9032 19.7129 22.8024 19.5215 22.7218C19.3301 22.6411 19.125 22.5806 18.9062 22.5403C18.6875 22.5 18.4688 22.4798 18.25 22.4798Z" fill="#FFFFFF"/>
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="f__down">
                  <div className="fd__share">
                    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.00004 13.5C4.87469 13.4974 5.71626 13.1653 6.35704 12.57L12.617 16.147C12.4073 16.9666 12.4998 17.8343 12.8775 18.5913C13.2552 19.3483 13.893 19.9439 14.674 20.2692C15.455 20.5944 16.327 20.6274 17.1304 20.3623C17.9338 20.0971 18.6148 19.5515 19.0488 18.8252C19.4827 18.099 19.6406 17.2408 19.4935 16.4076C19.3464 15.5745 18.9042 14.8222 18.2478 14.2885C17.5914 13.7548 16.7647 13.4753 15.919 13.5013C15.0734 13.5273 14.2655 13.857 13.643 14.43L7.38304 10.853C7.44904 10.603 7.48504 10.344 7.49104 10.085L13.641 6.56996C14.2332 7.10874 14.9927 7.42747 15.792 7.47268C16.5913 7.51789 17.3818 7.28684 18.031 6.81828C18.6802 6.34972 19.1484 5.67217 19.3572 4.89929C19.5661 4.1264 19.5027 3.30522 19.1779 2.5735C18.853 1.84178 18.2864 1.24404 17.5731 0.88056C16.8597 0.517083 16.0431 0.409982 15.2602 0.577226C14.4772 0.744469 13.7756 1.17588 13.2731 1.79909C12.7705 2.42229 12.4976 3.19937 12.5 3.99996C12.504 4.28796 12.543 4.57497 12.617 4.85296L6.93304 8.09997C6.60341 7.59003 6.1468 7.17461 5.60805 6.89454C5.06931 6.61446 4.46697 6.47936 3.86021 6.50251C3.25346 6.52566 2.66316 6.70627 2.14732 7.02658C1.63148 7.34689 1.20785 7.79589 0.918041 8.32946C0.628232 8.86303 0.48222 9.46282 0.494351 10.0699C0.506482 10.677 0.676338 11.2704 0.98723 11.792C1.29812 12.3136 1.73936 12.7453 2.26758 13.0447C2.7958 13.3442 3.39284 13.5011 4.00004 13.5Z" fill="#FFC85E"/>
                    </svg>
                  </div>
                  <div className="fd__info">
                    При покупке от 10 000 ₸ бесплатная <br /> доставка по Кокчетаву и области
                  </div>
                  <button className="fd__price-list">
                    <p>Прайс-лист 
                      <span>
                        <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9583 4.375H8.12492V0.125H3.87492V4.375H1.04159L5.99992 10.0417L10.9583 4.375ZM0.333252 11.4583H11.6666V12.875H0.333252V11.4583Z" fill="#3F4E65"/>
                        </svg>
                      </span>
                    </p>
                  </button>
                </div>
              </div>
              <div className="info">
                <div className="info__main">
                  <ul>
                    <li>Производитель: <strong>BioMio</strong></li>
                    <li>Бренд: <strong>BioMio</strong></li>
                    <li>Артикул: <strong>460404</strong></li>
                    <li>Штрихкод: <strong>4604049097548</strong></li>
                  </ul>
                </div>
                <div className="info__description">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          Описание
                        </button>
                      </h2>
                      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          Характеристики
                        </button>
                      </h2>
                      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                          <ul>
                            <li>Назначение: <strong>BioMio</strong></li>
                            <li>Тип: <strong>BioMio</strong></li>
                            <li>Производитель: <strong>BioMio</strong></li>
                            <li>Бренд: <strong>BioMio</strong></li>
                            <li>Артикул: <strong>460404</strong></li>
                            <li>Штрихкод: <strong>4604049097548</strong></li>
                            <li>Вес: <strong>90</strong> г</li>
                            <li>Объем: <strong>90</strong> г</li>
                            <li>Кол-во в коробке: <strong>90</strong> г</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1>
          Похожие товары <span>товары</span>
        </h1>
        <div className="SingleProduct__cards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        <h1>
          Недавно<br />просмотренные <span>товары</span>
        </h1>
        <div className="SingleProduct__cards">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
      </div>        
    </div>
  )
}

export default SingleProduct