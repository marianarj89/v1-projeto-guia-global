import * as React from "react";
import { graphql } from "gatsby";
import IndexTemplateLayout from "../components/index.template";
import Carousel from 'react-bootstrap/Carousel';

const IndexPage = ({ data }) => {
  const markdownContent = data.allMarkdownRemark.nodes[0].html;
  return (
    <IndexTemplateLayout>
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </IndexTemplateLayout>
  );
};

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {page: {eq: "index.js"}}}) {
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

export default IndexPage;
export const Head = () => <title>Home | Guia Global - JAMstack Gatsby</title>;
