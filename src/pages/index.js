import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/blog/hello/">Go to Hello</Link>
    </div>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
            category
          }
        }
      }
    }
  }
`;
