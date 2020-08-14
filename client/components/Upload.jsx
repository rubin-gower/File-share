import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"

class Upload extends React.Component {
    state = {
        uploads: ["img", "file"]
    }

    // componentDidMount() {
    //     window.addEventListener("beforeunload", function (e) {
    //         var confirmationMessage = 'You did not upload your files '
    //             + 'If you leave before uploading, your will have to reupload.';
    //         (e || window.event).returnValue = confirmationMessage; //Gecko + IE
    //         return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
    //     });
    // }

    handleChange = () => {
        console.log("file uploaded")
        console.log(event.target.files)
        this.setState({
            uploads: [...this.state.uploads, event.target.files] 
        })
    }
    handleFinnish = () => {
        console.log(document.getElementById("file-input").files)
    }
    render() {
        return (<>
            upload

            <input type="file" id="file-input" multiple onChange={this.handleChange} />
            <button onClick={this.handleFinnish}>Done</button>
        <div className="uploads"></div>
        </>);
    }
}
export default Upload;