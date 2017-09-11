import React from 'react'
import DetailModalHOC from '../../component/DetailModalHOC/modal'
import qs from 'query-string'

class Detail extends React.PureComponent {

    render() {

        const { location } = this.props;

        console.log(location)

        return (
            <div>
                this is detail {qs.parse(location.search).id}
            </div>
        )
    }
}


export default DetailModalHOC(Detail)