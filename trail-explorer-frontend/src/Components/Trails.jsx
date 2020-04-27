import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, ListGroup, Image } from "react-bootstrap"
import Iframe from 'react-iframe'


import PlacesAutocomplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import "../Styles/Trails.scss";

// import LocationSearchInput from "./attachment/LocationSearchInput";

class Trails extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            address: '',
            mapPosition: "https://www.hikingproject.com/widget/map?favs=1&location=ip&x=-9402411&y=4020493&z=11.5&h=500"
        };
    }

    handleChange = address => {
        this.setState({ address: address });
    };
    
    handleSelect = address => {
        this.setState({ address: address });
        geocodeByAddress(address)
            .then(results => getLatLng(results[0]))
            .then(latLng => {
                this.fetchTrails(`${latLng['lat']}`, `${latLng['lng']}`);
                console.log(latLng['lat'], latLng['lng'])
                var d = .017453292519943295,  f = 6378137, c = .7853981633974483;
                var x = f * latLng['lng'] * d;
                var y = f * Math.log(Math.tan(c + latLng['lat'] * d / 2));
                this.setState({mapPosition : `https://www.hikingproject.com/widget/map?favs=1&location=fixed&x=${x}&y=${y}&z=11.5&h=500`})
                console.log(x,y);
            })
            .catch(error => console.error('Error', error));
    };

    

    fetchTrails = (lat, lon) => {
        const maxResults = 40
        const decimalReplaceLat = lat.replace('.', '!')
        const decimalReplaceLon = lon.replace('.', '!')
        fetch(`http://localhost:3000/trails&lat=${decimalReplaceLat}&lon=${decimalReplaceLon}&maxResults=${maxResults}`)
        .then(res => res.json())
        .then(res => this.props.dispatch({ type: "FETCH_TRAILS", data: res }))
    }

    componentDidMount() {
        this.fetchTrails("33.7490", "-84.3880")
    }

    difficultyImg = (t) => {
        switch(t.difficulty) {
            case "green":
                return "https://cdn.apstatic.com/img/diff/green.svg"

            case "greenBlue":
                return "https://cdn.apstatic.com/img/diff/greenBlue.svg"

            case "blue":
                return "https://cdn.apstatic.com/img/diff/blue.svg"

            case "blueBlack":
                return "https://cdn.apstatic.com/img/diff/blueBlack.svg"

            case "black":
                return "https://cdn.apstatic.com/img/diff/black.svg"

            default: 
                return ""
        }
    }

    renderTrails = () => {
        console.log("TRAILS", this.props.trailReducer)
        if(this.props){
          const trailCards = this.props.trailReducer.map(t => {
            return(
                <Card id="trail-card" key={t.id}>
                    <Card.Img 
                        
                        id="trail-card-image" 
                        alt="trail-img" 
                        className="card-img" 
                        src={t.imgSmallMed ? 
                        ( t.imgSmallMed) 
                            : 
                        ("https://pdxfamilyadventures.com/wp-content/uploads/2012/11/DSC03794.jpg")} 
                    /><br/>
                    
                    <Card.Title id="trail-name">{t.name}</Card.Title>

                    <Card.Body>
                        <Card.Text>{t.location} </Card.Text>
                        <Card.Text id="trail-summary">{t.summary} </Card.Text>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Stars: {t.stars}</ListGroup.Item>
                            <ListGroup.Item>Length: {t.length} miles</ListGroup.Item>
                            {/* <ListGroup.Item>Ascent: {t.ascent} ft Descent: {t.descent} ft</ListGroup.Item> */}
                            <ListGroup.Item>High: {t.high} ft, Low: {t.low} ft</ListGroup.Item>
                            <ListGroup.Item id="trail-difficulty">Difficulty: <Image style={{'borderRadius':'4px' }}src={this.difficultyImg(t)}/></ListGroup.Item>
                            {/* <ListGroup.Item id="trail-conditions">Conditions: {t.conditionStatus}, {t.conditionDetails}</ListGroup.Item> */}
                            <ListGroup.Item> <a href={t.url} rel="noopener noreferrer" target="_blank">Trail Details </a></ListGroup.Item>
                        </ListGroup>
                  </Card.Body>
              </Card>
            )
        })
          return(
            <div className = "row">
              {trailCards}
            </div>
          )
        }
    }   

    render() {
        return (
            <div>
                <br/><h2> FIND A TRAIL NEAR YOU! </h2><br/>
                <Iframe title="trails-map" className="trails-map" frameborder="0" scrolling="yes" 
                    src={this.state.mapPosition}>
                </Iframe>
                
                <div className = "LocationSearchInput">
                    <PlacesAutocomplete
                        value={this.state.address}
                        onChange={this.handleChange}
                        onSelect={this.handleSelect}
                    >
                        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                        <div>
                            <input
                            {...getInputProps({
                                placeholder: 'Search Places ...',
                                className: 'location-search-input',
                            })}
                            />
                            <div className="autocomplete-dropdown-container">
                            {loading && <div>Loading...</div>}
                            {suggestions.map(suggestion => {
                                const className = suggestion.active
                                ? 'suggestion-item--active'
                                : 'suggestion-item';
                                // inline style for demonstration purpose
                                const style = suggestion.active
                                ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                                : { backgroundColor: '#ffffff', cursor: 'pointer' };
                                return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                    className,
                                    style,
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                                );
                            })}
                            </div>
                        </div>
                        )}
                    </PlacesAutocomplete>
                </div>

                {this.renderTrails()}
            </div>
        )
    }
}

let mapStateToProps = state => ({ trailReducer: state.trailReducer.trail })
export default connect(mapStateToProps)(Trails)