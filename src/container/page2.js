import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { isShowDialog } from '../actions/dialog'

class Page2 extends PureComponent {

    dispatchTest = () => {
        this.props.dispatch(isShowDialog({
            isShow: true,
            msg: 'this is dialog content'
        }))
    };

    render() {


        const { match } = this.props;
        console.log(match)

        return (
            <div>
                <p>this is page2</p>
                <a onClick={ this.dispatchTest }>click me to dispatch</a>


                <div style={{color: 'red'}}>
                    { this.props.dialogMsg }
                </div>

            </div>
        )

    }
}

const mapStateToProps = (state, ownProps) => {


    return {
        dialogMsg: state.get('dialog').get('msg')
    }
}

export default connect(
    mapStateToProps
)(Page2)