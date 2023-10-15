import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"

const SecondPage = () => (
  <Layout>
    <Seo title="Kontakt" />
    <section id="contact_us">
      <div className="banner-area d-flex">
        <div className="container">
          <h1>Kontakt</h1>
        </div>
      </div>
      <div className="container">
        <Form />
      </div>
    </section>
  </Layout>
)

export default SecondPage
