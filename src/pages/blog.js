import * as React from "react";
import { graphql } from "gatsby";
import PageTemplateLayout from "../components/page.template";

// import markdown from "../markdown/blog.md"

const Blog = ({ data }) => {
  const markdownContent = data.allMarkdownRemark.nodes[0].html;
  return (
    <PageTemplateLayout>
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </PageTemplateLayout>
  );
};

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {page: {eq: "blog.js"}}}) {
    nodes {
      frontmatter {
        layout
        page
        slug
        title
      }
      html
    }
  }
}
`;

export default Blog;
export const Head = () => <title>Nosso Blog | Guia Global - JAMstack Gatsby</title>;