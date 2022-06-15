const path = require(`path`);

async function turnBlogIntoPages({ graphql, actions }) {
    //get template for this page
    const blogTemplate = path.resolve('./src/templates/Blog.js');

    //query all
    const { data } = await graphql(`
        query {
            blogs: allSanityMarkdown {
                nodes {
                title
                write
                slug {
                    _key
                    _type
                    current
                } 
                }
            }
        }
    `);

    //loop over each & creata a page for it
    data.blogs.nodes.forEach(blog => {
        actions.createPage({
            path: `blog/${blog.slug.current}`,
            component: blogTemplate,
            context: {
                slug: blog.slug.current
            }
        })
    });
}

exports.createPages = async ({ graphql, actions }) =>  {

    // create pages for blogs
    await turnBlogIntoPages({ graphql, actions });
}