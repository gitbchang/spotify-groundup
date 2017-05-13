import React, { Component } from 'react';

class DataWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userProfile: localStorage.getItem('spotifyUserProfile')
    }
  }
  
  render() {
    return (
      <div>
        Hello
      </div>
    );
  }
}

export default DataWelcome;