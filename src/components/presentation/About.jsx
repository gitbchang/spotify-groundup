import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div className='vh-75 pa5 ph7-l'>
        <article className="pa3 pa5-ns">
          <h1 className="f3 f1-m f-headline-l hot-pink">About</h1>
          <p className="measure lh-copy white">
            This App will use the Spotify API to search for songs and song metrics
          </p>
          <h1 className="f3 f1-m f-headline-l hot-pink">Technology / Node Packages Used</h1>
          <p className="measure lh-copy white">
            Mongo, React, React-Router, SpotifyAPI
          </p>
          <p className="measure lh-copy white">
            Tachyons, Axios, Webpack
          </p>
        </article>

      </div>
    );
  }
}

export default About;