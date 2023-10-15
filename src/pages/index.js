import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import About from "../components/about"
import Shortgallery from "../components/shortgallery"
import Cta from "../components/cta"
import Form from "../components/form"

const IndexPage = () => (
  <Layout>
    <Seo title="Avaleht" />
    <Hero />
    <About />
    <Shortgallery />
    <Cta />
    <Form />
  </Layout>
)

export default IndexPage
