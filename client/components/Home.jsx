import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
class Home extends React.Component {
    state = {}
    render() {
        return (<>
        home
            <h1>File shear</h1>
            <div className="upload-button"><Link to="/Upload">Upload</Link></div>
            <div className="download-button"><Link to="/Camera">Download</Link></div>
        </>)
    }
}

export default Home;