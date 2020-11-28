import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import PostsRoll from '../../components/PostsRoll'

const PostsPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  },
  location
}) => (
  <Layout location={location}>
    <section className="section section--gradient">
      <div className="container">
        <div className="section" style={{ paddingBottom: 0 }}>
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <h3 className="title is-size-3 has-text-weight-semibold is-bold-light">Posts</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section" style={{ paddingTop: 0 }}>
      <Helmet title={`All Posts - ${title}`} />
      <div className="container">
        <div className="section">
          <PostsRoll />
        </div>
      </div>
    </section>
  </Layout>
)

export default PostsPage

export const postsPageQuery = graphql`
  query PostsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
