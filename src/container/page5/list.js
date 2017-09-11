import React from 'react'
import { Link } from 'react-router-dom'


class List extends React.PureComponent {

    state = {
        lists: []
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                lists: [
                    {id: '1'},
                    {id: '2'},
                    {id: '3'},
                    {id: '4'},
                    {id: '5'},
                    {id: '6'},
                    {id: '7'},
                    {id: '8'},
                    {id: '9'},
                    {id: '10'},
                    {id: '11'},
                    {id: '12'},
                    {id: '13'},
                    {id: '14'},
                    {id: '15'},
                    {id: '16'},
                    {id: '17'},
                    {id: '18'},
                    {id: '19'},
                    {id: '20'},
                ]
            })
        }, 3000)
    }

    componentWillReceiveProps() {
        setTimeout(() => {
            this.setState({
                lists: [
                    {id: '333'},
                    {id: '2'},
                    {id: '3'},
                    {id: '4'},
                    {id: '5'},
                    {id: '6'},
                    {id: '7'},
                    {id: '8'},
                    {id: '9'},
                    {id: '10'},
                    {id: '11'},
                    {id: '12'},
                    {id: '13'},
                    {id: '14'},
                    {id: '15'},
                    {id: '16'},
                    {id: '17'},
                    {id: '18'},
                    {id: '19'},
                    {id: '20'},
                ]
            })
        }, 3000)
    }


    render() {

        console.log('render-list')

        return (
            <div style={{lineHeight: 2}}>
                <ul>
                    {
                        this.state.lists.map((item, i) => {
                            return (
                                <li key={i}>
                                    <Link to={`/page5/detail?id=${item.id}`}>this is list {item.id}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}


export default List