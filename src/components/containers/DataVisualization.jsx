import React, {Component} from 'react';
import axios from 'axios';
import BarChart from 'britecharts/dist/umd/bar.min';
import colors from 'britecharts/src/charts/helpers/colors';
import miniTooltip from 'britecharts/src/charts/mini-tooltip';
// import d3Selection from 'd3-selection/build/d3-selection';
const d3Selection = require('d3-selection');
import {DataWelcome} from '../presentation';
class DataVisualization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spotifyAccessToken: localStorage.getItem('spotifyAccessToken'),
      spotifyRefreshToken: localStorage.getItem('spotifyRefreshToken'),
      topTracks: []
    }
  }
  componentDidMount() {
    this.getTopTracks();
  }
  createBarChart = () => {
    var barContainer = d3Selection.select('#d3area');
    var barChart = new BarChart();
    var tooltip = miniTooltip();
    var toolTipContainer; 
    const dataset = this.createBarChartData();
    if (barContainer.node()) {
      barChart
        .margin({left: 120, right: 20, top: 20, bottom: 5})
        .percentageAxisToMaxRatio(1.3)
        .yAxisPaddingBetweenChart(30)
        .horizontal(true)
        .colorSchema(colors.colorSchemas.britechartsColorSchema)
        .width(700)
        .height(300)
        .on('customMouseOver', tooltip.show) 
        .on('customMouseMove', tooltip.update)
        .on('customMouseOut', tooltip.hide);
    }
    barContainer
      .datum(dataset)
      .call(barChart);
    toolTipContainer = d3Selection.select('#d3area .bar-chart .metadata-group');
    toolTipContainer.datum([]).call(tooltip);
  }
  createBarChartData = () => {
    let currentTop10 = Object.assign([], this.state.topTracks);
    let acousticnessAvg = 0;
    let danceabilityAvg = 0;
    let energyAvg = 0;
    let instrumentalnessAvg = 0;
    let valenceAvg = 0;
    currentTop10.forEach((track, i) => {
      acousticnessAvg += track.acousticness;
      danceabilityAvg += track.danceability;
      energyAvg += track.energy;
      instrumentalnessAvg += track.instrumentalness;
      valenceAvg += track.valence
    });
    acousticnessAvg = (acousticnessAvg / currentTop10.length);
    danceabilityAvg = (danceabilityAvg / currentTop10.length);
    energyAvg = (energyAvg / currentTop10.length);
    instrumentalnessAvg = (instrumentalnessAvg / currentTop10.length);
    valenceAvg = (valenceAvg / currentTop10.length);
    console.log('acousticness avg', acousticnessAvg);
    return [
      {
        value: acousticnessAvg,
        name: 'Acousticness'
      }, {
        value: danceabilityAvg,
        name: 'Danceability'
      }, {
        value: energyAvg,
        name: 'Energy'
      }, {
        value: instrumentalnessAvg,
        name: 'Instrument'
      }, {
        value: valenceAvg,
        name: 'Valence'
      }
    ];
  }

  // redrawChart = () => { let container = d3.select('.js-chart-container'); let
  // newContainerWidth = container.node() ?
  // container.node().getBoundingClientRect().width : false; // Setting the new
  // width on the chart lineChart.width(newContainerWidth); // Rendering the chart
  // again container.datum(data).call(lineChart); };
  getTopTracks = () => {
    const self = this;
    let access_token = localStorage.getItem('spotifyAccessToken');
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/me/top/tracks?limit=10',
      headers: {
        'Authorization': 'Bearer ' + access_token
      },
        responseType: 'json'
      })
      .then(function (response) {
        console.log(response.data.items);
        let trackArray = response.data.items;
        let currentTrackState = Object.assign([], self.state.topTracks);
        trackArray.map((track, i) => {
          let trackObj = {
            trackName: track.name,
            artistNames: track
              .artists
              .map((artist) => {
                return artist.name
              }),
            spotifyTrackId: track.id
          }
          currentTrackState.push(trackObj);
        })
        self.setState({topTracks: currentTrackState});
      });
  }
  getTopTrackIds = (array) => {
    let trackIds = [];
    array.map((track) => {
      trackIds.push(track.spotifyTrackId)
    });
    return trackIds;
  }
  getAudioFeatures = () => {
    let trackIds = this.getTopTrackIds(this.state.topTracks);
    // trackIds.toString(); https://api.spotify.com/v1/audio-features?ids=
    // console.log('string track id', trackIds.toString());
    const self = this;
    axios({
      method: 'get',
      url: 'https://api.spotify.com/v1/audio-features?ids=' + trackIds.toString(),
      headers: {
        'Authorization': 'Bearer ' + this.state.spotifyAccessToken
      },
        responseType: 'json'
      })
      .then(function (response) {
        console.log("track audio features", response.data.audio_features);
        let audioFeaturesArray = response.data.audio_features;
        // add each audio feature to the track object in state
        let currentTrackState = Object.assign([], self.state.topTracks);
        console.log("current track state", currentTrackState);
        for (var i = 0; i < currentTrackState.length; i++) {
          currentTrackState[i].acousticness = audioFeaturesArray[i].acousticness;
          currentTrackState[i].danceability = audioFeaturesArray[i].danceability;
          currentTrackState[i].instrumentalness = audioFeaturesArray[i].instrumentalness;
          currentTrackState[i].liveness = audioFeaturesArray[i].liveness;
          currentTrackState[i].loudness = audioFeaturesArray[i].loudness;
          currentTrackState[i].energy = audioFeaturesArray[i].energy;
          currentTrackState[i].tempo = audioFeaturesArray[i].tempo;
          currentTrackState[i].valence = audioFeaturesArray[i].valence;
        }
        self.setState({topTracks: currentTrackState});
        self.createBarChart();
      });
  }
  render() {
    return (
      <div className='min-vh-100 pa5 ph7-l'>
        <a
          className="f6 grow no-underline br-pill ba ph3 pv2 mb2 dib white hover-hot-pink pointer"
          onClick={this.getAudioFeatures}>Get Audio Features</a>
        <div className=''>
          <h1 className='white-80'>Top 10 Tracks average stats</h1>
          <div id='d3area'></div>
        </div>
      </div>
    );
  }
}
export default DataVisualization;
