import React from 'react';
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
import {saveFile} from "../api/api"
import LinkPage from "./LinkPage"

class Upload extends React.Component {
    state = {
        uploads: [],
        toatalSize: 0,
        done: false,
        rndURL: "",
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.eventFunction)
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.eventFunction)
    }

    createUrl = ()=>{
        let chars = "qwertyuiopasdfghjklzxcvbnm"
        let newUrl = ""
        for(let i=0; i<10;i++) {
            newUrl += chars.charAt(Math.floor(Math.random()* chars.length) )
        }
        console.log(newUrl)
        this.setState({rndURL: newUrl})
       return newUrl
       
    }

    eventFunction = (e) => {
        if (this.state.uploads.length > 0) {
            var confirmationMessage = 'You did not upload your files '
                + 'If you leave before uploading, your will have to reupload.';
            (e || window.event).returnValue = confirmationMessage; //Gecko + IE
         

            return confirmationMessage; //Gecko + Webkit, Safari, Chrome etc.
        }
    }
    handleChange = () => {
        console.log("file uploaded")
        //console.log(event.target.files[0])
        let files = []
        for (let i = 0; i < event.target.files.length; i++) {

            let names = this.state.uploads.map(elem => { return elem.name })
            if (names.includes(event.target.files[i].name)) alert("multiple files cant have the same name")
            else {
                files.push(event.target.files[i])
            }


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
            let files = []
            for (var i = 0; i < event.dataTransfer.items.length; i++) {
                let file = event.dataTransfer.items[i].getAsFile()
                if (event.dataTransfer.items[i].kind === 'file') {

                    let names = this.state.uploads.map(elem => { return elem.name })
                    if (names.includes(file.name)) alert("multiple files cant have the same name")
                    else {
                        files.push(file)
                    }


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
        let id = this.createUrl()
        console.log(this.state.uploads)
       // this.props.history.push(`/LinkPage/${id}`);
       this.setState({done: true})
        let data = {
            location: this.state.uploads[0].name,
            id: id
        }
       saveFile(data).then(()=>{console.log("savefile api call")})
    }
    render() {
        return (<>
            upload
            {this.state.done ?  <LinkPage rndURL={this.state.rndURL}/> 
            :
            <>
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
            </>}
        </>);
    }
}
export default Upload;