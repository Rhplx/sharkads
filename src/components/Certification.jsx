import React from "react"
import Stars from "../assets/images/stars.png"
import GooglePortatil from "../assets/images/google-portatil.png"
import FacebookBP from "../assets/images/facebook-blueprint.png"
import GooglePartner from "../assets/images/google-partner.png"
import HubspotDiamond from "../assets/images/hubspot-diamond.png"
import "../styles/components/Certification.scss"

export default function Certification() {
  return (
    <>
      <section className="certification">
        <div className="certification__container">
          <h2 className="certification__title">Certificaciones</h2>
          <img src={Stars} alt="Stars" className="certification__stars" />
          <div className="certification__grid">
            <div className="certification__box">
              <img
                src={GooglePortatil}
                alt="Portatil"
                className="certification__portatil"
              />
            </div>
            <div className="certification__box">
              <span className="certification__logos">
                <img
                  src={HubspotDiamond}
                  alt="Hubspot"
                  className="certification__logo"
                />
                <img
                  src={FacebookBP}
                  alt="Facebook"
                  className="certification__logo"
                />
                <img
                  src={GooglePartner}
                  alt="Google Partner"
                  className="certification__logo"
                />
              </span>
              <p className="certification__paragraph">
                Certificaciones con las que se cuenta:
              </p>
              <ul className="certification__list">
                <li className="certification__item">
                  Google Premiere Partner.
                </li>
                <li className="certification__item">Facebook BluePrint. </li>
                <li className="certification__item">
                  Hubspot Diamond Partner.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
