import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"

const SecondPage = () => (
  <Layout>
    <Seo title="Katusepesu" />
    <section id="service_two">
      <div className="banner-area d-flex">
        <div className="container">
          <h1>Katusepesu</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-8 my-5">
            <p className="intro">
              Langenud lehed ja oksad võivad aja jooksul koguneda ning ummistada
              vihmaveerennid ja vihmaveetorud. See tähendab, et vihmaveerennid
              võivad üle voolata ja kahjustada katust, fassaad ja halvimal juhul
              kahjustada maja vundamenti. Hea uudis on see, et kõiki neid
              kahjustusi saab vältida, kui regulaarselt hooldada
              vihmaveerennisid.
            </p>
            <h2>Kuidas hooldada vihmaveerenne?</h2>
            <p>
              <ul>
                <li>
                  <p>
                    Puhastage vihmaveetorusid vähemalt kaks korda aastas – kord
                    kevadel ja sügisel.
                  </p>
                </li>
                <li>
                  <p>
                    Kontrollige vihmaveerenne enne ja pärast tugevat vihmasadu,
                    veendumaks, et vihmaveerennid on puhtad.
                  </p>
                </li>
                <li>
                  <p>
                    Puhastamine on tavaliselt kõige lihtsam, kui ilm ja praht on
                    paar päeva kuivanud, kuid see pole alati võimalik.
                  </p>
                </li>
              </ul>
            </p>
            <h2>Katusepesu hind</h2>
            <p>Alates 4 €/m2</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 text-center">
            <h2>Küsi hinda</h2>
          </div>
        </div>
        <Form />
      </div>
    </section>
  </Layout>
)

export default SecondPage
