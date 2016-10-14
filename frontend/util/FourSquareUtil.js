function exploreVenues(location, callback) {
  const url = `https://api.foursquare.com/v2/venues/explore?ll=${location.lat},${location.lng}&client_id=KB45V00TQB1PCVWOWRWQP3VPYAAB15BEG5VCZVGA3LADGA4B&client_secret=J3R4VAADPG4N4IATDCA2NVOU1Q0FQ5LQ0ZS3TBNTFM2DVKFT&m=foursquare&v=20161010&limit=10`;
  fetch(url)
    .then(
      function (response) {
        if (response.status !== 200) {
          console.log('there was a problem!');
          return;
        }

        response.json().then(function (data) {
          const results = {};
          let i = 0;
          data.response.groups[0].items.forEach((item) => {
            results[i] = (parseResult(item));
            i += 1;
          });
          callback(results);
        });
      }
    )
    .catch(function (err) {
      console.log('Fetch Error :-S', err);
    });
}

function parseResult(result) {
  const obj = {};
  const venue = result.venue;
  obj.name = venue.name;
  obj.address = venue.location.address;
  obj.lat = venue.location.lat;
  obj.lng = venue.location.lng;
  obj.category = venue.categories[0].name;
  obj.rating = venue.rating;
  obj.hours = venue.hours.status;
  obj.tip = result.tips[0].text;
  return obj;
}

export default exploreVenues;
