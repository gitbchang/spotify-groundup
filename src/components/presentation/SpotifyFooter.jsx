import React, {Component} from 'react';
import {StickyContainer, Sticky} from 'react-sticky';

class SpotifyFooter extends Component {
  render() {
    return (
      <div className='bg-black mt3' style={{bottom: 0}}>
        <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
          <a href='http://github.com/gitbchang' className='dim mid-gray hover-white-90' >
            <small className="f6 db tc">© 2017
            <b className="ttu">http://github.com/gitbchang</b>., All Rights Reserved</small>
          </a>
        </footer>
      </div>
    );
  }
}

export default SpotifyFooter;