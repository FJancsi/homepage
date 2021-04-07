<template>
  <div class="gps">
    <h1>GPS info</h1>
    <pre>
      {{status}}
      longitude: {{gpsInfo.lon}} 
      latitude: {{gpsInfo.lat}}
      altitude: {{gpsInfo.alt}} meter
      speed: {{gpsInfo.sp}} km/h
      direction: {{gpsInfo.head}}
    </pre>
  </div>
</template>

<script>
const geoOptions = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000
};
const getDirection = (headingDeg) => {
  switch (true) {
    case headingDeg === 0:
      return 'N';
    case headingDeg > 0 && headingDeg < 90:
      return 'NE';
    case headingDeg === 90:
      return 'E';
    case headingDeg > 90 && headingDeg < 180:
      return 'SE';
    case headingDeg === 180:
      return 'S';
    case headingDeg > 180 && headingDeg < 270:
      return 'SW';
    case headingDeg === 270:
      return 'W';
    case headingDeg > 270 && headingDeg < 360:
      return 'NW';
    default:
      return 'unknown';
  }
};

let watchID = null;
export default {
  data: function () {
    return {
      gpsInfo: {},
      status: ''
    }
  },
  mounted: function () {
    this.$nextTick(async function() {
      try {
        if (!navigator.geolocation) {
          this.status = 'Geolocation is not supported by your browser!';
        } else {
          this.status = 'Locating ...';

          const success = (position) => {
            const {latitude, longitude, altitude, speed, heading} = position.coords;
            this.gpsInfo.lat = latitude;
            this.gpsInfo.lon = longitude;
            this.gpsInfo.alt = Math.round(altitude);
            this.gpsInfo.sp = speed ? Math.round(speed / 3.6) : 0;
            this.gpsInfo.head = getDirection(heading);
            this.status = '';
          };
          const error = () => {
            this.status = 'Unable to retrieve your location';
          };

          watchID = navigator.geolocation.watchPosition(success.bind(this), error.bind(this), geoOptions);
        }
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(`Catch ${e}`);
        navigator.geolocation.clearWatch(watchID);
      }
    });
  },
  beforeDestroy: function () {
    navigator.geolocation.clearWatch(watchID);
  }
}
</script>
