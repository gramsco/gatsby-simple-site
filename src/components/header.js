import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

import "./header.css"

const NavElement = ({ to, children }) => (
  <AnchorLink to={to} className="nav-link">
    <div>{children}</div>
  </AnchorLink>
)

const Links = () => (
  <>
    <NavElement to="#features">Features</NavElement>
    <NavElement to="#video">How it works</NavElement>
    <NavElement to="#pricing">Pricing</NavElement>
  </>
)

const Modal = ({ children, onCancel }) => (
  <div
    style={{
      position: "fixed",
      top: "0",
      width: "100vw",
      height: "100vh",
      left: 0,
      display: "grid",
      placeItems: "center",
      background: "rgba(0,0,0,0.8)",
      zIndex: 4,
    }}
  >
    <button
      onClick={() => onCancel()}
      style={{
        position: "absolute",
        outline: "none",
        border: "none",
        color: "white",
        fontSize: "2rem",
        background: "transparent",
        top: "20px",
        right: "20px",
      }}
    >
      X
    </button>
    <div>{children}</div>
  </div>
)

function Header({ siteTitle }) {
  const [modalVisible, setModalVisible] = useState(false)

  function toggleModal() {
    setModalVisible(v => !v)
  }

  return (
    <header
      id="header"
      style={{
        background: `darkblue`,
        marginBottom: `1.45rem`,
        display: "flex",
        zIndex: 2,
        height: "100px",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100vw",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <div style={{ width: "50%" }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <div style={{ display: "flex" }}>
              <img
                id="header-img"
                style={{ height: "40px" }}
                src="/logo.svg"
                alt="The amazing logo of WhatWhat Cie"
              />
              {siteTitle}
            </div>
          </Link>
        </h1>
      </div>
      <nav className="mobile">
        <FontAwesomeIcon color={"white"} onClick={toggleModal} icon={faBars} />
      </nav>
      <nav className="desktop" id="nav-bar">
        <Links />
      </nav>
      {modalVisible && (
        <Modal onCancel={toggleModal}>
          <Links />
        </Modal>
      )}
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
