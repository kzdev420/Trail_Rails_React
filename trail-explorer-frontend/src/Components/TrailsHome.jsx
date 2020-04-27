import React, { Component } from 'react'
import { connect } from 'react-redux'
import Trails from "./Trails"

class TrailsHome extends Component {
    render() { 
        return ( 
            <div>
                <div>
                    <Trails/><br/>
                </div>

            </div> 
        )
    }
}

let mapStateToProps = state => ({ trail: state.trailReducer.trail })
export default connect(mapStateToProps)(TrailsHome)