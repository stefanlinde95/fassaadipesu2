import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Form from "../components/form"

const fassaadipesu = () => (
  <Layout>
    <Seo title="Fassaadipesu" />
    <section id="service">
      <div className="banner-area d-flex">
        <div className="container">
          <h1>Fassaadipesu</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-lg-8 my-5">
            <p className="intro">
              Olenemata sellest, kas tegemist on elu-, büroohoone või laoga,
              olete tõenäoliselt teadlik sellest, kui oluline on hoida oma hoone
              puhtust. Fassaad on esimene asi, mida külastajad näevad, seega on
              ilmselgelt oluline, et hoida oma hoone puhtana.
            </p>
            <h2>Miks on fassaadi puhastamine vajalik?</h2>
            <p>
              Lihtsalt öeldes on puhas ja atraktiivne hoone esteetiliselt palju
              meeldivam vaadata kui määrdunud. Tegelikult on fassaadi
              regulaarsel puhastamisel aga oluliselt suurem kasutegur. Nimelt
              tekivad maja fassaadile ajapiku erinevad kahjustused ning
              hallitused, mis tulevad ilmsiks just puhastustööde käigus.
            </p>
            <h2 className="mt-5">Erinevad fassaadipesud</h2>
            <p>
              Olenevalt maja fassadi lahedndusest ja ka näiteks hoone asukohast
              sõiduteede ja tööstushoonete suhtes, tuleb valida ka õige
              fassadipuhastuse lahendus.
            </p>
            <div className="fascades my-5">
              <h3>Krohvitud fassaadi pesu</h3>
              <p>
                Krohvitud fassaadi suureks eeliseks on tõsiasi, et see suudab
                ennast ajajooksul n-ö iseseisvalt puhastada. See aga ei
                tähendada, et fassaadi eest ei peaks üldse hoolitsema. Ka
                krohvitud fassaad vajab regulaarselt puhastust. Pärast fassaadi
                puhastamist saab fassaadi pinnale kanda spetsiaalset vahendit,
                mis eemaldab silmale nähtamatud bakterid ja hallituse.
              </p>
              <h3>Puidust fassaadi pesu</h3>
              <p>
                Olgugi, et puit on eestlaste jaoks üks enim kasutatud
                ehitusmaterjale on see tegelikuses aga üsnagi nõudlik materjal.
                Puitfassaadi peaks laskam puhastada vähematl iga 4 aasta tagant.
              </p>
              <h3>Plaatfasaadi pesu</h3>
              <p>
                Plaatfassaadi on kõige lihtsam puhastada ja hooldada. Lisaks,
                saab katkise plaadi lihtsasti välja vahetada.
              </p>
            </div>
            <h2 className="mt-5">Fassaadipesu hind</h2>
            <p>Meie fassaadipesutööde hind algab 3 €/m2.</p>
          </div>
          <div className="col-12 d-sm-none d-md-block col-lg-4 my-5">
            <StaticImage
              width={350}
              src="../portfolio/fassaadipesu5.jpg"
              alt="fassaadipesu"
            />
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

export default fassaadipesu
