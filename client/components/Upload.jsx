import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"

class Upload extends React.Component {
    state = {
        uploads: []
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
        console.log(event.target.files[0])
        this.setState({
            uploads: [...this.state.uploads, event.target.files[0]]
        })
    }
    handleFinnish = () => {

        console.log(this.state.uploads)
    }
    render() {
        return (<>
            upload

            <input type="file" id="file-input" multiple onChange={this.handleChange} />
            <button onClick={this.handleFinnish}>Done</button>
            <div className="uploads">{this.state.uploads.map((elem, i) => {
                console.log(elem.type)
                console.log((elem.type).includes("image"))
                if ((elem.type).includes("image")) {
                   
                    return <div key={i} className="file"> <img src={URL.createObjectURL(elem)} alt="ur img" className="img-file"/> {elem.name}</div>
                }
                else {
                    return <div key={i} className="file"> {elem.name}</div>
                }
                
            })}</div>
        </>);
    }
}
export default Upload;