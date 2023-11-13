import * as React from 'react'
import { Link, graphql } from 'gatsby'
import PageTemplateLayout from "../../components/page.template";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'


const BlogPost = ({ data, children }) => {

  const image = getImage(data.mdx.frontmatter.hero_image)

  return (
    <PageTemplateLayout>
      <p className='blogTitleP'> {data.mdx.frontmatter.title} </p>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage image={getImage(data.mdx.frontmatter.hero_image)} alt={data.mdx.frontmatter.title} />
      <br />
      {children}
      
      <br />
      <p> Data de Publicação: {data.mdx.frontmatter.date}</p>
          <p> Autor: {data.mdx.frontmatter.author}</p>
      <Link to="/blog">
        <button type="button" class="btn btn-primary">
          Voltar ao Blog
        </button>
      </Link>
    </PageTemplateLayout>
  )
}

export const query = graphql`
query ($id: String) {
  mdx(id: {eq: $id}) {
    frontmatter {
      title
      author
      date(formatString: "MMMM D, YYYY")
      hero_image {
        childImageSharp {
          gatsbyImageData(
            width: 600
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  }
}
`

export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>

export default BlogPost