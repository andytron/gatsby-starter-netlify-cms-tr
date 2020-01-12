import React from 'react'
import { Link } from 'gatsby'

function Footer() {
  const copyrightDate = `\u00A9 ${new Date().getUTCFullYear()}`;

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="container">
          {copyrightDate}, <Link to="/" className="footer-link">Tiki Rocket</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
