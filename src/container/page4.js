import React from 'react'
import TransitionGroup from '../component/TransitonGroup'
import CssTransition from '../component/CssTransition'


class Page4 extends React.PureComponent {


    render() {

        return (
            <div>
                <h3>this is page4 show transition</h3>

                <hr/>

                <TransitionGroup/>

                <CssTransition/>
            </div>
        )
    }
}


export default Page4