import React from 'react';
import Map from './Map';
import { fetchLocation } from '../actions/MapActions';
import MapStore from '../stores/MapStore';

const App = React.createClass({
  getInitialState() {
    return { location: { lat: 0, lng: 0 } };
  },

  componentDidMount() {
    this.listener = MapStore.addListener(this.handleLocationChange);
    fetchLocation();
  },

  componentWillUnmount() {
    this.listener.remove();
  },

  handleLocationChange() {
    this.setState({ location: MapStore.location() });
  },

  content() {
    if (MapStore.hasLocation()) {
      return <Map location={this.state.location} />;
    }
    return 'Searching Location....';
  },

  render() {
    return (
      <div className="app">
        {this.content()}
        {this.props.children}
      </div>
    );
  },
});

export default App;
