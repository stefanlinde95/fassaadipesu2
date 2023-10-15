import React, { useState } from "react"
import { Link } from "gatsby"

const TopNav = props => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed)

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white rounded">
      <button
        class="custom-toggler navbar-toggler ms-auto mt-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class={`${isNavCollapsed ? "collapse" : ""} navbar-collapse my-5`}
        id="navbarsExample09"
      >
        <Link to="/">Avaleht</Link>
        <Link to="/fassaadipesu">Fassaadipesu</Link>
        <Link to="/katusepesu">katusepesu</Link>
        <Link to="/portfolio">Tehtud tööd</Link>
        <Link className="cta" to="/kontakt">
          Küsi pakkumist
        </Link>
      </div>
    </nav>
  )
}

export default TopNav
