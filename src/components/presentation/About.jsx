import React, {Component} from 'react';

class About extends Component {
  render() {
    return (
      <div className='vh-75 pa5 ph7-l hot-pink'>
        <article className="pa3 pa5-ns">
          <h1 className="f3 f1-m f-headline-l">About</h1>
          <p className="measure lh-copy">
            This App will use the Spotify API to search for songs and song metrics
          </p>
          <h1 className="f3 f1-m f-headline-l">Technology Used</h1>
          <p className="measure lh-copy">
            React, SpotifyAPI, Webpack
          </p>
        </article>

      </div>
    );
  }
}

export default About;