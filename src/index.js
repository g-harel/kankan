import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import App from './App';
import Focus from './components/task/Focus';
import './index.css';

ReactDOM.render((
    <Router>
        <Route path="/" component={App}></Route>
        <Route path="task" component={App}>
            <Route path=":id" component={Focus}></Route>
        </Route>
    </Router>
), document.getElementById('root'));
