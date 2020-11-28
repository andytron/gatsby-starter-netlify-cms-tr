import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Accordion from '../components/Accordion'
import Roster from '../components/Roster'

export const IndexPageTemplate = ({
  title,
  // image,
  heading,
  description,
  contact,
  shop,
  instagram,
  roster,
  helmet,
}) => (
  <div className="content">
    {helmet || ''}
    <section className="section">
      <div className="container">
        <div className="tiki-box">
          <div className="tiki-box__upper">
            <div className="tiki-box__logo">
              <img src="/img/logo.png" alt="Tiki Rocket" style={{ maxWidth: '150px', maxHeight: '150px', margin: '1.5rem auto' }} />
            </div>
            <div className="tiki-box__title">
              <h2>{heading}</h2>
            </div>
          </div>
          <div className="tiki-box__lower">
            <Accordion
              contact={contact}
              shop={shop}
              instagram={instagram}
            >
              <Roster roster={roster} />
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  description: PropTypes.string,
  contact: PropTypes.string,
  shop: PropTypes.string,
  instagram: PropTypes.string,
  roster: PropTypes.array,
  helmet: PropTypes.object,
}

const IndexPage = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout location={location}>
      <IndexPageTemplate
        helmet={
          <Helmet titleTemplate="%s - Tiki Rocket">
            <title>{`${frontmatter.title}`}</title>
          </Helmet>
        }
        title={frontmatter.title}
        // image={frontmatter.image}
        heading={frontmatter.heading}
        description={frontmatter.description}
        contact={frontmatter.contact}
        shop={frontmatter.shop}
        instagram={frontmatter.instagram}
        roster={frontmatter.roster}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        description
        contact
        shop
        instagram
        roster {
          name
          link
        }
      }
    }
  }
`
