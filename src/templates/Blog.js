import { graphql } from "gatsby";
import React, { useEffect, useRef } from "react";

import Layout from "../components/Layout";
import Markdown from 'markdown-to-jsx';

export default function SingleBlog({ data }) {

    const codeRef = useRef(null);

    
    useEffect(() => {
        const childNodes = Array.from(codeRef.current.children[0].childNodes);

        let pre = "[object HTMLPreElement]";
        const codeBackground = childNodes.filter(c => c.toString() == pre);
        for(let i in codeBackground) {
            codeBackground[i].className = "code-background";
        }

    }, [data]);

    return (
        <Layout>
            <div className="blog-heading-outer">
                <h2 className="blog-heading">{data.blog.title}</h2>
            </div>
            <div ref={codeRef}>
                <Markdown>
                    {data.blog.write}
                </Markdown>
            </div>
            <span className="date-and-time">{data?.blog?.dateandtime?.substring(0,10)}</span>
        </Layout>
    );
};

export const query = graphql`
    query($slug: String!){
        blog: sanityMarkdown(slug: { current: {eq: $slug} }) {
            id
            title
            write
            dateandtime
        }
    }
`;