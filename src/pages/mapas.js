import * as React from "react";
import { graphql } from "gatsby";
import PageTemplateLayout from "../components/page.template";
// import markdown from "../markdown/sobre-nos.md"

const Mapas = ({ data }) => {
  const markdownContent = data.allMarkdownRemark.nodes[0].html;
  return (
    <PageTemplateLayout>
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </PageTemplateLayout>
  );
};

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {page: {eq: "mapas.js"}}}) {
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

export default Mapas;
export const Head = () => <title>Mapas | Guia Global - JAMstack Gatsby </title>;