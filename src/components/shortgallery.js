import { Link } from "gatsby"
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

const Shortgallery = () => (
  <section id="short-gallery">
    <div className="container my-5 text-center">
      <SimpleReactLightbox>
        <SRLWrapper>
          <div className="row">
            <h2 className="pb-5">Tehtud tööd</h2>
            <div className="col-lg-3 col-md-6 col-sm-12 my-2">
              <StaticImage
                className="ratio ratio-1x1"
                src="../portfolio/fassaadipesu.jpg"
                alt="fassaadipesu portfolio"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-2">
              <StaticImage
                className="ratio ratio-1x1"
                src="../portfolio/fassaadipesu5.jpg"
                alt="fassaadipesu portfolio"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-2">
              <StaticImage
                className="ratio ratio-1x1"
                src="../portfolio/fassaadipesu6.jpg"
                alt="fassaadipesu portfolio"
              />
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 my-2">
              <StaticImage
                className="ratio ratio-1x1"
                src="../portfolio/fassaadipesu7.jpg"
                alt="fassaadipesu portfolio"
              />
            </div>
          </div>
        </SRLWrapper>
      </SimpleReactLightbox>
      <button className="btn btn-primary my-5">
        <Link to="/portfolio">Vaata teisi töid</Link>
      </button>
    </div>
  </section>
)

export default Shortgallery
