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
      <input
        ref={this.autocompleteInput}
        id={this.props.id}
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
      />
    );
  }
}

export default PlacesAutocomplete;