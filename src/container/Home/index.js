import React from 'react'
import {connect} from 'react-redux';

class MainPain extends React.PureComponent {

    componentWillMount() {
    }

    render() {
        
        return (
            <div>
                <div style={{height: 1500,textAlign: 'center'}}>
                    <p style={{lineHeight: 10}}>this is home page。</p>
                </div>
            </div>
        )

    }
}

export default connect()(MainPain)