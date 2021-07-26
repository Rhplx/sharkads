import React from "react"
import ClientsImage from "../assets/images/clients.png"
import "../styles/components/Clients.scss"

export default function Clients() {
  return (
    <section className="clients">
      <div className="clients__container">
        <h1 className="clients__title">Algunos de nuestros clientes</h1>
        <img src={ClientsImage} alt="Clients" className="clients__image" />
      </div>
    </section>
  )
}
