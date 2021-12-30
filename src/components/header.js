import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header>
    <div class="headerContainer"
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1>
        <Link to="/">
          <div class="logo"></div>
        </Link>
      </h1>

      <div class="navContainer">
        <div class="menuIcon"></div>
        <div class="profileContainer">
          <p>{siteTitle}</p>
          <div class="profileIcon"></div>
        </div>
      </div>
      
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Logg på`,
}

export default Header
