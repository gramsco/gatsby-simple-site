import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFire,
  faTruck,
  faBatteryFull,
} from "@fortawesome/free-solid-svg-icons"

const logos = {
  fire: faFire,
  truck: faTruck,
  battery: faBatteryFull,
}

function SellingPoints({ children }) {
  return <div>{children}</div>
}

function SellingPoint({ title, logo, children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "80px 1fr",
      }}
    >
      <div
        style={{
          height: "40px",
          width: "40px",
          display: "grid",
          placeItems: "center",
        }}
      >
        <FontAwesomeIcon color="orange" icon={logos[logo]} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          height: "80px",
        }}
      >
        <h4 style={{ margin: "0" }}>{title}</h4>
        <span style={{ fontSize: "12px" }}>{children}</span>
      </div>
    </div>
  )
}

SellingPoints.SellingPoint = SellingPoint
export default SellingPoints
