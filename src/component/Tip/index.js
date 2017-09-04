import React, { PureComponent } from 'react'
import './index.scss'

import IMG from './img/test2.png'

class Tip extends PureComponent {
    render() {

        console.log('render tips')

        return (
            <div>
                <img src={ IMG } alt=""/>
                <p className="tip">tip</p>
            </div>
        )
    }
}

export default Tip