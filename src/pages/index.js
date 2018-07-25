import React, { Fragment } from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => {
  const blogs = props.data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter).filter(node => node.category);
  const categoryMap = {};
  blogs.forEach(blog => {
    if (categoryMap[blog.category]) {
      categoryMap[blog.category].push(blog);
    } else {
      categoryMap[blog.category] = [blog];
    }
  });
  const categories = Object.keys(categoryMap);
  return (
    <div>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      {
        categories.map(category => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>{
              categoryMap[category].map(blog => (
                <li key={blog.path}><Link to={blog.path}>{blog.title}</Link></li>
              ))
            }</ul>
          </div>
        ))
      }
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
