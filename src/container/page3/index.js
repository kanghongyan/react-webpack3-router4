import React from 'react'
import Page_3_1 from './page3-1'
import { Link, Route } from 'react-router-dom'

import pathToRegexp from 'path-to-regexp'

const Page3 = ({ match, location }) => {

    console.log(location);
    console.log(match);

    /*
    *
    *
    * match: {
    *    path: <Route>上的path
    *    url: 'path-to-regexp'正则匹配到到字符串.内部实现re.exec(location.pathname)
    *    isExact: location.pathname === url ?
    *    params: 'path-to-regexp'正则匹配到的keys
    * }
    *
    * <Router>上如果没有path
    * match 默认为 {
    *    path: '/',
    *    url: '/',
    *    params: {},
    *    isExact: pathname === '/'
    *}
    *
    * */

    // end对应路由中的exact, strict对应路由中的strict
    // == end is true ==
    var keys = [];
    var re1 = pathToRegexp('/foo', keys, {
        sensitive: false,
        strict: false,
        end: true // default is true
    });
    // re: /^\/foo(?:\/(?=$))?$/i
    // re.exec('/foo') => matched => /foo
    // re.exec('/foo/') => matched => /foo/
    // re.exec('/foo/other') => no matched => null


    // == end is false ==
    let key2 = [];
    let re2 = pathToRegexp('/foo', key2, {
        sensitive: false, // default is false. when false，不校验大小写
        strict: false, // default is false 。when false , trailing slash is optional
        end: false // When false the path will match at the beginning.
    });
    // re: /^\/foo(?:\/(?=$))?(?=\/|$)/i
    // re.exec('/foo') => matched => /foo
    // re.exec('/foo/') => matched => /foo/
    // re.exec('/foo/other') => matched => /foo




    // let key3 = [];
    // let re3 = pathToRegexp('/foo', key3, {
    //     sensitive: false,
    //     strict: false,
    //     end: true
    // });
    //


    console.log(re1);
    console.log(re2);
    // console.log(re3)



    // curry-test
    // const curry = (fn) => {
    //     let slice = Array.prototype.slice;
    //     return function temp() {
    //         let _args = slice.call(arguments)
    //         return fn.apply(null, _args)
    //     }
    // }
    //
    // const checkString = function(data) {
    //     console.log(this)
    //     if (Object.prototype.toString.call(data) === "[object String]") {
    //         return true
    //     }
    //     return false
    // }
    //
    // console.log(curry(checkString)(false));
    // checkArray()

    return (
        <div>
            <p>this is page3</p>
            <ul>
                <li>
                    <Link to="/page3/1">click to page3-1</Link>
                </li>
            </ul>

            {/*<Route path={`${match.path}/1`} render={
                () => <p>page3---in</p>
            }/>*/}
            <Route path={`${match.path}/1`} component={Page_3_1}/>
        </div>
    )
};

export default Page3