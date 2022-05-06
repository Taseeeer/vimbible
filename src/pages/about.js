import React from "react";

import CodeMirror from '@uiw/react-codemirror';
import 'codemirror/theme/cobalt.css';
import 'codemirror/keymap/vim';

export default function About() {

    return (
        <div>
            <h1>Im about page</h1>
            <div style={{width: '500px'}}>

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
    );
};