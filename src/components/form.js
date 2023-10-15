import React from "react"
import { useForm, ValidationError } from "@formspree/react"
function Form() {
  const [state, handleSubmit] = useForm("mbjwdbeq")
  if (state.succeeded) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 my-5">
            <p className="success">Täname, päring on saadetud!</p>
          </div>
          <div className="col-sm-12 col-md-6 my-5 ps-5">
            <div>
              <h3>Tel.</h3>
              <p>(+372) 5663 4115 - Raul Ventsel</p>
              <p>(+372) 5814 1833 - Sille Mustonen </p>
            </div>
            <div>
              <h3>Vemu OÜ</h3>
              <ul>
                <li>Reg. nr: 16493134 </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <form id="form" method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Teenuse tellija eraisik/ettevõte* :</label>
              <input
                id="name"
                type="name"
                name="name"
                className="form-control"
                required
              />
              <ValidationError
                prefix="name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="row mt-4">
              <div className="form-group col-sm-12 col-lg-6">
                <label htmlFor="address">Objekti aadress* :</label>
                <input
                  id="address"
                  type="text"
                  name="address"
                  className="form-control"
                  required
                />
                <ValidationError
                  prefix="address"
                  field="address"
                  errors={state.errors}
                />
              </div>
              <div className="form-group col-sm-12 col-lg-6">
                <label htmlFor="size">Objekti maht (m2):</label>
                <input
                  id="size"
                  type="number"
                  name="size"
                  className="form-control"
                />
                <ValidationError
                  prefix="size"
                  field="size"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="form-group col-sm-12 col-lg-6">
                <label htmlFor="email">Email* :</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  className="form-control"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div className="form-group col-sm-12 col-lg-6">
                <label htmlFor="phone">Tel.* :</label>
                <input
                  id="phone"
                  type="phone"
                  name="phone"
                  className="form-control"
                  required
                />
                <ValidationError
                  prefix="phone"
                  field="phone"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="form-group col-sm-12 col-lg-6">
                <label htmlFor="date">Soovitud puhastuse aeg:</label>
                <input
                  type="datetime-local"
                  name="date"
                  id="date"
                  min={new Date().toISOString().slice(0, -8)}
                  className="p-2"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Tellimuse sisu:</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="form-control"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary mt-4"
            >
              Saada
            </button>
          </form>
          <p className="mt-4">* - kohustuslik väli</p>
        </div>
        <div className="col-sm-12 col-md-6 my-5 ps-5">
          <div>
            <h3>Tel.</h3>
            <p>(+372) 5663 4115 - Raul Ventsel</p>
            <p>(+372) 5814 1833 - Sille Mustonen</p>
          </div>
          <div>
            <h3>Vemu OÜ</h3>
            <ul>
              <li>Reg. nr: 16493134 </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Form
