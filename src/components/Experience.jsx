import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/components/Experience.scss"
import Example from "../assets/images/example.jpeg"

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    }
    return (
      <section className="experience">
        <div className="experience__container">
          <h2 className="experience__title">Nuestra experiencia</h2>
          <Slider {...settings}>
            <article className="experience__article">
              <div className="experience__item">
                <span className="experience__data">
                  <picture className="experience__image-holder">
                    <img
                      src={Example}
                      alt="Example"
                      className="experience__image"
                    />
                  </picture>
                  <p className="experience__text">
                    Muchas gracias por haber comprendido el proceso y ayudarnos
                    a que Hubspot sea funcional, es una herramienta que
                    permitirá tener mejor control de nuestra información y
                    actividades.
                  </p>
                </span>
                <p className="experience__text experience__text--bold">
                  Luis Noya | Rentokil
                </p>
                <button className="experience__button">Leer caso</button>
              </div>
            </article>
            <article className="experience__article">
              <div className="experience__item">
                <span className="experience__data">
                  <picture className="experience__image-holder">
                    <img
                      src={Example}
                      alt="Example"
                      className="experience__image"
                    />
                  </picture>
                  <p className="experience__text">
                    Muchas gracias por haber comprendido el proceso y ayudarnos
                    a que Hubspot sea funcional, es una herramienta que
                    permitirá tener mejor control de nuestra información y
                    actividades.
                  </p>
                </span>
                <p className="experience__text experience__text--bold">
                  Luis Noya | Rentokil
                </p>
                <button className="experience__button">Leer caso</button>
              </div>
            </article>
            <article className="experience__article">
              <div className="experience__item">
                <span className="experience__data">
                  <picture className="experience__image-holder">
                    <img
                      src={Example}
                      alt="Example"
                      className="experience__image"
                    />
                  </picture>
                  <p className="experience__text">
                    Muchas gracias por haber comprendido el proceso y ayudarnos
                    a que Hubspot sea funcional, es una herramienta que
                    permitirá tener mejor control de nuestra información y
                    actividades.
                  </p>
                </span>
                <p className="experience__text experience__text--bold">
                  Luis Noya | Rentokil
                </p>
                <button className="experience__button">Leer caso</button>
              </div>
            </article>
          </Slider>
        </div>
      </section>
      //   <div>
      //     <h2> Single Item</h2>
      //     <Slider {...settings}>
      //       <div>
      //         <h3>1</h3>
      //       </div>
      //       <div>
      //         <h3>2</h3>
      //       </div>
      //       <div>
      //         <h3>3</h3>
      //       </div>
      //       <div>
      //         <h3>4</h3>
      //       </div>
      //       <div>
      //         <h3>5</h3>
      //       </div>
      //       <div>
      //         <h3>6</h3>
      //       </div>
      //     </Slider>
      //   </div>
    )
  }
}
