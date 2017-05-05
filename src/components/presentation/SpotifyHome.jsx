import React, {Component} from 'react';

class SpotifyHome extends Component {
  render() {
    return (
      <nav className="db dt-l w-100 border-box pa5 ph7-l">
        <a className="db dtc-l v-mid hot-pink link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
          <img src="http://tachyons.io/img/logo.jpg" class="dib w2 h2 br-100" alt="Site Name" />
        </a>
        <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
          <a className="link dim hot-pink f6 f5-l dib mr3 mr4-l" href="#" title="Home">Home</a>
          <a className="link dim hot-pink f6 f5-l dib mr3 mr4-l" href="#" title="How it Works">How it Works</a>
          <a className="link dim hot-pink f6 f5-l dib mr3 mr4-l" href="#" title="Blog">Blog</a>
          <a className="link dim hot-pink f6 f5-l dib mr3 mr4-l" href="#" title="Press">Press</a>
          <a className="link dim hot-pink f6 f5-l dib" href="#" title="Contact">Contact</a>
        </div>
      </nav>
        
    )
  }
}

export default SpotifyHome;