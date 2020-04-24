import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from "./Components/Navbar"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import EditProfile from './Components/EditProfile'
import FollowerFeed from "./Components/FollowerFeed"
import SignUp from "./Components/SignUp"
import TrailsHome from './Components/TrailsHome'
import TripForm from "./Components/TripForm"
import AllUsers from "./Components/AllUsers"

import "bootstrap/dist/css/bootstrap.min.css"
import "shards-ui/dist/css/shards.min.css"
import './App.css'

class App extends React.Component {

  componentDidMount() {
    if(localStorage.token) {
      fetch('http://localhost:3000/profile',{
        headers: { Authorization: localStorage.token }
      })
      .then(res => res.json())
      .then(res => {
        if(res.user)
          this.props.dispatch({ type: 'GET_USER', user: res.user })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        {
          localStorage.token && !this.props.user.id ?
          null
          :
          <Switch>
            <Route exact path='/trails' component={TrailsHome} />
            <Route exact path='/all-users' component={AllUsers} />
            <Route exact path='/follower-feed' component={FollowerFeed} />
            <Route path='/login' render={()=> this.props.loggedIn ? <Redirect to='/profile'/> : <Login/> } />
            <Route path='/profile' render={()=> this.props.loggedIn  ? <Profile/> : <Redirect to='/login'/> } />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/edit-profile" component={EditProfile} />
            <Route exact path="/trip-form" component={TripForm} />
            <Route path='/' render={()=> <Redirect to='/trails' /> } />
          </Switch>
        }
      </div>
    )
  }
}

let mapStateToProps = state => ({ user: state.userReducer.user, loggedIn: state.userReducer.loggedIn })
export default connect(mapStateToProps)(App)
