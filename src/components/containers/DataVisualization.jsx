import React, { Component } from 'react';

class DataVisualization extends Component {

  getSongStats = () => {
    let access_token = localStorage.getItem('spotifyAccessToken');

    axios({
      method:'get',
      url:'http://bit.ly/2mTM3nY',
      headers: {'Authorization': 'Bearer ' + access_token},
      responseType:'stream'
    })
      .then(function(response) {
  
    });

    /* 
                $.ajax({
                url: 'https://api.spotify.com/v1/me',
                headers: {
                  'Authorization': 'Bearer ' + access_token
                },
                success: function(response) {
                  userProfilePlaceholder.innerHTML = userProfileTemplate(response);

                  $('#login').hide();
                  $('#loggedin').show();
                }
            });
          } else {
              // render initial screen
              $('#login').show();
              $('#loggedin').hide();
          }
    
    */
  }

  render() {
    return (
      <div className='min-vh-100 pa5 ph7-l hot-pink'>
        Data Visualization!
      </div>
    );
  }
}

export default DataVisualization;