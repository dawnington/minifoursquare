import _ from 'lodash';
import { Store } from 'flux/utils';
import Dispatcher from '../dispatcher/Dispatcher';
import MapConstants from '../constants/MapConstants';
import VenueConstants from '../constants/VenueConstants';

const MapStore = new Store(Dispatcher);

let _location = { lat: 0, lng: 0 };
let _venues = {};

function setLocation(location) {
  _location.lat = location.coords.latitude;
  _location.lng = location.coords.longitude;
  MapStore.__emitChange();
}

function setVenues(venues) {
  _venues = venues;
  MapStore.__emitChange();
}

MapStore.location = function () {
  return _location;
};

MapStore.venues = function () {
  return _venues;
};

MapStore.venue = function (id) {
  return _venues[id];
};

MapStore.hasLocation = function () {
  if (_location.lat !== 0) {
    return true;
  }
  return false;
};

MapStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case MapConstants.LOCATION_RECEIVED:
      setLocation(payload.location);
      break;
    case VenueConstants.VENUES_RECEIVED:
      setVenues(payload.venues);
      break;
    default:
      break;
  }
};

export default MapStore;
