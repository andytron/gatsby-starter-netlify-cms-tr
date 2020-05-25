import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql, StaticQuery } from 'gatsby'

class ProductionsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <div className="columns is-multiline">
        {posts &&
          posts.map(({ node: post }) => (
            <div className="roster is-parent column is-offset-1" key={post.id}>
              <article
                className={`blog-list-item tile is-child box notification is-10`}
              >
                <header>
                  <p className="post-meta">
                    {post.frontmatter.externallink ? (
                      <a href={post.frontmatter.description} className="title is-size-5" target="_blank" rel="noopener noreferrer">{post.frontmatter.title}</a>
                    ) : (
                      <Link
                        className="title is-size-5"
                        to={post.fields.slug}
                      >
                        {post.frontmatter.title}
                      </Link>
                    )}
                  </p>
                </header>
              </article>
            </div>
          ))}
      </div>
    )
  }
}

ProductionsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query ProductionsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "productions-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                description
                externallink
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <ProductionsRoll data={data} count={count} />}
  />
)
