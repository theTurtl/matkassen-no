/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        
        
        <footer
          style={{
            marginTop: `2rem`,
            marginBottom: `0`,
          }}
        >
          <div className="footerNav">
            <h7>Sidekart.</h7>
            <br/>
            <p>
              <Link to="/Matforslag">Utforsk Meny</Link> <br />
              <Link to="/Profil/">Din Profil</Link> <br />
              <Link to="/using-ssr">Dine Retter</Link> <br />
              <Link to="/using-dsg">Logg Ut</Link>
            </p>
          </div>
          <div className="footerSignature">
            © {new Date().getFullYear()}
            {` `}
            <a href="https://www.aspevik.com">aspevikdesign</a>
          </div>
          <div className="logoDark"></div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
