import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"

class Upload extends React.Component {
    state = {
        uploads: [],
        toatalSize: 0,
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
        //console.log(event.target.files[0])
        let files=[]
        for (let i = 0; i < event.target.files.length; i++) {
            files.push(event.target.files[i])
        }
        this.setState({
            uploads: [...this.state.uploads, ...files]
        })
    }
    handleDrop = () => {
        event.preventDefault()
        console.log("droped files")
        if (event.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            let files=[]
            for (var i = 0; i < event.dataTransfer.items.length; i++) {
              if (event.dataTransfer.items[i].kind === 'file') {
                files.push(event.dataTransfer.items[i].getAsFile())
              }
            }
            this.setState({
                uploads: [...this.state.uploads, ...files]
            })
    
          } else {
            // Use DataTransfer interface to access the file(s)
            for (var i = 0; i < ev.dataTransfer.files.length; i++) {

              console.log("else", ev.dataTransfer.files[i])
              this.setState({
                uploads: [...this.state.uploads, file]
            })

            }
          }
    }
    handleDrag = () => {
        event.preventDefault()
      
    }
    handleFinnish = () => {

        console.log(this.state.uploads)
    }
    render() {
        return (<>
            upload
            <div id="drop-zone" onDrop={this.handleDrop} onDragOver={this.handleDrag}>
                <p>Drag files</p>
            </div>
            <input type="file" id="file-input" multiple onChange={this.handleChange} />
            <button onClick={this.handleFinnish}>Done</button>
            <div className="uploads">{this.state.uploads.map((elem, i) => {
                console.log(elem.type)
                console.log(elem)
                //console.log((elem.type).includes("image"))
                if ((elem.type).includes("image")) {

                    return <div key={i} className="file"> <img src={URL.createObjectURL(elem)} alt="ur img" className="img-file" /> {elem.name}</div>
                }
                else {
                    return <div key={i} className="file"> {elem.name}</div>
                }

            })}</div>
        </>);
    }
}
export default Upload;