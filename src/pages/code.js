import React from "react";

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/cobalt.css';
import 'codemirror/keymap/vim';
import Layout from "../components/Layout";

export default function Code() {

    return (
        <Layout>
        <div>
            <div style={{width: '100%'}}>
            <CodeMirror
            options={{theme: 'cobalt', keyMap: 'vim'}}
            value="console.log('hello world!');"
            height="200px"
            onChange={(value, viewUpdate) => {
                console.log('value:', value);
            }}
        />
            </div>
        </div>
        </Layout>
    );
};