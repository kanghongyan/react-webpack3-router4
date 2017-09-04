import Fade from './_Fade'
import React from 'react'

class CssTrasition extends React.PureComponent {

    constructor(){
        super();

        this.state = {show: false}
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                show: !this.state.show
            })
        }, 5000)
    }

    componentWillUnmount () {
        clearInterval(this.timer)
    }

    render() {
        return (
            <Fade in={this.state.show}>
                <div>hello world</div>
            </Fade>
        )
    }
}

export default CssTrasition