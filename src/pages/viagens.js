import * as React from "react";
import { graphql } from "gatsby";
import PageTemplateLayout from "../components/page.template";
// import markdown from "../markdown/viagens.md"

const url = `https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={5a49d36a8131fb1cbb48926982621865}`

const Viagens = ({ data }) => {
  const markdownContent = data.allMarkdownRemark.nodes[0].html;
  return (
    <PageTemplateLayout>
      <div dangerouslySetInnerHTML={{ __html: markdownContent }} />
    </PageTemplateLayout>
  );
};

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {page: {eq: "viagens.js"}}}) {
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

export default Viagens;
export const Head = () => <title>Viagens</title>;