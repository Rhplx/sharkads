import React from "react"
import "../styles/components/Clients.scss"
import ClientAirbus from "../assets/images/client-airbus.jpg"
import ClientNBA from "../assets/images/client-nba.png"
import ClientUIN from "../assets/images/client-uin.png"
import ClientGasuno from "../assets/images/client-gas1.svg"
import ClientBasch from "../assets/images/client-bausch.png"
import ClientFlamagas from "../assets/images/client-flamagas.svg"
import ClientUnipana from "../assets/images/client-unipana.png"

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients__container">
        <h1 className="clients__title">Algunos de nuestros clientes</h1>
        <div className="clients__grid">
          <img src={ClientAirbus} alt="Airbus" className="clients__image" />
          <img src={ClientNBA} alt="NBA" className="clients__image" />
          <img src={ClientUIN} alt="UIN" className="clients__image" />
          <img src={ClientGasuno} alt="Gasuno" className="clients__image" />
          <img src={ClientBasch} alt="Basch" className="clients__image" />
          <img src={ClientFlamagas} alt="Flamagas" className="clients__image" />
          <img src={ClientUnipana} alt="Unipana" className="clients__image" />
        </div>
      </div>
    </section>
  )
}
