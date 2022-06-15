import React from "react";

import Layout from "../components/Layout";

export default function About() {

    return (
        <Layout>
        <div>
            <p style={{margin: "0"}}>Hello there 👋 <br/> I am Syed Taseer Shah. I graduated without
            bachelor's in software engineering. I like exploring about react and frontend technologies.
            </p>
            <p >This website is truely about Vim. It is special to those who use it.</p>
            <p>Vim is an open-source text editor with distinct keybindings. These keybindings help you write quickly without moving your fingers
               from the actual keyboard layout.
            </p>
            <p>We'll learn the core fundamentals of Vim bindings and try it here.</p>
            <i>You can try it out here by clicking the Vim incon in the content section, it'll give you access to vim editor.</i>
        </div>
        </Layout>
    );
};