<template>
  <div class="google-map"></div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import * as GoogleMapsLoader from 'google-maps'

  export default {
    name: 'google-map',

    computed: mapGetters({
      config: 'config'
    }),

    mounted () {
      let self = this;
      GoogleMapsLoader.KEY = this.config.googleMaps.apiKey

      GoogleMapsLoader.load((google) => {
        /* eslint-disable no-new */
        const map = new google.maps.Map(this.$el, {
          zoom: 8,
          center: new google.maps.LatLng(31.01657403369596, 31.395087176513687),
          mapTypeId: google.maps.MapTypeId.ROADMAP
        })
        const marker= new google.maps.Marker({
          draggable:true,
          position: new google.maps.LatLng(31.01657403369596, 31.395087176513687),
          map,
          title: "Hello World!",
        });
        google.maps.event.addListener(marker,'dragend',function() {
          map.setCenter(marker.getPosition());
          self.$emit("chooseMapEvent", {
            lat:marker.getPosition().lat(),
            lng:marker.getPosition().lng()
          });
          console.log('marker.getPosition()', marker.getPosition().lat())
          console.log('marker.getPosition()', marker.getPosition().lng())
        });
      })

    }
  }
</script>

<style lang="scss">
  .google-map {
    height: 100%;
  }
</style>
