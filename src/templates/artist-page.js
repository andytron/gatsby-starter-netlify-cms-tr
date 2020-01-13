import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
// import Features from '../components/Features'
import Roster from '../components/Roster'
// import Pricing from '../components/Pricing'
// import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ArtistPageTemplate = ({
  image,
  title,
  heading,
  description,
  // intro,
  // main,
  roster,
  // fullImage,
}) => (
  <div className="content">
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
      }}
    >
      <h2
        className="has-text-weight-bold is-size-1"
        style={{
          color: 'black',
          padding: '1rem',
        }}
      >
        {title}
      </h2>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-7 is-offset-1">
              <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        <section className="section section--gradient">
      <div className="container">
        <div className="content">
          <div className="columns is-multiline">
            <Roster roster={roster} />
          </div>
        </div>
      </div>
    </section>
  </div>
)

ArtistPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
  // main: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
    // image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    // image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    // image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // }),
  roster: PropTypes.array,
  // fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  // pricing: PropTypes.shape({
  //   heading: PropTypes.string,
  //   description: PropTypes.string,
  //   plans: PropTypes.array,
  // }),
}

const ArtistPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ArtistPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        // main={frontmatter.main}
        roster={frontmatter.roster}
        // fullImage={frontmatter.full_image}
        // pricing={frontmatter.pricing}
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
