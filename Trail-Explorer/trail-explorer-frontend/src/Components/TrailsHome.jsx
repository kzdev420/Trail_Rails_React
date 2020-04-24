import React, { Component } from 'react'
import { connect } from 'react-redux'
import Iframe from 'react-iframe'
import Trails from "./Trails"

class TrailsHome extends Component {
    render() { 
        return ( 
            <div>
                <br/><h2> FIND A TRAIL NEAR YOU! </h2><br/>
                <Iframe title="trails-map" className="trails-map" frameborder="0" scrolling="yes" 
                    src="https://www.hikingproject.com/widget/map?favs=1&location=ip&x=-9402411&y=4020493&z=11.5&h=500">
                </Iframe>
                <div>
                    <Trails/><br/>
                </div>

            </div> 
        )
    }
}

let mapStateToProps = state => ({ trail: state.trailReducer.trail })
export default connect(mapStateToProps)(TrailsHome)