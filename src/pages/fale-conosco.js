import * as React from "react";
import { graphql } from "gatsby";
import PageTemplateLayout from "../components/page.template";
// import markdown from "../markdown/fale-conosco.md"

const FaleConosco = ({ data }) => {
  const markdownContent = data.allMarkdownRemark.nodes[0].html;
  return (
    <PageTemplateLayout>
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </PageTemplateLayout>
  );
};

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {page: {eq: "fale-conosco.js"}}}) {
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

export default FaleConosco;
export const Head = () => <title>Fale Conosco</title>;