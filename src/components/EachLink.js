import React from "react";
import { Link } from "gatsby";

import { AiFillFile } from "react-icons/ai";
import Markdown from 'markdown-to-jsx';


import "../css/eachlink.css";

export default function EachLink({ blogs }) {

    return (
        <div className="each-link-outer">
                {blogs.nodes.map(each => (
                    <div key={each.title} className="each-link">
                        <Link to={`/blog/${each.slug.current}`}>
                            <AiFillFile className="each-file" />
                            <Markdown className="markdown-title">{each.title}</Markdown>
                        </Link>
                    </div>
                ))}  
        </div>
    )
}