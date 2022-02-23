import Markdown from 'markdown-to-jsx';
import React from 'react';
import './index.css';
import lxl from './lxl.js'

function Resume () {
    return (
        <Markdown children={lxl}></Markdown>
    )
}

export default Resume