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

const superagentUtil = {
  get: (url, params, callback) => {
    superagent
      .get(url)
      .query(params)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          callback(err, null);
        }
        const confirmation = response.body.confirmation;
        // we need to check if our API call was a success. The first error handling
        // checks if we hit the server correctly.
        if (confirmation != 'success') {
          callback({
            message: response.body.message
          }, null);
        } else {
          callback(null, response.body);
        }

      });
  },
  post: (url, body, callback) => {
    superagent
      .post(url)
      .send(body)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          callback(err, null);
        }
        const confirmation = response.body.confirmation;
        // we need to check if our API call was a success. The first error handling
        // checks if we hit the server correctly.
        if (confirmation != 'success') {
          callback({
            message: response.body.message
          }, null);
        } else {
          callback(null, response.body);
        }
        
      })
  },
  put: () => {}
};

export default axiosUtil;
// export default superagentUtil;
