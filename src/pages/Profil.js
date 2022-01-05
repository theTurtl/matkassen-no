import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProfileBanner from "../components/sections/ProfileBanner"

const Profil = () => (
  <Layout>
    <Seo title="Profil" />
    <ProfileBanner />
    <div className="profileStat">
      <div className="yourSide">
        <h1>Din side</h1>
        <div className="statContainer">
          <div className="statCard">
            <h7>Dine retter</h7>
            <p>1</p>
          </div>
          <div className="statCard">
            <h7>Dine retter</h7>
            <p>1</p>
          </div>
        </div>
        <div className="accountDeco"></div>
      </div>
      <div className="account">
        
        
          <h2>Konto</h2>
          <div className="accountBox">
            <div className="logOut">
              <p>Logg ut</p>
            </div>
            <div className="deleteAccount">
              <p>Slett konto</p>
            </div>
          </div>
        
      </div>
    </div>
    
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default Profil;