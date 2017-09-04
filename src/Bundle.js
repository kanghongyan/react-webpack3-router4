import { Component } from 'react';

class Bundle extends Component {
    state = {
        // short for "module" but that's a keyword in js, so "mod"
        mod: null
    }

    componentWillMount() {
        this.load(this.props)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps)
        }
    }

    load(props) {
        this.setState({
            mod: null
        });

        /*
        *  this.props.load
        *  内部会将执行callback，传入require()后的组件
        *  经webpack boundle-loader包装的组件
        *
        * module.exports = function(cb) {
	require.ensure([], function(require) {
		cb(require("!!../../node_modules/babel-loader/lib/index.js??ref--1-oneOf-1!../../node_modules/eslint-loader/index.js??ref--0-0!./page2.js"));
	}, "page2");
}
        * */

        props.load((mod) => {
            this.setState({
                // handle both es imports and cjs
                mod: mod.default ? mod.default : mod
            })
        })
    }

    render() {
        return this.state.mod ? this.props.children(this.state.mod) : null
    }
}

export default Bundle