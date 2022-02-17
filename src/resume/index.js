import Markdown from 'markdown-to-jsx';
import React from 'react';
// import { render } from 'react-dom';
import './index.css';
import lxl from './lxl.js'

// class Resume extends Component {
//     render () {
//         return (
//             <Markdown children={md}></Markdown>
//         )
//     }
// }

function Resume () {
    return (
        <Markdown children={lxl}></Markdown>
    )
}

export default Resume