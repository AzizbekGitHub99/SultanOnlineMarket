import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../common/Card/Card'
import './Catalog.scss'

const Catalog = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [collapseIn, setCollapseIn] = useState(false)

    const collap = () => {
        setIsOpen(!isOpen)
        if(isOpen) {
            setCollapseIn("close")
        } else {
            setCollapseIn("open")
        }
    }

    return (
        <div className='Catalog'>
            <div className="container">
                <div className="catalog__path">
                    <span>Главная</span>
                    <span className='path-last'>Косметика и гигиена</span>
                </div>
                <div className="catalog__sort d-flex justify-content-between align-items-center">
                    <span className='sort__name'>
                        Косметика и гигиена
                    </span>
                    <span className='sort__function align-items-center'>
                        <strong>Сортировка: </strong>
                        <select className="form-select border-0" aria-label="Default select example">
                            <option selected>Название</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>                    
                        <div className="switch d-flex">
                            <div className="switch__left">
                                <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 7.5H14V5.5H0V7.5ZM0 12.5H14V10.5H0V12.5ZM0 0.5V2.5H14V0.5H0Z" fill="#3F4E65"/>
                                </svg>
                            </div>
                            <div className="switch__right">
                                <span className='catalog-icon'>
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H5C5.82843 0.5 6.5 1.17157 6.5 2V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V1Z" stroke="#3F4E65"/>
                                    </svg>
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H5C5.82843 0.5 6.5 1.17157 6.5 2V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V1Z" stroke="#3F4E65"/>
                                    </svg>
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H5C5.82843 0.5 6.5 1.17157 6.5 2V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V1Z" stroke="#3F4E65"/>
                                    </svg>
                                    <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.5 1C0.5 0.723858 0.723858 0.5 1 0.5H5C5.82843 0.5 6.5 1.17157 6.5 2V6C6.5 6.27614 6.27614 6.5 6 6.5H1C0.723858 6.5 0.5 6.27614 0.5 6V1Z" stroke="#3F4E65"/>
                                    </svg>

                                </span>
                            </div>
                        </div>                   
                    </span>
                </div>
                <ul className="categories-row">
                    <li className='row__li'>Уход<br/>за телом</li>
                    <li className='row__li'>Уход<br/>за руками</li>
                    <li className='row__li'>Уход<br/>за ногами</li>
                    <li className='row__li'>Уход<br/>за лицом</li>
                    <li className='row__li'>Уход<br/>за волосами</li>
                    <li className='row__li'>Средства<br/>для загара</li>
                    <li className='row__li'>Средства<br/>для бритья</li>
                    <li className='row__li'>Подарочные<br/>наборытелом</li>
                    <li className='row__li'>Гигиеническая<br/>продукция</li>
                    <li className='row__li'>Гигиена<br/>полости рта телом</li>
                    <li className='row__li'>Бумажная<br/>продукция</li>
                </ul>
                <div className="catalog__main">
                    <div className="main__left">
                        <div className="find-setting">
                            <h5>
                                ПОДБОР ПО ПАРАМЕТРАМ
                            </h5>
                            <button onClick={collap} className="setting__collapse">
                                <i className='bx bx-chevron-down'></i>
                            </button>
                            <div className={`setting__collapse-in ${collapseIn}`}>
                                <p>
                                    Цена <span>₸</span>
                                </p>
                                <div className="setting__price">
                                    <span>
                                        0
                                    </span> 
                                    - 
                                    <span>
                                        10 000
                                    </span>
                                </div>
                                <h5>
                                    Производитель
                                </h5>
                                <div className="setting__search">
                                    <input type="text" placeholder='Поиск...' />
                                    <button className="search-btn">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5297 15.5294L12.0992 12.0928L15.5297 15.5294ZM14.0002 7.5C14.0002 9.22391 13.3154 10.8772 12.0964 12.0962C10.8775 13.3152 9.22415 14 7.50024 14C5.77634 14 4.12304 13.3152 2.90405 12.0962C1.68506 10.8772 1.00024 9.22391 1.00024 7.5C1.00024 5.77609 1.68506 4.12279 2.90405 2.90381C4.12304 1.68482 5.77634 1 7.50024 1C9.22415 1 10.8775 1.68482 12.0964 2.90381C13.3154 4.12279 14.0002 5.77609 14.0002 7.5V7.5Z" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="setting__select form-check">
                                    <input className="form-check-input" type="checkbox" value="1" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Grifon
                                    </label>
                                </div>
                                <div className="setting__select form-check">
                                    <input className="form-check-input" type="checkbox" value="2" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Boyscout
                                    </label>
                                </div>
                                <div className="setting__select form-check">
                                    <input className="form-check-input" type="checkbox" value="3" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Paclan
                                    </label>
                                </div>
                                <div className="setting__select form-check">
                                    <input className="form-check-input" type="checkbox" value="4" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Булгари Грин
                                    </label>
                                </div>
                                <h6>
                                    Показать все ▼
                                </h6>
                                <h5>
                                    Бренд
                                </h5>
                                <div className="setting__search">
                                    <input type="text" placeholder='Поиск...' />
                                    <button className="search-btn">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M15.5297 15.5294L12.0992 12.0928L15.5297 15.5294ZM14.0002 7.5C14.0002 9.22391 13.3154 10.8772 12.0964 12.0962C10.8775 13.3152 9.22415 14 7.50024 14C5.77634 14 4.12304 13.3152 2.90405 12.0962C1.68506 10.8772 1.00024 9.22391 1.00024 7.5C1.00024 5.77609 1.68506 4.12279 2.90405 2.90381C4.12304 1.68482 5.77634 1 7.50024 1C9.22415 1 10.8775 1.68482 12.0964 2.90381C13.3154 4.12279 14.0002 5.77609 14.0002 7.5V7.5Z" stroke="white" stroke-width="1.3" stroke-linecap="round"/>
                                        </svg>
                                    </button>
                                </div>
                                <div className="setting__select form-check">
                                    <input className="form-check-input" type="checkbox" value="1" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Nivea
                                    </label>
                                </div>
                                <div className="setting__select form-check">
                                    <input className="form-check-input" type="checkbox" value="2" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Grifon
                                    </label>
                                </div>
                                <div className="setting__select form-check">
                                    <input className="form-check-input" type="checkbox" value="3" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        Домашний сундук
                                    </label>
                                </div>
                                <div className="setting__select form-check">
                                    <input className="form-check-input" type="checkbox" value="4" id="flexCheckDefault"/>
                                    <label className="form-check-label" for="flexCheckDefault">
                                        HELP
                                    </label>
                                </div>
                                <h6>
                                    Показать все ▼
                                </h6>
                                <div className="setting__btns d-flex">
                                    <button className="btns__see">
                                        Показать
                                    </button>
                                    <button className="btns__trash">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12.625 3.25H17.3125C17.5197 3.25 17.7184 3.33231 17.8649 3.47882C18.0114 3.62534 18.0938 3.82405 18.0938 4.03125C18.0938 4.23845 18.0114 4.43716 17.8649 4.58368C17.7184 4.73019 17.5197 4.8125 17.3125 4.8125H16.4484L15.2734 15.4C15.1673 16.3555 14.7125 17.2384 13.9961 17.8795C13.2797 18.5207 12.352 18.8751 11.3906 18.875H7.60938C6.64797 18.8751 5.72029 18.5207 5.00389 17.8795C4.28749 17.2384 3.8327 16.3555 3.72656 15.4L2.55 4.8125H1.6875C1.4803 4.8125 1.28159 4.73019 1.13507 4.58368C0.98856 4.43716 0.90625 4.23845 0.90625 4.03125C0.90625 3.82405 0.98856 3.62534 1.13507 3.47882C1.28159 3.33231 1.4803 3.25 1.6875 3.25H6.375C6.375 2.4212 6.70424 1.62634 7.29029 1.04029C7.87634 0.45424 8.6712 0.125 9.5 0.125C10.3288 0.125 11.1237 0.45424 11.7097 1.04029C12.2958 1.62634 12.625 2.4212 12.625 3.25ZM9.5 1.6875C9.0856 1.6875 8.68817 1.85212 8.39515 2.14515C8.10212 2.43817 7.9375 2.8356 7.9375 3.25H11.0625C11.0625 2.8356 10.8979 2.43817 10.6049 2.14515C10.3118 1.85212 9.9144 1.6875 9.5 1.6875ZM7.15625 7.9375V14.1875C7.15625 14.3947 7.23856 14.5934 7.38507 14.7399C7.53159 14.8864 7.7303 14.9688 7.9375 14.9688C8.1447 14.9688 8.34341 14.8864 8.48993 14.7399C8.63644 14.5934 8.71875 14.3947 8.71875 14.1875V7.9375C8.71875 7.7303 8.63644 7.53159 8.48993 7.38507C8.34341 7.23856 8.1447 7.15625 7.9375 7.15625C7.7303 7.15625 7.53159 7.23856 7.38507 7.38507C7.23856 7.53159 7.15625 7.7303 7.15625 7.9375ZM11.0625 7.15625C10.8553 7.15625 10.6566 7.23856 10.5101 7.38507C10.3636 7.53159 10.2812 7.7303 10.2812 7.9375V14.1875C10.2812 14.3947 10.3636 14.5934 10.5101 14.7399C10.6566 14.8864 10.8553 14.9688 11.0625 14.9688C11.2697 14.9688 11.4684 14.8864 11.6149 14.7399C11.7614 14.5934 11.8438 14.3947 11.8438 14.1875V7.9375C11.8438 7.7303 11.7614 7.53159 11.6149 7.38507C11.4684 7.23856 11.2697 7.15625 11.0625 7.15625Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="categories-col">
                            <h4 className="categories-col-name">Уход за телом</h4>
                            <ul>                            
                                <li>
                                    <Link>
                                        Эпиляция и депиляция
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Средства для ванны и душа
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Скрабы, пилинги и пр.
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Мочалки и губки для тела
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Кремы, лосьоны, масла
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Интимный уход
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Дезодоранты, антиперспиранты
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Гели для душа
                                    </Link>
                                </li>
                            </ul>
                            <h4 className="categories-col-name">Уход за руками</h4>
                            <ul>                            
                                <li>
                                    <Link>
                                        Увлажнение и питание
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Средства для ногтей
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Мыло твердое
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Мыло жидкое
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Крем для рук
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Защита рук
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Жидкость для снятия лака
                                    </Link>
                                </li>
                            </ul>
                            <h4 className="categories-col-name">Уход за ногами</h4>
                            <ul>                            
                                <li>
                                    <Link>
                                        Скрабы, пилинги
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Пилки, ролики
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Крем для ног
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Дезодоранты для ног
                                    </Link>
                                </li>                            
                            </ul>
                            <h4 className="categories-col-name">Уход за лицом</h4>
                            <ul>                            
                                <li>
                                    <Link>
                                        Тональные средства
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Средства для снятия макияжа
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Средства для очищения
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Маски, скрабы, сыворотки
                                    </Link>
                                </li>                            
                                <li>
                                    <Link>
                                        Крем для лица
                                    </Link>
                                </li>                            
                                <li>
                                    <Link>
                                        Крем для век
                                    </Link>
                                </li>                            
                                <li>
                                    <Link>
                                        Жидкость для снятия макияжа
                                    </Link>
                                </li>                            
                                <li>
                                    <Link>
                                        Гигиеническая помада
                                    </Link>
                                </li>                            
                            </ul>
                            <h4 className="categories-col-name">Уход за волосами</h4>
                            <ul>                            
                                <li>
                                    <Link>
                                        Шампуни
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Средства для укладки
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Средства для окрашивания волос
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Маски, сыворотки, масла
                                    </Link>
                                </li>                            
                                <li>
                                    <Link>
                                        Кондиционеры, бальзамы
                                    </Link>
                                </li>                                                  
                            </ul>
                            <h4 className="categories-col-name">Средства для загара</h4>
                            <ul>                            
                                <li>
                                    <Link>
                                        Средства после загара
                                    </Link>
                                </li>                                                                           
                            </ul>
                            <h4 className="categories-col-name">Средства для бритья</h4>
                            <ul>                            
                                <li>
                                    <Link>
                                        Станки и кассеты
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        После бритья
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Для бритья
                                    </Link>
                                </li>                                                                          
                            </ul>
                            <h4 className="categories-col-name">Подарочные наборы</h4>
                            <ul>                            
                                <li>
                                    <Link>
                                        Для мужчин
                                    </Link>
                                </li>
                                <li>
                                    <Link>
                                        Для женщин
                                    </Link>
                                </li>                                                                     
                            </ul>
                            <h4 className="categories-col-name">Бренды</h4>
                            <div className="catalog__brands">
                                <img src="../images/img1.png" alt="img1" />
                                <img src="../images/img2.png" alt="img2" />
                    
                                <img src="../images/img3.png" alt="img3" />
                                <br />
                                <img src="../images/img4.png" alt="img4" />
                                <img src="../images/img5.png" alt="img5" />
                            </div>
                            <h6>
                                Показать все ▼
                            </h6>
                        </div>
                    </div>
                    <div className="main__right">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>

                        <div className="right__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Catalog