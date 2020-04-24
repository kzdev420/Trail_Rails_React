import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap'

class UsersCards extends Component {
    follow = (user) => {
        let follow = { followed_user_id: user.id, user_id: this.props.user.user.id}
        console.log(follow)

        fetch("http://localhost:3000/follows", {
            method: "POST",
            headers: { Accept: 'application/json', 
                    'Content-Type':'application/json',
                    Authorization: localStorage.token},
            body: JSON.stringify({follow: follow})
        })
        .then(res => res.json())
        .then(res => {
            if (res.user)
                this.props.dispatch({ type: 'GET_USER', user: res.user })
        })
    }

    render() {
        console.log(this.props)

        return (
            <div>
            {this.props.allUsers &&
                <Row className="d-flex justify-content-center m-3">
                    {this.props.allUsers.users.map(user => {
                        if(user.id !== this.props.user.user.id)
                            return <Col md={3}> 
                                <Card id="user-card" key={user.id} >
                                    <Card.Body>
                                        <Card.Img variant="top" id="trip-card-image" src={user.profile_picture} />
                                        <Card.Text>
                                            {user.name}<br/> 
                                            {user.email} 
                                        </Card.Text>
                                            {
                                                this.props.user.user.followed_users.find(f => f.id === user.id ) ?
                                                <Button disabled> Followed </Button>
                                                :
                                                <Button onClick={() => this.follow(user)} variant="primary">Follow!</Button> 
                                            }
                                    </Card.Body>
                                </Card><br/> 
                            </Col>
                        })
                    }
                </Row>
            }
            </div>
        )
    }
}

const mapStateToProps = state => ({ 
    user: state.userReducer,
    allUsers: state.allUsersReducer })

export default connect(mapStateToProps)(UsersCards)