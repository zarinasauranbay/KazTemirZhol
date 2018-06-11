import React, { Component } from 'react';
import Register from './components/Register'
import App from './App'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import RegisterConfirm from './components/RegisterConfirm';




class Routes extends Component{
    render(){
        return(
                <BrowserRouter>
                    <React.Fragment>
                        <Route exact path="/" component={App} />
                        <Route exact path="/register" component={Register} />
                        <Route exact path="/registerConfirm" component={RegisterConfirm} />
                    </React.Fragment>
                </BrowserRouter>
                
                    
           
                       
         )
    }
}
export default Routes;