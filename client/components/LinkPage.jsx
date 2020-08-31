import React from 'react';
let QRCode = require('qrcode.react');
class LinkPage extends React.Component {
    state = { 
        url: window.location.origin +"/#/Download/"+ this.props.rndURL
     }
    render() { 
        return ( <>
        linkpage
      
       
        {console.log( window.location.origin )}
        link: <a href={this.state.url}>{this.state.url}</a> 
        <QRCode value={this.state.url}/>
        </> );
    }
}

export default LinkPage;