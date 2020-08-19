import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    id="header"
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <div>
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
              style={{ height: "40px" }}
              src="/logo.svg"
              alt="The amazing logo of WhatWhat Cie"
            />
            {siteTitle}
          </div>
        </Link>
      </h1>
    </div>
    <nav style={{ display: "flex" }}>
      <div>Features</div>
      <div>How it works</div>
      <div>Pricing</div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
