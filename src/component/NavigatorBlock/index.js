import React from 'react'
import PropTypes from 'prop-types'

class UpdateBlocker extends React.PureComponent {


    render() {

        console.log('re-render UpdateBlocker')

        return this.props.children
    }
}

UpdateBlocker.propTypes = {
    children: PropTypes.node,
};

UpdateBlocker.defaultProps = {
    children: <div>this is navigator block test</div>
};

export default UpdateBlocker