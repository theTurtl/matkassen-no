import * as React from "react"
import Ingridient from "../components/Ingridient";


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
                <h7>129 Kr</h7>
            </div>
        </div>
    </div>
    <div className="mealDescriptionContainer">
        <div className="ingridients">
            <h2>Ingridienser.</h2>
            <div className="ingridientsContainer">
                    <Ingridient name='Test' />
                <button className="addIngridient">
                    <div className="plussAddIngridient"></div>
                </button>
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