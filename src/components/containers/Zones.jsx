import React, {Component} from 'react';
import superagent from 'superagent';
import axios from 'axios';

import Zone from '../presentation/Zone';

class Zones extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newZone: {
        name: '',
        zipCode: '',
        numComments: 0
      },
      list: []
    };
  }

  componentDidMount() {

    // const self = this;
    // axios({method: 'get', url: 'api/zone', responseType: 'json'}).then(function (response) {
    //   console.log(response.data);
    //   let results = response.data.results;
    //   self.setState({list: results});
    // });

    superagent
      .get('api/zone')
      .query(null)
      .set('Accept', 'application/json')
      .end((err, response) => {
        if (err) {
          console.log("error", err);
        }
        let results = response.body.results;
        console.log(JSON.stringify(results));
        this.setState({list: results});
      });

  }

  submitZone = () => {
    let updatedZoneList = Object.assign([], this.state.list);
    updatedZoneList.push(this.state.newZone);
    this.setState({list: updatedZoneList});
  }

  updateZone = (e) => {
    let zoneObject = Object.assign({}, this.state.newZone);
    zoneObject[e.target.id] = e.target.value;
    this.setState({newZone: zoneObject});
  }

  render() {
    const listItems = this
      .state
      .list
      .map((zone, i) => {
        return (
          <li key={i}><Zone currentZone={zone}/></li>
        );
      });
    return (
      <div>
        <ol>
          {listItems}
        </ol>

        <input
          id="name"
          onChange={this.updateZone}
          className="form-control"
          type="text"
          placeholder="Zone Name"/><br/>
        <input
          id="zipCode"
          onChange={this.updateZone}
          className="form-control"
          type="text"
          placeholder="Zip Code"/><br/>
        <button onClick={this.submitZone} className="btn btn-success" type="submit">Add Zone</button>
      </div>
    );
  }
}

export default Zones;