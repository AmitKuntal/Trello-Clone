import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './header'
import Boards from './boards'
import Lists from './lists'

 export default function Main(){
    return (
            <BrowserRouter>
            <Route path='/' component={Header}/>
            <Route exact path='/' component={Boards}/>
            <Route exact path='/boards/:boardid' render={props => <Lists {...props}/>} />
            </BrowserRouter>
    )
}

