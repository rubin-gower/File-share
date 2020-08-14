import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
import  Camera from './Camera'
import  Download from './Download'
import  Upload from './Upload'
import  LinkPage from './LinkPage'
import Home from './Home'

class App extends React.Component {

  

  handleChange = () => {
    console.log(event.target.value)
  }
  render(){
  return (
    
   <Router>
     app | <Link to="/">Home</Link> <br></br>
    <Route  exact path="/Camera" component={Camera}/>
    <Route  exact path="/Download" component={Download}/>
    <Route  exact path="/Upload" component={Upload}/>
    <Route  exact path="/LinkPage" component={LinkPage}/>
    <Route  exact path="/" component={Home}/>
   
    
    </Router>
  )
}
}

export default App
