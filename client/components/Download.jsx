import React from 'react';
class Download extends React.Component {
    state = {  }
    render() { 
        return ( <>
        download
        
        <a href="./storage/example.jpg" download="newName">test download</a>
        {/* {console.log(this.props.match.params.id)} */}

        </> )
    }
}
export default Download;