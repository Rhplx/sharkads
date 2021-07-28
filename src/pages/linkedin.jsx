import React from "react"
import { Link } from "gatsby"
import "../styles/pages/Google-Ads.scss"
import Layout from "../components/Layout.jsx"
import Seo from "../components/seo.js"
import LinkedImage from "../assets/images/Linkedin.png"

export default function LinkedIn() {
  return (
    <Layout>
      <Seo title="LinkedIn" />
      <section className="ads__hero">
        <div className="ads__hero-container">
          <div className="ads__hero-grid">
            <div className="ads__hero-box">
              <h1 className="ads__hero-title">Linkedin</h1>
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
              <img src={LinkedImage} alt="Hero" className="ads__hero-image" />
            </div>
          </div>
        </div>
      </section>
      <section className="ads__bullets">
        <div className="ads__bullets-container">
          <article className="ads__bullets-item">
            <img src={LinkedImage} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Contenido patrocinado</h4>
              <p className="ads__bullets-text">
                Anuncios que permiten mostrar contenido en el feed del usuario
                que forma parte del público objetivo.
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img src={LinkedImage} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Anuncios de texto</h4>
              <p className="ads__bullets-text">
                Anuncios que se muestran en el feed del usuario, son más breves
                que el contenido patrocinado y ofrecen menos funcionalidades.
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img src={LinkedImage} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Anuncios Inmail</h4>
              <p className="ads__bullets-text">
                Anuncios que llegan a los mensajes directos del usuario. Tienen
                la ventaja de que son más personales que los otros tipos de
                anuncios.
              </p>
            </div>
          </article>
          <article className="ads__bullets-item">
            <img src={LinkedImage} alt="Pauta" className="ads__bullets-image" />
            <div className="ads__bullets-data">
              <h4 className="ads__bullets-title">Anuncios dinámicos</h4>
              <p className="ads__bullets-text">
                Este tipo de anuncio funciona como los display ads de Google,
                pero sólo dentro de Linkedin.
              </p>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}
