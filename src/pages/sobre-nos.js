import * as React from "react";
import { graphql } from "gatsby";
import PageTemplateLayout from "../components/page.template";
import RandomUserGenerator from "../components/RandomUser";

// import markdown from "../markdown/sobre-nos.md"

const Sobre = ({ data }) => {
  const markdownContent = data.allMarkdownRemark.nodes[0].html;
  return (
    <PageTemplateLayout>
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
      
      <div className="containerTeam">
      <RandomUserGenerator/>
      <RandomUserGenerator/>
      <RandomUserGenerator/>
      <RandomUserGenerator/>
      </div>
    </PageTemplateLayout>
  );
};

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {page: {eq: "sobre-nos.js"}}}) {
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

export default Sobre;
export const Head = () => <title>Sobre Nós</title>;