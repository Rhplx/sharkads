import React from "react"
import { Link } from "gatsby"
import "../styles/pages/Google-Ads.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/seo.js"
import TwitterImage from "../assets/images/twitter.png"
import TwitterAds1 from "../assets/images/twitterAds1.png"
import TwitterAds2 from "../assets/images/twitterAds2.png"
import TwitterAds3 from "../assets/images/twitterAds3.png"

export default function LinkedIn() {
  return (
    <Layout>
      <Seo title="Twitter" />
      <section className="ads__hero">
        <div className="ads__hero-container">
          <div className="ads__hero-grid">
            <div className="ads__hero-box">
              <h1 className="ads__hero-title">Twitter</h1>
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
              <img src={TwitterImage} alt="Hero" className="ads__hero-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="ads__bullets">
        <div className="ads__bullets-container">
          <article className="ads__bullets-item">
            <img src={TwitterAds1} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Tweets promocionados</h4>
              <p className="ads__bullets-text">
                Anuncios que se muestran en el feed del usuario, son más breves
                que el contenido patrocinado y ofrecen menos funcionalidades
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img src={TwitterAds2} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Cuentas promocionadas</h4>
              <p className="ads__bullets-text">
                Anuncios con el objetivo de incrementar el número de seguidores
                de una cuenta. Aparecen en primer lugar de las sugerencias de
                cuentas de los usuarios
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img src={TwitterAds3} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Tendencias promocionadas</h4>
              <p className="ads__bullets-text">
                Anuncios que se muestran en el feed del usuario, son más breves
                que el contenido patrocinado y ofrecen menos funcionalidades
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
