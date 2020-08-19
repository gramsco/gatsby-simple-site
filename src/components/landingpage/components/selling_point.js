import React from "react"

function SellingPoints({ children }) {
  return <div>{children}</div>
}

function SellingPoint({ title, logo, children }) {
  return (
    <div
      style={{
        display: "grid",
        border: "solid 1px black",
        gridTemplateColumns: "80px 1fr",
      }}
    >
      <Logo>{logo}</Logo>
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

function Logo() {
  return <div>tbd</div>
}

SellingPoints.SellingPoint = SellingPoint
export default SellingPoints
