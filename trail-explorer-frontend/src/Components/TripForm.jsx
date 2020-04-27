import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Form, FormInput, FormGroup, FormSelect } from "shards-react"
import { Modal, Button } from "react-bootstrap"

class TripForm extends Component {
    state = { 
        redirect: null,
        trail_names: []
    }

    fetchTrails = (lat, lon) => {
        const maxResults = 25
        const decimalReplaceLat = lat.replace('.', '!')
        const decimalReplaceLon = lon.replace('.', '!')
        fetch(`http://localhost:3000/trails&lat=${decimalReplaceLat}&lon=${decimalReplaceLon}&maxResults=${maxResults}`)
        .then(res => res.json())
        .then(res => this.props.dispatch({ type: "FETCH_TRAILS", data: res }))
    }

    componentDidMount() {
        this.fetchTrails("33.7490", "-84.3880")
    }

    handleCheckboxChange = (target, trail_name) => {
        let newArr = this.state.trail_names

        if (target.checked)
            newArr.push(trail_name)
        else 
            newArr.splice(newArr.indexOf(trail_name), 1)

        this.setState({ trail_names: newArr })
    }

    handleCreateTrip = (e) => {
        e.preventDefault()
        let form = e.target

        fetch('http://localhost:3000/trips',{
            method: 'POST',
            headers: { Authorization: localStorage.token, 
                    Accept: 'application/json', 
                    'Content-Type':'application/json' },
            body: JSON.stringify({
                trip: {
                    title: form.title.value,
                    description: form.description.value,
                    location: form.location.value,
                    stars: form.stars.value,
                    image: form.image.value,
                    trail_names: this.state.trail_names
                }
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.trip) {
                this.props.dispatch({ type: 'NEW_TRIP', trip: res.trip })
                this.setState({ redirect: <Redirect to='/profile' /> })
            }
        })
    }

    render() {
        if (!this.props.trail[0])
            return null
        return (
            <div>
                { this.state.redirect }

                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title>Create a New Trip!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>

                        <Form onSubmit={(e) => this.handleCreateTrip(e)}>

                            <FormGroup>
                                <FormInput required name="title" id="#title" placeholder="Title" />
                            </FormGroup>

                            <FormGroup>
                                <FormInput name="description" id="#description" placeholder="Description" />
                            </FormGroup>

                            <FormGroup>
                                <FormInput name="location" id="#location" placeholder="Location" />
                            </FormGroup>

                            <FormGroup>
                                <FormInput name="image" id="#image" placeholder="Image URL" />
                            </FormGroup>

                            <FormGroup className='trails-checklist'>
                                { this.props.trail.map(trail => {
                                    return <Fragment key={trail.id} >
                                            <input type='checkbox' onChange={ e => this.handleCheckboxChange(e.target, trail.name)} /> {trail.name}
                                            <br/>
                                        </Fragment>
                                    })
                                }
                            </FormGroup>

                            <FormSelect defaultValue='default' name="stars" id="#stars"  >
                                <option disabled value='default'>Stars</option>
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </FormSelect>

                            <FormGroup>
                                <Button className="m-3" type="submit">Submit Trip</Button>
                            </FormGroup>
                        </Form>

                    </Modal.Body>
                </Modal.Dialog>
            </div>
        )
    }
}

let mapStateToProps = state => ({ trail: state.trailReducer.trail })
export default connect(mapStateToProps)(TripForm)