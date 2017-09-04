import React, {PureComponent} from 'react';
import {
    Link
} from 'react-router-dom'
// import logo from './logo.svg';
import './App.scss';

import Bundle from './Bundle'
import Page1 from './container/page1'
// eslint-disable-next-line
import Page3 from 'bundle-loader?lazy&name=page3!./container/page3'
import Page2 from './container/page2'
import Page4 from './container/page4'
import Home from './container/Home'

import {
    Route,
    Switch
} from 'react-router-dom'
import { withRouter } from 'react-router'

import ScrollToTop from './component/ScrollToTop'

// App是pureComponent，且没有props。
// location没有传到props中，当路由改变时，则组件本身是不会再render的
// https://reacttraining.com/react-router/web/guides/dealing-with-update-blocking
class App extends PureComponent {

    render() {

        return (
            <ScrollToTop>

                <div className="App">

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/page1/:type" component={Page1} />
                        <Route path="/page3/" render={
                            (props) => (
                                <Bundle load={Page3}>
                                    {(Page3) => {
                                        return <Page3 {...props}/>
                                    }}
                                </Bundle>
                            )
                        } />
                        <Route path="/page2" exact strict component={Page2} />
                        <Route path="/page4" component={ Page4 }/>
                        <Route render={ () => <p style={{background: 'grey'}}>404 not found</p> }/>
                    </Switch>


                    <h4>---below is nav---</h4>
                    <ul>
                        <li>
                            <Link to="/">to home</Link>
                        </li>
                        <li>
                            <Link to={`/page1/text?id=1`}>to page1</Link>
                        </li>
                        <li>
                            <Link to={`/page2`}>to page2</Link>
                        </li>
                        <li>
                            <Link to={`/page3`}>to page3</Link>
                        </li>
                        <li>
                            <Link to={`/page4`}>to page4</Link>
                        </li>
                    </ul>

                </div>

            </ScrollToTop>
        );
    }
}

export default withRouter(App);
