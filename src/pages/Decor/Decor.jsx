import React from 'react'
import { Link } from 'react-router-dom'
import { useInfoContext } from '../../Context/InfoContext'
import './Decor.scss'

const Decor = () => {
  const {prodBalance} = useInfoContext()
  return (
    <div className='Decor'>
      <div className="container">
        <div className="decor__path">
          <span>Главная</span>
          <span>Корзина</span>
          <span className='path-last'>Оформление заказа</span>
        </div>
        <h1 className='sort__name'>Оформление заказа</h1>
        <div className="decor__main">
          <div className="main__form">
            <div className="form__left">
              <div className="form__sect">              
                <div className="sect__name d-flex">
                  <div className='sect__num'>1</div>Контактные данные
                </div>
                <div className="sect__body">
                  <label htmlFor="name">Имя*</label>
                  <input id='name' type="text" placeholder='Введите ваше имя' />
                  <label htmlFor="name">Телефон*</label>
                  <input id='name' type="text" placeholder='Введите ваш телефон' />
                  <label htmlFor="email">E-mail*</label>
                  <input id='email' type="text" placeholder='Введите ваш E-mail' />
                  <label htmlFor="org">Название организации</label>
                  <input id='org' type="text" placeholder='Введите название организации' />
                </div>
              </div>
              <div className="form__sect">              
                <div className="sect__name d-flex">
                  <div className='sect__num'>2</div>адрес доставки
                </div>
                <div className="sect__body">
                  <label htmlFor="name">Город</label>
                  <input id='name' type="text" placeholder='Выберите ваш город' />
                  <label htmlFor="name">Адрес</label>
                  <input id='name' type="text" placeholder='Введите адрес доставки' />
                </div>
              </div>
              <button type='button' className="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Подтверждение заказа
              </button>
            </div>
            <div className="form__right">
              <div className="form__sect">              
                <div className="sect__name d-flex">
                  <i className='sect__num bx bxs-wallet'></i>Оплата
                </div>
                <div className="sect__body">
                  <div className="sect__info">
                    Принимаем оплату наличными, по карте <br /> и через расчетный счет.
                  </div>
                </div>
              </div>
              <div className="form__sect">              
                <div className="sect__name d-flex">
                  <i className='sect__num bx bx-send'></i>Доставка
                </div>
                <div className="sect__body">
                  <div className="sect__info">
                    Бесплатная доставка от 10 000 ₸ <br />
                    по области. Наша доставка работает <br /> ежедневно.
                  </div>
                </div>
              </div>
              <div className="form__sect">              
                <div className="sect__name d-flex">
                  <i className='sect__num bx bx-question-mark'></i>возникли вопросы?
                </div>
                <div className="sect__body">
                  <div className="sect__info">
                    Звоните: +7 777 490 00 91 <br />
                    Менеджер Вам ответит на все вопросы.
                  </div>
                </div>
              </div>
              <div className="form__sect">              
                <div className="sect__name d-flex">
                  <div className='sect__num'>3</div>Дополнительно
                </div>
                <div className="sect__body">
                  <label htmlFor="comment">Комментарий</label>
                  <textarea id='comment' type="text" placeholder='Введите ваш комментарий' />
                </div>
              </div>
            </div>
          </div>
          <div className="main__order">
            <h2 className='order__name'>Ваш заказ</h2>
            <div className="order__items">
              <div className="item d-flex">
                <div className="item__img">
                  <img src="../images/product.png" alt="product" />
                </div>
                <div className="item__description">
                  <div className="weight">
                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.303 7.99994C12.7749 7.99994 12.278 7.71869 12.0092 7.26869L9.99986 3.93743L7.99361 7.26869C7.72173 7.72181 7.22486 8.00306 6.69673 8.00306C6.55611 8.00306 6.41548 7.98431 6.28111 7.94369L1.99986 6.71868V12.2812C1.99986 12.7406 2.31236 13.1406 2.75611 13.2499L9.51236 14.9406C9.83111 15.0187 10.1655 15.0187 10.4811 14.9406L17.2436 13.2499C17.6874 13.1374 17.9999 12.7374 17.9999 12.2812V6.71868L13.7186 7.94056C13.5842 7.98119 13.4436 7.99994 13.303 7.99994ZM19.9467 4.49369L18.3374 1.28118C18.2405 1.08743 18.0311 0.974934 17.8155 1.00306L9.99986 1.99993L12.8655 6.75306C12.9842 6.94993 13.2217 7.04368 13.4436 6.98118L19.628 5.21556C19.9374 5.12493 20.0874 4.78118 19.9467 4.49369ZM1.66236 1.28118L0.0529828 4.49369C-0.0907672 4.78118 0.0623578 5.12493 0.368608 5.21243L6.55298 6.97806C6.77486 7.04056 7.01236 6.94681 7.13111 6.74993L9.99986 1.99993L2.18111 1.00306C1.96548 0.978059 1.75923 1.08743 1.66236 1.28118Z" fill="#3F4E65"/>
                    </svg>
                    <span>90 г</span>
                  </div>
                  <h2>
                    AOS средство для мытья <br /> посуды Crystal
                  </h2>
                  <h3>480,76 ₸</h3>
                </div>
              </div>
            </div>
            <div className="order__end d-flex">
              <div className="prod-balance d-flex">
                <span>ИТОГО</span>
                <span>{prodBalance} ₸</span>
              </div>
              <Link className='return-btn' to={'/corzina'}>
                Редактировать заказ
              </Link>
            </div>
          </div>

          <div className="main__btns__sm">
            <div className="up__sm">
              <div className="prod-balance__sm">
                <span>{prodBalance} ₸</span>
              </div>
              <Link className='re__sm' to={'/corzina'}>
                <i className='bx bx-pencil' ></i>
              </Link>
            </div>
            <div className="down__sm">
              <button type='button' className="submit__sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Подтверждение заказа
              </button>
            </div>
          </div>

        </div>
      </div>



      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-btn">
              <button type="button" className="modal-close" data-bs-dismiss="modal"><i className='bx bx-x'></i></button>
            </div>
            <div className="modal-body">
              <div className="modal-icon">
                <i class='bx bx-check-double'></i>
              </div>
              <h1 className="modal-text1">
                Спасибо за заказ
              </h1>
              <p className='modal-text2'>
                Наш менеджер свяжется с вами в ближайшее время
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default Decor