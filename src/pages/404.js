import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <div>
      <h1>Not Found</h1>
      <h2>404</h2>
      <p>You went the wrong way! Page not found. Go <Link to="/" className="error-link">home</Link>.</p>
    </div>
  </Layout>
)

export default NotFoundPage
