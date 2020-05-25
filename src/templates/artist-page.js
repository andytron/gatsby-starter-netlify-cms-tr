import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Roster from '../components/Roster'

export const ArtistPageTemplate = ({
  title,
  heading,
  description,
  roster,
  helmet,
}) => (
  <div className="content">
    {helmet || ''}
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="title is-size-3 has-text-weight-semibold is-bold-light">{title}</h3>
              <h4 className="has-text-weight-semibold is-size-4">{heading}</h4>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="section">
          <div className="columns is-multiline">
            <Roster roster={roster} />
          </div>
        </div>
      </div>
    </section>
  </div>
)

ArtistPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  roster: PropTypes.array,
  helmet: PropTypes.object,
}

const ArtistPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  console.log({ frontmatter })

  return (
    <Layout>
      <ArtistPageTemplate
        helmet={
          <Helmet titleTemplate="%s - Tiki Rocket">
            <title>{`${frontmatter.title}`}</title>
          </Helmet>
        }
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        roster={frontmatter.roster}
      />
    </Layout>
  )
}

ArtistPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ArtistPage

export const artistPageQuery = graphql`
  query ArtistPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
        roster {
          name
          link
        }
      }
    }
  }
`
