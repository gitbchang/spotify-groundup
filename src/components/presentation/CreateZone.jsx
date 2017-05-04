import React, {Component} from 'react';

class CreateZone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newZone: {
        name: '',
        zipCode: '',
        numComments: 0
      }
    }
  }
  
  updateZone = (e) => {
    let newTempZone = Object.assign({}, this.state.newZone);
    newTempZone[e.target.id] = e.target.value;
    this.setState({
      newZone: newTempZone
    });
  }

  submitZone = (newZone) => {
    this.props.onNewZone(this.state.newZone);
  }

  render() {
    return (
      <div>
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

export default CreateZone;