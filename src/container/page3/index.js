import React from 'react'
import Page_3_1 from './page3-1'
import { Link, Route } from 'react-router-dom'

const Page3 = ({ match }) => {

    console.log(match);

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
            <Route path={`${match.path}/1`} render={Page_3_1}/>
            <Route path={`${match.path}/2`} render={Page_3_1}/>
            <Route path={`${match.path}/3`} render={Page_3_1}/>
            <Route path={`${match.path}/3`} render={Page_3_1}/>
        </div>
    )
};

export default Page3