import React, { useState, createContext, useContext } from "react"
import "./card.css"
const CardsContext = createContext(null)

function Cards({ children }) {
  const [hovered, setHovered] = useState(null)

  return (
    <CardsContext.Provider value={{ hovered, setHovered }}>
      {children}
    </CardsContext.Provider>
  )
}

function Card({ title, children, id }) {
  const { hovered, setHovered } = useContext(CardsContext)
  return (
    <div
      tabIndex="-1"
      role="button"
      onMouseEnter={() => setHovered(id)}
      onMouseLeave={() => setHovered(null)}
      id={id}
      className={`card ${
        id === hovered ? "hovered" : hovered === null ? "" : "darken"
      } `}
    >
      <h3 style={{ textAlign: "center", background: "lightgrey" }}>{title}</h3>
      {children}
    </div>
  )
}

export const Price = ({ children }) => (
  <span style={{ fontWeight: "800" }}>${children}</span>
)

export const Specifications = ({ specs }) => {
  if (specs.length !== 4)
    throw new Error(
      `By design, this component should have 4 specifications, not ${specs.length}.`
    )

  return (
    <div>
      {specs.map((e, i) => (
        <div key={i}>{e}</div>
      ))}
    </div>
  )
}

Card.Price = Price
Card.Specifications = Specifications

Cards.Card = Card

export default Cards
