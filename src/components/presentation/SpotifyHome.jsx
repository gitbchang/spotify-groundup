import React, {Component} from 'react';

class SpotifyHome extends Component {
  render() {
    return (
      <nav className="db dt-l w-100 border-box pa5 ph7-l bg-black">
        <a className="db dtc-l v-mid center link dim w-100 w-25-l tc tl-l mb2 " href="/" title="Home">
          <img src="/images/spotify-logo.svg" className="dib w4 h4 br-100" alt="Site Name" />
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <a className="link dim hot-pink f6 f5-l dib mr3 mr4-l" href="/zones" title="Home">Zones</a>
          <a className="link dim hot-pink f6 f5-l dib mr3 mr4-l" href="/comments" title="How it Works">Comments</a>
          <a className="link dim hot-pink f6 f5-l dib" href="#" title="Contact">About</a>
        </div>
      </nav>
        
    )
  }
}

export default SpotifyHome;