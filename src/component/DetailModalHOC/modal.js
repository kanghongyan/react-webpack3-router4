import React from 'react'
import './modal.scss'

const DetailModalHOC = (WrappedComponent) =>
    class extends React.Component {
        constructor(props) {
            super(props);
        }

        componentDidMount() {
        }

        componentWillReceiveProps(newProps) {

        }


        render() {
            const {
                ...other
            } = this.props;


            return (
                <div className='detail-modal'>
                    <WrappedComponent { ...other } />
                </div>
            )
        }
    };

export default DetailModalHOC
