import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"



const Matrett = () => (
  <Layout>
    <Seo title="Matrett" />
    <div className="mealBanner">
        <div className="mealNameSection">
            <h2>Enchiladas</h2>
            <button>Rediger</button>
        </div>
        <div className="mealPriceSection">
            <div className="mealPriceContainer">
                <p>Estimert pris</p>
                <h7>128 kr</h7>
            </div>
        </div>
    </div>
    <div className="mealDescriptionContainer">
        <div className="ingridients">
            <h2>Ingridienser.</h2>
            <div className="ingridientsContainer">
                <div className="ingridient">
                    <p>Kjøttdeig</p>
                </div>
                <div className="addIngridient">
                    <div className="plussAddIngridient"></div>
                </div>
            </div>
            <div className="wavesMeal"></div>
        </div>
        <div className="mealStatSection">
            <h3>Kategori.</h3>
            <div className="mealCategory">
                <p>Texmex</p>
            </div>
            <h4>Antall <br/>prosjoner.</h4>
            <p className="mealSize">6</p>
        </div>
    </div>
  </Layout>
)

export default Matrett;