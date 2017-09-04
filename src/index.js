import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { Router } from 'react-router'
// import createHashHistory from 'history/createHashHistory'

import './index.scss';
import store from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {
    HashRouter as Router,
} from 'react-router-dom'

// const history = createHashHistory()

/**
 * <Route>有三个render方法：component, render, children (只能用其中一个 component > render > children)
 *                        component: when the location matches 才调用。传递component
 *                        render： when the location matches 才调用。传递inline-function
 *                        children： whether there is a match or not 都会调用。传递inline-function。可根据是否match到来做不同的行为
 * 每个方法都有三个route props：match, location, search
 * @type {XML}
 */

const routerConfig = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)

ReactDOM.render(routerConfig, document.getElementById('root'));
registerServiceWorker();
