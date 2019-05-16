import React from "react"
import { graphql } from "gatsby"
import MDXRenderer from "gatsby-mdx/mdx-renderer"
import { MDXProvider } from '@mdx-js/react'
import MdxLink from "../components/mdxLink"
import Modal from "../components/modal"
import ImageContainer from "../components/imagecontainer"

class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const components = {
      a: ({ children, ...props }) => {
        if (props.className == "gatsby-resp-image-link") {
          return <ImageContainer>{children}</ImageContainer>
        }
        return <MdxLink {...props} />
      },
    }
    const { data: { mdx }, pageContext } = this.props;
    return (
      <div className="blogpost">
        <h1>{mdx.frontmatter.title}</h1>
        <MDXProvider components={components}>
          <MDXRenderer>
            {mdx.code.body}
          </MDXRenderer>
        </MDXProvider>
        <Modal />
      </div>
    )
  }
}

export default Post

export const query = graphql`
  query Post($locale: String!, $title: String!) {
    mdx(
      frontmatter: { title: { eq: $title } }
      fields: { locale: { eq: $locale } }
    ) {
      frontmatter {
        title
      }
      code {
        body
      }
    }
  }
`
