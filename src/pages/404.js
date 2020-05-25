import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div className="content">
      <div className="section">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h1>Not Found</h1>
                <h2>404</h2>
                <p>Page not found. Go <Link to="/" className="error-link"><strong>home</strong></Link>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
