import React from "react"
import { Link } from "gatsby"
import "../styles/pages/Google-Ads.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/seo.js"
import FacebookImage from "../assets/images/facebook-page.png"
import FacebookAds1 from "../assets/images/facebookAds1.png"
import FacebookAds2 from "../assets/images/facebookAds2.png"
import FacebookAds3 from "../assets/images/facebookAds3.png"
import FacebookAds4 from "../assets/images/facebookAds4.png"
import FacebookAds5 from "../assets/images/facebookAds5.png"
import FacebookAds6 from "../assets/images/facebookAds6.png"

export default function Facebook() {
  return (
    <Layout>
      <Seo title="Facebook" />
      <section className="ads__hero">
        <div className="ads__hero-container">
          <div className="ads__hero-grid">
            <div className="ads__hero-box">
              <h1 className="ads__hero-title">
                Facebook <br /> & Instagram
              </h1>
              <p className="ads__hero-text">
                Generamos campañas en la red de búsqueda más grande del mundo.
                Este tipo de anuncios son muy efectivos para productos o
                servicios que son buscados recurrentemente por las personas con
                una intención transaccional. Empresas de servicios B2B, venta de
                productos especializados, universidades y algunos otros giros
                son ideales para este tipo de campañas
              </p>
              <div className="ads__hero-actions">
                <Link
                  to="/asesoria"
                  className="ads__hero-button ads__hero-button--green"
                >
                  Solicita una asesoría
                </Link>
              </div>
            </div>
            <div className="ads__hero-box ads__hero-box--image">
              <img src={FacebookImage} alt="Hero" className="ads__hero-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="ads__bullets">
        <div className="ads__bullets-container">
          <article className="ads__bullets-item">
            <img
              src={FacebookAds1}
              alt="Pauta"
              className="ads__bullets-image"
            />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Anuncios stories</h4>
              <p className="ads__bullets-text">
                Anuncios en stories de instagram y facebook que ayudan a
                complementar el contenido del feed
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img
              src={FacebookAds2}
              alt="Pauta"
              className="ads__bullets-image"
            />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Anuncios con foto</h4>
              <p className="ads__bullets-text">
                Anuncio basados en inserción de fotos en el feed de un público
                específico. Ideales para mostrar quién es tu marca de una manera
                creativa
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img
              src={FacebookAds3}
              alt="Pauta"
              className="ads__bullets-image"
            />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Anuncios con video</h4>
              <p className="ads__bullets-text">
                Anuncios basados en inserción de videos en el feed, son
                similares a los anuncios en fotos, pero con los beneficios de
                audio, y duración de hasta 60 segundos
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img
              src={FacebookAds4}
              alt="Pauta"
              className="ads__bullets-image"
            />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Anuncios por secuencia</h4>
              <p className="ads__bullets-text">
                Anuncios que permiten una colección de imágenes en mosaico que
                facilitan el proceso de descubrir, explorar y comprar un
                producto
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img
              src={FacebookAds5}
              alt="Pauta"
              className="ads__bullets-image"
            />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Anuncios de colección</h4>
              <p className="ads__bullets-text">
                Anuncios centrados en productos transaccionales a través de
                E-Commerce.
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img
              src={FacebookAds6}
              alt="Pauta"
              className="ads__bullets-image"
            />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Experiencia Instantánea</h4>
              <p className="ads__bullets-text">
                Anuncios en los que las personas pueden ver videos, secuencias
                de fotos, productos en catálogo, e ir a páginas web, entre otras
                funcionalidades{" "}
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
