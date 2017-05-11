import React, {Component} from 'react';

class SpotifySearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    }
  }

  updateSearchQuery = (e) => {
    e.preventDefault();
    this.setState({query: e.target.value});
  }
  
  submitQuery = (e) => {
    e.preventDefault();
    this.props.theSearch(this.state.query);
  }

  render() {
    return (
      <div className='fl w-100' >
        <form className="pa1 black-80" onSubmit={this.submitQuery}>
          <div className="measure">
            <label htmlFor="name" className="f6 b db mb2 white">Search Songs
            </label>
            <div className='fl w-90'>
              <input
                id="name"
                onChange={this.updateSearchQuery}
                className="input-reset ba b--black-20 pa2 mb2 db w-100"
                type="text"
                placeholder="Search an Artist"
                aria-describedby="name-desc"/>
            </div>
            <div className='fl w-10 ph3'>
              <a
                onClick={this.submitQuery}
                className="f6 link br2 ba ph3 pv2 mb2 dib white hover-hot-pink no-underline"                
                >Search</a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SpotifySearchInput;