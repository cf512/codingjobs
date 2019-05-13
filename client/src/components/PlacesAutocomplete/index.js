/* global google */
import React from "react";

class PlacesAutocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ['(cities)'], componentRestrictions: {country: "us"} }
    );
    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.props.onPlaceChanged(place);
  }

  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon">
            <i className="fa fa-map-marker-alt prefix"></i>
          </span>
        </div>
        <input
          ref={this.autocompleteInput}
          id={this.props.id}
          type={this.props.type}
          className={this.props.className}
          placeholder={this.props.placeholder}
        />
      </div>
    );
  }
}

export default PlacesAutocomplete;