import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import MealBrowser from "../components/sections/MealBrowser"
import Banner from "../components/sections/Banner"


const IndexPage = () => (
  <Layout>
    <Seo title="Hjem" />
    <Banner />
    <MealBrowser />
  </Layout>
)

export default IndexPage
