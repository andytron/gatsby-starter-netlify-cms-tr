import React from 'react'

import Layout from '../../components/Layout'
import ProductionsRoll from '../../components/ProductionsRoll'

export default class ProductionsIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0"
          style={{
            backgroundImage: `url('/img/bg-texture.jpg')`,
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'black',
              padding: '1rem',
            }}
          >
            Productions
          </h1>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <ProductionsRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
