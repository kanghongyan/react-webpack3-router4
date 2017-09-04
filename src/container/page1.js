import React, { PureComponent } from 'react';
import { NavLink, Route } from 'react-router-dom'
import Tip from '../component/Tip'
import NavigatorBlock from '../component/NavigatorBlock'
// https://github.com/ReactTraining/react-router/issues/4410
import qs from 'query-string'
import Transition from 'react-transition-group/Transition';

const defaultStyle = {
    transition: `opacity ${1000}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
};

class Page1 extends PureComponent {

    constructor(props) {
        super(props);

        this.fetchTest = this.fetchTest.bind(this);
    }

    state = {
        responseText: '',
        in: false
    }

    fetchTest() {
        fetch('/data/test.json', { method: 'get' })
            .then((data) => {
                return data.json()
            })
            .then((ret) => {
                this.setState({
                    responseText: ret.ret,
                    in: true
                })
            })
    };

    NavigatorBlockChildren = (
        <div>
            <NavLink to={ `/page1/1`}
                     activeStyle={{
                         fontWeight: 'bold',
                         color: 'red'
                     }}>to page 2-1</NavLink>
            {' '}
            <NavLink to={ `/page1/2`}
                     activeStyle={{
                         fontWeight: 'bold',
                         color: 'red'
                     }}>to page 2-2</NavLink>
        </div>
    )

    render() {

        const { match, location } = this.props;
        console.log('this is page1')

        return (
            <div style={{height: 1000}}>
                <p>this is page1</p>

                <Tip/>

                <p>queryString is { JSON.stringify(qs.parse(location.search)) }</p>

                <i className="glyphicon glyphicon-plus"/>

                <a onClick={ this.fetchTest }>click to fetch</a>

                <Transition timeout={1000}
                            in={this.state.in}
                            // appear={true}

                            test="test_props">
                    {(state, childProps) => {
                        /*
                        * childProps是除了Transition本身的props之外的props
                        * 这里就是{test: test_props}
                        *
                        * */

                        return (
                            <div style={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <p style={{color: 'red'}}>
                                    {
                                        this.state.responseText
                                    }
                                </p>
                            </div>
                        )
                    }}
                </Transition>

                <hr/>

                {/*
                    如果不传递location, 则navigatorBlock不会重新渲染，
                    NavLink 中的location始终是没改变
                    解决方法是在navigatorblock组件中传入location，这样该组件就会重新渲染
                */}
                <NavigatorBlock location={ location }>
                    {
                        this.NavigatorBlockChildren
                    }
                </NavigatorBlock>


                <Route path={`${match.path}/1`} render={() => {
                    return (
                        <div>
                            this is page2-1
                        </div>
                    )
                }}/>
            </div>
        )
    }
}

export default Page1