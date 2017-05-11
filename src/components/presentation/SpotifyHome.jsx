import React, {Component} from 'react';

class SpotifyHome extends Component {
  render() {
    return (
      <nav className="db dt-l w-100 border-box pa5 ph7-l bg-black">
        <a className="db dtc-l v-mid center link dim w-100 w-25-l tc tl-l mb2 " href="/" title="Home">
          <img src="/images/spotify-logo.svg" className="dib w4 h4 br-100" alt="Site Name" />
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <a className="link white f6 f5-l dib mr3 mr4-l hover-hot-pink" href="/datavisual" title="Data Visuals">Data Visuals</a>
          <a className="link white  f6 f5-l dib mr3 mr4-l hover-hot-pink" href="/favorites" title="Favorites">Favorites</a>
          <a className="link white  f6 f5-l dib hover-hot-pink" href="/about" title="About">About</a>
        </div>
      </nav>
        
    )
  }
}

export default SpotifyHome;