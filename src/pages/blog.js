import { graphql } from "gatsby";
import React, { useEffect } from "react";

import EachLink from "../components/EachLink";

import Layout from "../components/Layout";

export default function Blog({ data }) {
    
    const { blogs } = data; 
    
    return (
        <Layout>
            <div className="blog-heading-outer">
                <h1 className="blog-heading">I write about JavaScirpt & react.</h1>
            </div>
            <EachLink blogs={blogs} />
        </Layout>
    );
};

export const blogQuery = graphql`
    query BlogQuery {
        blogs: allSanityMarkdown {
            nodes {
            title
            foricon
            write
            slug {
                _key
                _type
                current
            } 
            }
        }
    }
`;