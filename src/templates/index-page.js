import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  image,
  data,
}) => (
  <div
    style={{
      position: 'relative',
      height: 'calc(100vh - 52px - 88px)',
    }}
  >
    <BackgroundSlider
      query={data}
      images={[
        "carousel/sunset.png",
        "carousel/banana-face.png",
        "carousel/huraches.png",
        "carousel/hula.png",
        "carousel/planted-palm.png",
      ]}
      duration={3}
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
          })`,
        backgroundPosition: `center center`,
        backgroundSize: 'contain',
      }}
    />
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  data: PropTypes.object,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        data={data}
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
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        description
      }
    }
    backgrounds: allFile(filter: { sourceInstanceName: { eq: "images"} }) {
      nodes {
        relativePath
        childImageSharp {
          fluid (maxWidth: 600, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
