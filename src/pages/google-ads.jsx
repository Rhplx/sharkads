import React from "react"
import { Link } from "gatsby"
import "../styles/pages/Google-Ads.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/seo.js"
import PautaScreen from "../assets/images/pauta-image.png"
import GoogleAds1 from "../assets/images/google-ads1.png"
import GoogleAds2 from "../assets/images/google-ads2.png"
import GoogleAds3 from "../assets/images/google-ads3.png"
import GoogleAds4 from "../assets/images/google-ads4.png"

export default function Ads() {
  return (
    <Layout>
      <Seo title="Google Ads" />
      <section className="ads__hero">
        <div className="ads__hero-container">
          <div className="ads__hero-grid">
            <div className="ads__hero-box">
              <h1 className="ads__hero-title">Google Ads</h1>
              <p className="ads__hero-text">
                Generamos campañas en la red de búsqueda más grande del mundo.
                Este tipo de anuncios son muy efectivos para productos o
                servicios que son buscados recurrentemente por las personas con
                una intención transaccional. Empresas de servicios B2B, venta de
                productos especializados, universidades y algunos otros giros
                son ideales para este tipo de campañas.
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
              <img src={PautaScreen} alt="Hero" className="ads__hero-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="ads__bullets">
        <div className="ads__bullets-container">
          <article className="ads__bullets-item">
            <img src={GoogleAds1} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Google search</h4>
              <p className="ads__bullets-text">
                Anuncios en la red de búsqueda de Google basados en palabras
                clave y conversión directa de leads interesados
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img src={GoogleAds2} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Google Shopping</h4>
              <p className="ads__bullets-text">
                Anuncios centrados en productos transaccionales a través de
                E-Commerce.
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img src={GoogleAds3} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Google display</h4>
              <p className="ads__bullets-text">
                Anuncios centrados en la red de videos más grande del mundo, son
                útiles para empresas que buscan difundir sus mensajes alrededor
                de una necesidad específica del usuario
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img src={GoogleAds4} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Youtube</h4>
              <p className="ads__bullets-text">
                Anuncios centrados en la red de videos más grande del mundo, son
                útiles para empresas que buscan difundir sus mensajes alrededor
                de una necesidad específica del usuario
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
