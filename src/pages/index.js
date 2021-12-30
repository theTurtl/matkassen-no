import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

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
