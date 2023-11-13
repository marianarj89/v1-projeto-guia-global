import * as React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import PageTemplateLayout from "../../components/page.template";

const Blog = () => {
  const data = useStaticQuery(graphql`
  query BlogQuery {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          author
          slug
        }
        id
        excerpt
      }
    }
  }
  `);

  return (
    <PageTemplateLayout>
      <h2> .: Posts Recentes :. </h2>
      <p> </p>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <br />
          <p className="blogTitleP">
            <Link to={`/blog/${node.frontmatter.slug}`}>
            <p className="blogTitleP"> ➡️ {node.frontmatter.title}</p>
            </Link>
          </p>
          <br />
          <p>{node.excerpt}</p>        
          <p className="blogInfo"> Data de Publicação: {node.frontmatter.date}</p>
          <p className="blogInfo"> Autor: {node.frontmatter.author}</p>
         
        </article>
      ))}
    </PageTemplateLayout>
  );
};

export default Blog;
export const Head = () => <title>Nosso Blog | Guia Global - JAMstack Gatsby</title>;
