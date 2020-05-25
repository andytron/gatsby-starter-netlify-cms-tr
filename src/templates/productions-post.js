import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ProductionsPostTemplate = ({
  content,
  contentComponent,
  helmet,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="content">
      <section className="section productions-post">
        {helmet || ''}
        <div className="container content">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <PostContent content={content} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

ProductionsPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.object,
}

const ProductionsPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <ProductionsPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        helmet={
          <Helmet titleTemplate="%s | Productions - Tiki Rocket">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
      />
    </Layout>
  )
}

ProductionsPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProductionsPost

export const pageQuery = graphql`
  query ProductionsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
