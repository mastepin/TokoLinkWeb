import React from "react"
import { Map, GoogleApiWrapper, Marker } from "google-maps-react"
import "../../App.css"

export class MapContainer extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			stores: [
				{ latitude: -7.3116056, longitude: 110.4792654 },
				{ latitude: -7.3281494, longitude: 110.5007774 },
				{ latitude: -7.3329019, longitude: 110.5031593 },
				{ latitude: -7.3301631, longitude: 110.5018241 },
				{ latitude: -7.3210734, longitude: 110.4992447 },
				{ latitude: -7.30348, longitude: 110.4816735 },
			],
		}
	}

	displayMarkers = () => {
		return this.state.stores.map((store, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: store.latitude,
						lng: store.longitude,
					}}
					onClick={() => console.log("You clicked me!")}
				/>
			)
		})
	}

	render() {
		return (
			<Map
				google={this.props.google}
				zoom={15}
				style={mapStyles}
				initialCenter={{
					lat: -7.3116056,
					lng: 110.4792654,
				}}>
				{this.displayMarkers()}
			</Map>
		)
	}
}

export default GoogleApiWrapper({
	apiKey: "AIzaSyBNkV1AyVvUgInRQNo13XzxeDHFUH5ob1o",
})(MapContainer)

const mapStyles = {
	position: "relative",
	width: "100%",
	height: "100%",
}
