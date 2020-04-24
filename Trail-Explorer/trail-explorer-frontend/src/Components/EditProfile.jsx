import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom"
import { Form, FormInput, FormGroup } from "shards-react"
import { Modal, Button } from "react-bootstrap"
import EditProfileDiv from "./EditProfileDiv"

class EditProfile extends Component {

    state = { redirect: null }

    handleEditProfile = (e) => {
        e.preventDefault()
        if(e.target.email.value && e.target.currentPassword.value && e.target.password.value === e.target.confirmPassword.value) {
            fetch(`http://localhost:3000/users/${this.props.user.id}`, {
                method: "PATCH",
                headers: {
                    Authorization: localStorage.token,
                    Accept: 'application/json', 
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({
                    user: {
                        password: e.target.password.value
                    }
                })
            })
            .then(res => res.json())
            .then(res => {
                if (res.user) {
                    this.props.dispatch({ type: 'GET_USER', user: res.user })
                    this.setState({ redirect: <Redirect to='/profile' /> })
                }
            })
        }
        else {
            
        }
    }

    render() {
        return (
            <div>
                { this.state.redirect }
                <EditProfileDiv>
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Edit Profile</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <Form onSubmit={ this.handleEditProfile } >

                                <FormGroup>
                                    <label htmlFor="#email">Email</label>
                                    <FormInput type="email" name="email" id="#email" placeholder="Email" />
                                </FormGroup>
                                
                                <FormGroup>
                                    <label htmlFor="#current-password">Current Password</label>
                                    <FormInput name="currentPassword" type="password" id="#current-password" placeholder="Current Password" />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="#password">New Password</label>
                                    <FormInput name="password" type="password" id="#password" placeholder="New Password" />
                                </FormGroup>

                                <FormGroup>
                                    <label htmlFor="#confirm-password">Confirm Password</label>
                                    <FormInput name="confirmPassword" type="password" id="#confirm-password" placeholder="Confirm Password" />
                                </FormGroup>

                                <Button type="submit" variant="primary">Save Changes</Button>
                                <Link to="/trails"> 
                                    <Button  variant="secondary">Cancel</Button>
                                </Link> 
                            </Form>
                        </Modal.Body>
                    </Modal.Dialog>
                </EditProfileDiv>
            </div>
        )
    }
}

let mapStateToProps = state => ({ user: state.userReducer.user })
export default connect(mapStateToProps)(EditProfile)