# Gatsby Essentials


nouvelle app:
    gatsby new myProject

tout se passe ensuite principalement dans le folder src.

run server:

    gatsby develop

(le composent violet est le header)

dans helmet on a les éléments meta de la page (intégrés dans le header)


# Création page

nouveau fichier dans pages. Exemple:

import React from 'react'

    const AboutPage =() =>{
      return(
          <div>
          <h1>About us</h1>
          ...
          </div>
      )
    }
    export default AboutPage


** immédiatement on peut accéder a la page /about !! **

Ajout d'un menu création dans le fichier components menu.js:

import React from 'react'
import Link from 'gatsby-link'

    const Menu = ()=>{
        return(
            <div style={{
                background: '#f4f4f4',
                paddingTop:'10px'
            }}>
            <ul style={{
              listStyle:'none',
              display: 'flex',
              justifyContent: 'space-evenly'
            }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/services">services</Link></li>
            </ul>
            </div>
        )
    }
    export default Menu

suffit ensuite d'importer le menu dans layouts/index.js et de l'intégrer avec </Menu />


Une application cool est de faire un blog.

dans pages créer un folder nommée 2018-04-09-post-1
a l'intérieur créer un fichier .md:


    ---
    path: "/post-one"
    date: "2018-04-09"
    title: "My first Gatsby post"
    author: "ta mére"
    ---

    This is my very first blog post in Gatsby.

Pour intégrer tout ca il faut installer quelques modules

    npm i gatsby-source-filesystem gatsby-transformer-remark gatsby-plugin-catch-links

Ensuite modifier le gatsby-config-js:

    module.exports = {
    siteMetadata: {
      title: 'Gatsby Default Starter',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-catch-links',
      {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name:'pages'
      },
      },
      'gatsby-transformer-remark']
    }

Comme on utilise graph ql on peut faire localhost:8000/___graphql

    {
      allFile{
      edges{
        node{
          id
        }
      }
    }
    }

(Ca nous permet d'accéder a nos fichiers)
Pour nous on va devoir rentrer par exemple:

    {
    	allMarkdownRemark{
        edges{
          node{
            frontmatter{
              path
            	title
    					date
    					author
            }
            excerpt
          }
        }
      }
    }

**on peut accéder a nos champs dans nos fichiers blogs**


Créer fichier blog dans pages:

    import React from 'react'
    import Link from 'gatsby-link'

    const BlogPage = ({ data }) => (
      <div>
        <h1>Latest Posts</h1>
        {data.allMarkdownRemark.edges.map(post => (
          <div key={post.node.id}>
            <h3>{post.node.frontmatter.title}</h3>
            <small>
              Posted by {post.node.frontmatter.author} on{' '}
              {post.node.frontmatter.date}
            </small>
            <br />
            <br />
            <Link to={post.node.frontmatter.path}>Read More</Link>
            <br />
            <br />
            <hr />
          </div>
        ))}
      </div>
    )

    export const pageQuery = graphql`
      query BlogIndexQuery {
        allMarkdownRemark {
          edges {
            node {
              id
              frontmatter {
                path
                title
                date
                author
              }
            }
          }
        }
      }
    `

    export default BlogPage


Pour la suite, voir tuto. voir graphql
