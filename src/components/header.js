import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import logoBlue from "../images/logoBlue.svg"
import Topnav from "./topnav"

const Header = ({ siteTitle }) => (
  <header>
    <div className="container">
      <div className="row">
        <div
          className="nav"
          style={{
            margin: `0 auto`,
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <img src={logoBlue} alt={siteTitle} className="logo" />
          </Link>
          <div className="desktop navbar ms-auto d-sm-none d-lg-flex">
            <Link to="/">Avaleht</Link>
            <Link to="/fassaadipesu">Fassaadipesu</Link>
            <Link to="/katusepesu">katusepesu</Link>
            <Link to="/portfolio">Tehtud tööd</Link>
            <Link className="cta" to="/kontakt">
              Küsi pakkumist
            </Link>
          </div>
          <div className="d-sm-block d-lg-none ms-auto">
            <Topnav />
          </div>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
