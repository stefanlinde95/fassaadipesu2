import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => (
  <section id="hero">
    <div className="container-fluid">
      <div className="row bg-overlay">
        <div className="col-md-6 col-sm-12">
          <a href="/katusepesu" className="hero-text">
            <StaticImage
              className="ratio ratio-1x1 bg-overlay"
              src="../images/katusepesu.jpg"
              alt="katusepesu"
              height={500}
              quality={100}
            />
            <div className="hero-text-wrapper">
              <p>
                <span>Katusepesu</span>
              </p>
              <p className="sub">Katuste, rennide ja vihmaveesüsteemide pesu</p>
            </div>
          </a>
        </div>
        <div className="col-md-6 col-sm-12">
          <a href="/fassaadipesu" className="hero-text">
            <StaticImage
              className="ratio ratio-1x1 bg-overlay"
              src="../images/fassaadipesu.jpg"
              alt="fassaadipesu"
              height={500}
              quality={100}
            />
            <div className="hero-text-wrapper">
              <p>
                <span>Fassaadipesu</span>
              </p>
              <p className="sub">Erinevate majafassaadide pesu</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
)

export default Hero
