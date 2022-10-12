function geoFindMe() {

    
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("current pos: ");
      console.log(latitude);
      console.log(longitude);

      

      //Root'd Cafe, Cottonwood
      const RLat = 40.610850;
      const RLong = -111.817960;

      //Biscotts Bakery, South Jordan
      const BLat = 40.543280;
      const BLong = -112.038010;

      //Nostalgia Cafe, SLC
      const NLat = 40.766870;
      const NLong = -111.883540;

      //Kneaders, West Jordan
      const KLat = 40.5348283;
      const KLong = -111.9859438;

      //Bubble N Bean, Draper
      const BBLat = 40.521780;
      const BBLong = -111.864840;

      //Sunday's Best, Sandy
      const SBLat = 40.557710;
      const SBLong = -111.890960;

      //Gourmandise, testing, 40.527260, -111.870650
      //now using gateway academcy (within 0.5), 40.539250, -111.872010
      //rimrock construction, 40.538530, -111.871640
      //current location, at UofU, for testing
      //const CurrLat = 40.527260;
      //const CurrLong = -111.870650;

      //holds all the lats and longs of each cafe 
      const Lats = [RLat, BLat, NLat, KLat, BBLat, SBLat];
      const Longs = [RLat, BLat, NLat, KLat, BBLong, SBLong];

      console.log("/* start debug testing: ");
      console.log("2 mile: " + distance(0,0.02898550, 0, 0 ));
      console.log("1 mile: " + distance( 0.01449275,0, 0, 0)   );
      console.log("0.5 mile: " + distance(0.00724637,0,0,0));
      //console.log("gourmandise dist: " + distance(latitude, CurrLat, longitude, CurrLong));
      console.log("/* end debug testing");

      const lat1 = 10; 

      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
     // mapLink.textContent = `Latitude: ${lat1} °, Longitude: ${longitude} °`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;


      //TODO: figure out why I get NaN for last iteration of for-loop


      for(let i=0 ; i<Lats.length ; i++){
        //var lambda =( Math.sqrt(Math.pow((Math.abs(Lats[i]) - Math.abs(latitude)),2) + Math.pow((Math.abs(longitude) - Math.abs(Longs[i])),2) ) ); 
        console.log("for loop works");
        
       // console.log("1st term: " + Math.pow(    (Math.abs(Lats[i]) - Math.abs(latitude))    ,2) );
        //console.log("2nd term: " + Math.pow((Math.abs(Longs[i]) - Math.abs(longitude)),2)  ); 
        //var f0 = Math.pow(    (Math.abs(Lats[i]) - Math.abs(latitude))    ,2);
        //var f1 =  Math.pow((Math.abs(Longs[i]) - Math.abs(longitude)),2) ; 
        //var fProduct = f0 + f1; 
        //var fSQRT = Math.sqrt(fProduct*10);
        //var fSQRT = Math.sqrt(fProduct);
        //console.log("addition part: " +   ( f0+f1  )     );
        //console.log("sqrt portion: " + fSQRT       );
        //var lambda = Math.sqrt((Math.pow(latitude-Lats[i],2))+(Math.pow(longitude-Longs[i],2)));
        var lambda = distance(latitude, Lats[i], longitude, Longs[i]);
        console.log("lambda value: " + lambda);
        //two mile radius
        //0.0289850 ; 0.036630 
        
        //console.log("mile 2 value " + Math.sqrt(Math.pow((Math.abs(latitude) - Math.abs(Lats[i])),2) + (Math.abs(longitude) - Math.abs(Longs[i],2)) ));
        //longitude and latitude were switched between 2 miler and lambda
       // console.log("old lambda value: "  + Math.sqrt(Math.pow((Math.abs(longitude) - Math.abs(Longs[i])),2) + Math.pow((Math.abs(latitude) - Math.abs(Lats[i])),2)));
        
        //0.04671067, const for 2 miles, 0.046711 
      if(  lambda  <= 3.22304054625585 ){ 
        window.alert("at least within a 2 mile radius");
        console.log("zero if statement called");
        //one mile radius
        //lat & long: 0.007246, 0.009157
        //0.01167712, 0.011677 

        //omg i legit had the last 2 if-statements switched 
        //old: Math.sqrt(Math.pow((Math.abs(latitude) - Math.abs(Lats[i])),2) + (Math.abs(longitude) - Math.abs(Longs[i],2)) ) <  0.011677
      if(   lambda <=  1.6115202731279286  ) {
        console.log("first if statement called");
        window.alert("within a 1 mile radius");
        
        console.log(document.body.offsetWidth);
        //half mile radius
        //lat & long: 0.014492, 0.018315
        //const: 0.02335502, 
        //old: Math.sqrt(Math.pow((Math.abs(latitude) - Math.abs(Lats[i])),2) + (Math.abs(longitude) - Math.abs(Longs[i],2)) ) <  0.02335502
        //old const: 0.011677
        if ( lambda <=  0.805759580589331 ) {
            window.alert("within a 0.5 mile radius");
            console.log("second if statement called");
            //the for-loop can cause alert to pop up mult. times bc a lot of places near me serve avocado toast
            //break statement below causes the for-loop to stop if all 3 if-statements are true, at least once
            break; 
        }
      }
    }


      }



    }

    function distance(lat1, lat2, lon1, lon2) {

// The math module contains a function
// named toRadians which converts from
// degrees to radians.
lon1 =  lon1 * Math.PI / 180;
lon2 = lon2 * Math.PI / 180;
lat1 = lat1 * Math.PI / 180;
lat2 = lat2 * Math.PI / 180;

// Haversine formula
let dlon = lon2 - lon1;
let dlat = lat2 - lat1;
let a = Math.pow(Math.sin(dlat / 2), 2)
  + Math.cos(lat1) * Math.cos(lat2)
  * Math.pow(Math.sin(dlon / 2),2);

let c = 2 * Math.asin(Math.sqrt(a));

// Radius of earth in kilometers. Use 3956
// for miles
let r = 6371;

// calculate the result
return(c * r);
}
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    } 
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#find-me').addEventListener('click', geoFindMe);




  //OLD NOTES: 
  //(latitude <= (Lats[i]+0.028985) && longitude <= (Longs[i]+0.036630 &&   latitude >= (Lats[i]-0.028985) && longitude >= (Longs[i]-0.036630)))  
        //|| (latitude <= (Lats[i]-0.028985) && longitude <= (Longs[i]-0.036630 &&    latitude >= (Lats[i]+0.028985) && longitude >= (Longs[i]+0.036630)) ) 

        //4419401382342

            //maybe just start using an fucking equation of a circle.............................
        //if(current location < diamater of circle that contains cafe)
        //so current location is a point/vector of (x,y) and