import React from 'react'
import './Section4.scss'

const Section4 = () => {
  return (
    <div className='Section4'>
        <div className="container">
            <div className="carousel">
              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-bg d-block w-100">
                      <img src="./images/young-housewife-.png" alt="..."/>
                    </div> 
                    <div className="carousel-caption d-none d-md-block">
                      <p>Акция действует до 04/09/22</p>
                      <h1><span>Название</span> Акции</h1>
                      <h2>
                        Условия акции в пару строк, Условия <br/> акции
                        в пару строк, Условия акции в пару строк
                      </h2>
                      <button className="carousel__btn">ПРИНЯТЬ УЧАСТИЕ</button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-bg d-block w-100">
                      <img src="./images/young-housewife-.png" alt="..."/>
                    </div>                    
                    <div className="carousel-caption d-none d-md-block">
                      <p>Акция действует до 04/09/22</p>
                      <h1><span>Название</span> Акции</h1>
                      <h2>
                        Условия акции в пару строк, Условия <br/> акции
                        в пару строк, Условия акции в пару строк
                      </h2>
                      <button className="carousel__btn">ПРИНЯТЬ УЧАСТИЕ</button>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-bg d-block w-100">
                      <img src="./images/young-housewife-.png" alt="..."/>
                    </div> 
                    <div className="carousel-caption d-none d-md-block">
                      <p>Акция действует до 04/09/22</p>
                      <h1><span>Название</span> Акции</h1>
                      <h2>
                        Условия акции в пару строк, Условия <br/> акции
                        в пару строк, Условия акции в пару строк
                      </h2>
                      <button className="carousel__btn">ПРИНЯТЬ УЧАСТИЕ</button>
                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Section4