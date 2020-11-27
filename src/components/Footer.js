import React from 'react'
import { Link } from 'gatsby'
import useSiteMetadata from './SiteMetadata'

function Footer() {
  const copyrightDate = `\u00A9 ${new Date().getUTCFullYear()}`;
  const { title } = useSiteMetadata()

  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <div className="container">
          {copyrightDate}, <Link to="/" className="footer-link">{title}</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
