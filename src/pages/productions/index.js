import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import ProductionsRoll from '../../components/ProductionsRoll'

const ProductionsPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <section className="section section--gradient">
      <div className="container">
        <div className="section" style={{ paddingBottom: 0 }}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="title is-size-3 has-text-weight-semibold is-bold-light">Productions</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" style={{ paddingTop: 0 }}>
      <Helmet title={`Productions - ${title}`} />
      <div className="container">
        <div className="section">
          <ProductionsRoll />
        </div>
      </div>
    </section>
  </Layout>
)

export default ProductionsPage

export const productionsPageQuery = graphql`
  query ProductionsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
