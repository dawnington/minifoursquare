import Dispatcher from '../dispatcher/Dispatcher';
import { getLocation } from '../util/MapUtil';
import exploreVenues from '../util/FourSquareUtil';
import MapConstants from '../constants/MapConstants';
import VenueConstants from '../constants/VenueConstants';

function receiveLocation(location) {
  Dispatcher.dispatch({
    actionType: MapConstants.LOCATION_RECEIVED,
    location,
  });
}

function receiveVenues(venues) {
  Dispatcher.dispatch({
    actionType: VenueConstants.VENUES_RECEIVED,
    venues,
  });
}

function fetchLocation() {
  getLocation(receiveLocation);
}

function fetchVenues(location) {
  exploreVenues(location, receiveVenues);
}

export { fetchLocation, fetchVenues };
