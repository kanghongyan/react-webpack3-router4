import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import qs from 'query-string'

const ListDetailHOC = (WrappedComponent) =>
    class extends React.PureComponent {

        // We can pass a location to <Switch/> that will tell it to
        // ignore the router's current location and use the location
        // prop instead.

        previousLocation = this.props.location;


        componentWillUpdate(nextProps) {
            const { location } = this.props;


            // set previousLocation if props.location is not modal
            if (
                nextProps.history.action !== 'POP' && !qs.parse(location.search).id
            ) {
                console.log('not a modal')
                this.previousLocation = this.props.location
            }
        }



        render() {

            const { match, location } = this.props;

            const id = qs.parse(location.search).id;

            const isDetail = location.pathname === '/page5/detail' && id && this.previousLocation !== location;

            console.log(this.previousLocation)
            console.log(this.props.location)
            console.log(isDetail)

            return (
                <div>
                    <h3>this is page5 show modal-router</h3>

                    <hr/>

                    <Switch location={isDetail ? this.previousLocation : this.props.location}>
                        <Redirect exact from={match.path} to={`${match.path}/list`}/>
                        <Route path={`${match.path}/list`} component={List}/>
                        <Route path={`${match.path}/detail`} component={ Detail }/>
                    </Switch>

                    {
                        isDetail ? <Route path={`${match.path}/detail`} component={Detail}/> : null
                    }

                </div>
            )
        }
    }





export default ListDetailHOC