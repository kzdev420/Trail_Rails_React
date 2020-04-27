import React, { Component } from 'react'
import { connect } from 'react-redux'
import UsersCards from "./UsersCards"

class AllUsers extends Component {
    componentDidMount = () => {
        fetch("http://localhost:3000/users", {
            method: "GET",
            headers: { Accept: 'application/json', 'Content-Type':'application/json' },
        })
        .then(res => res.json())
        .then(res => {
            this.props.dispatch({ type: "ALL_USERS", users: res })
        })
    }

    render() {
        return (
            <div>
                <UsersCards/>
            </div>
        )
    }
}

export default connect()(AllUsers)