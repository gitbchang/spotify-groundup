import superagent from 'superagent';
import axios from 'axios';

const axiosUtil = {
  get: (url, params, callback) => {
    axios({method: 'get', url: url, params: params, responseType: 'json'})
      .then(function (response) {
        callback(null, response.data);
      })
      .catch(function (error) {
        callback(error, null);
      })
  },
  post: (url, body, callback) => {
    axios({method: 'post', url: url, data: body, responseType: 'json'})
      .then(function (response) {
        const confirmation = response.data.confirmation;
        if (confirmation != 'success') {
          callback({message: response}, null);
        } else {
          callback(null, response.data);
        }
      })
      .catch(function (error) {
        callback(error, null);
      });
  }
};



export default axiosUtil;
