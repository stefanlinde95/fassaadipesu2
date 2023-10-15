import * as React from "react"
import kiire from "../images/kiire.svg"
import garantii from "../images/garantii.svg"
import eluiga from "../images/eluiga.svg"

const About = () => (
  <section id="about" className="pt-5 pb-3">
    <div className="container my-5">
      <div className="row about-us-row">
        <div className="col-md-8 col-sm-12">
          <h2 className="my-5">Fassaadipuhastus Eestis</h2>
          <p className="mt-4">
            Teostame fassaadipuhastuse töid üle terve Eesti. Omame teadmisi ja
            kogemusi erinevat tüüpi fassaadide pesemisel. Meie juhtiv meeskonda
            kuuluvad spetsialistid puhastuse valdkonnas, kui ka ehituse
            valdkonnas, mistõttu saame pakkuda klientidele laiapõhjalist ja
            professionaalset teenust ja nõustamist väga mitme nurga alt, et
            saavutada oodatud tulemus.
          </p>
          <p>
            <strong>Meie klientideks on</strong>
            <ul>
              <li>Korteriühistud</li>
              <li>Koolimajad</li>
              <li>Eramajad</li>
              <li>Tööstushooned</li>
              <li>Ehitusjärgsed hooned</li>
              <li>Eramajad</li>
            </ul>
          </p>
          <h3>Kuidas meie puhastus toimib? </h3>
          <p className="mt-4">
            Lisaks meie laiapõhjalistele teadmistele ja kogemustele kasutame ka
            väga tõhusat puhastusainet. Kasutame tõhusat ainet, mis tungib
            sügavale pooridesse puhastades hallituse ja sambla juured mis ei
            lase sellel enam nii kergesti tagasi tekkida. Tavalise pesu käigus,
            aga puhastatakse kergelt pind, aga mikroobid jäävad pooridesse edasi
            "elama" mistõttu on sammal väga kiire tagasi tekkima.
          </p>
          <p className="mt-4">
            Maja fassaadi puhastamine nõuab tihti asjakohast tehnikat ning
            kogenud meeskonda, sest oskusteta puhastamine ei tee fassaadi
            puhtaks ning võib selle sootuks ära rikkuda. Suudame pakkuda maja
            puhastusteenust, mis on efektiivsed, läbimõeldud ja
            kliendisõbralikud.
          </p>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-lg-4 col-md-12 col-sm-12 text-center px-5">
          <img src={kiire} alt="kiire fassaadipesu" width={150} />
          <h3>Töö kiire ja kvaliteetne</h3>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 text-center px-5">
          <img src={eluiga} alt="maja eluiga" width={150} />
          <h3>
            Maja eluiga <br />
            pikeneb
          </h3>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 text-center px-5">
          <img src={garantii} alt="garantii" width={150} />
          <h3>Garantii tehtud töödele</h3>
        </div>
      </div>
    </div>
  </section>
)

export default About
