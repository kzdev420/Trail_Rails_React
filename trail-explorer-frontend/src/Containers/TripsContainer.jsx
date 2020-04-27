import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trip from "../Components/Trip"
import {Row, Col} from 'react-bootstrap'

class TripsContainer extends Component {
    render() {
        return (
            <div>
                <Row md={2}> 
                    {this.props.user.trips.map(trip => 
                        <Col md={3}> <Trip key={trip.id} trip={trip}/> </Col>)
                    }
                </Row>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(TripsContainer)


