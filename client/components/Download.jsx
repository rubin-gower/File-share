import React from 'react';
class Download extends React.Component {
    state = {  }
    render() { 
        return ( <>
        download
        
        <a href="./storage/example.jpg" download="newName">test download</a>
        
        </> )
    }
}
export default Download;