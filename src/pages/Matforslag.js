import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"



const Matforslag = () => (
  <Layout>
    <Seo title="Matforslag" />
    <div className="foodBanner">
        <div className="dishBanner">
            <div className="dishBannerContainer">
                <h3>Ferske og smakfulle salater</h3>
                <p>Ta en pause, vi har deg dekket med deilige, ferske salater</p>
                <button>Utforsk</button>
            </div>
            <div className="dishBannerImg"></div>
        </div>
        <div className="staticPart">
            <div className="makeList">
                <div className="centerDiv">
                    <h1>Lag din egen handleliste.</h1>
                </div>
            </div>
            <div className="exploreFood">
                <p>Utforsk matretter</p>
                <div className="exploreArrow"></div>
            </div>
        </div>
    </div>
    <div className="categoriesSection">
        <h5>Kategorier</h5>
        <div className="categoriesView">
            <div className="category">
                <p>pizza</p>
            </div>
        </div>
    </div>
    <div className="newDishes">
        <h6>Nyheter</h6>
        <div className="newDishesView">
            <div className="newDish">
                <div className="blackBackground">
                    <div className="dishImg"></div>
                </div>
                <div className="dishDescription">
                    <h7>Pizza Margherita</h7>
                    <p>Salat med strimler av agurk, løk, og sitron.</p>
                </div>
                <div className="dishButton">
                    <div className="newDishAddImg"></div>
                </div>
                
            </div>
        </div>
    </div>
    
  </Layout>
)

export default Matforslag;