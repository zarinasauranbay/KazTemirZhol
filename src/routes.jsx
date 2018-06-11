import React, { Component } from 'react';
import Register from './components/Register'
import App from './App'
import {BrowserRouter, Route, Link} from 'react-router-dom'




class Routes extends Component{
    render(){
        return(
            <React.Fragment>
                <BrowserRouter>
                    <Route exact path="/" component={App} />
                 </BrowserRouter>
                <BrowserRouter>
                    <Route exact path="/register" component={Register} />
                 </BrowserRouter>
                 <BrowserRouter>
                    <Route exact path="/login" component={App} />
                 </BrowserRouter>
                 <BrowserRouter>
                    <Route exact path="/main" component={App} />
                 </BrowserRouter>
            </React.Fragment>
                       
         )
    }
}
export default Routes;