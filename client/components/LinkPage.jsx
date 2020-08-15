import React from 'react';

class LinkPage extends React.Component {
    state = {  }
    render() { 
        return ( <>
        linkpage
      
       
        {console.log( window.location.origin )}
        link: <a href={window.location.origin +"/#/Download/"+ this.props.rndURL}>{window.location.origin +"/#/Download/"+ this.props.rndURL}</a> 
        
        </> );
    }
}

export default LinkPage;