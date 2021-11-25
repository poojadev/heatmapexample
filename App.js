import React, { Component } from 'react';
import {
SafeAreaView,

    Platform,
    StyleSheet,
    View
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import Heatmap from 'react-native-maps';


export default class App extends Component {
  render() {


	let points = [{latitude: 6.83646681, longitude: 79.77121907, weight: 1},
                {latitude: 6.82776681, longitude: 79.871319, weight: 0.6},
                {latitude: 6.82176681, longitude: 79.871319, weight: 0.8},
                {latitude: 6.83776681, longitude: 79.871319, weight: 1},
                {latitude: 6.83176681, longitude: 79.871319, weight: 0.8},
                {latitude: 6.83976681, longitude: 79.861319, weight: 1},



	];
    return (
<View style={styles.container}>
        <MapView
          style={styles.mapStyle}
     	  provider={PROVIDER_GOOGLE}
               style={styles.mapStyle}
	  provider={PROVIDER_GOOGLE}
          region={{
            latitude: 6.82646681,
            longitude: 79.87121907,
             latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
          }}
                customMapStyle={mapStyle}
        >


                      <MapView.Heatmap points={points}
                         opacity={0.5}
                         onZoomRadiusChange={{
                             zoom: [0, 3, 4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17],
                             radius: [10, 10, 15, 20, 30, 60, 80, 100, 120, 150, 180, 200, 250, 250]
                          }}

                         maxIntensity={100}
                         gradientSmoothing={10}
                         heatmapMode={"POINTS_WEIGHT"}
                         />

        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 900,
        width: 400,
    },

      mapStyle: {
            ...StyleSheet.absoluteFillObject,

        position: 'absolute',
        top: 10,
        left: 10,
        right: 10,
        bottom: 10,
      },
})

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
];

//const styles = StyleSheet.create({
//  container: {
//    position: 'absolute',
//    top: 20,
//    left:20,
//    right: 20,
//    bottom: 20,
//    alignItems: 'center',
//    justifyContent: 'flex-end',
//  },
//  mapStyle: {
//    position: 'absolute',
//    top: 0,
//    left: 0,
//    right: 0,
//    bottom: 0,
//  },
//});