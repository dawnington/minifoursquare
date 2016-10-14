import React from 'react';
import MapStore from '../stores/MapStore';

const VenueDetail = React.createClass({
  render() {
    const venue = MapStore.venue(this.props.params.id);
    return (
      <div className="detail">
        <h3>{venue.name}</h3>
        <p>Category: {venue.category}</p>
        <p>Address: {venue.address}</p>
        <p>Rating: {venue.rating}</p>
        <p>Hours: {venue.hours}</p>
        <p>Tip: {venue.tip}</p>
      </div>
    );
  },
});

export default VenueDetail;
