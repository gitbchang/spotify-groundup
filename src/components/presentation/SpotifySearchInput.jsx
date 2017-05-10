import React, {Component} from 'react';
import axios from 'axios';
import Autosuggest from 'react-autosuggest';


function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (    
    <span className='absolute--fill hot-pink bg-light-gray' >{suggestion.name}
    </span>
  );
}

class SpotifySearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      suggestions: [],
      isLoading: false
    }
    this.lastRequestId = null;
  }

  updateSearchQuery = (e) => {
    e.preventDefault();
    this.setState({query: e.target.value});
  }
  
  submitQuery = (e) => {
    e.preventDefault();
    this.props.theSearch(this.state.query);
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.loadSuggestions(value);
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  loadSuggestions = (value) => {
        // cancel the previous request
    if(this.lastRequestId !== null) {
        clearTimeout(this.lastRequestId)
    }

    this.setState({
      isLoading: true
    });

    const BASE_URL = 'https://api.spotify.com/v1/search';
    let FETCH_URL = `${BASE_URL}?q=${this.state.query}&type=artist&limit=5`;
    const self = this;
    

    this.lastRequestId = axios({
      method: 'get',
      url: FETCH_URL,
      responseType: 'json'
    }).then(function (response) {
      
      const artists = response.data.artists.items;
      console.log("artist suggestions", artists);
      self.setState({
        isLoading: false,
        suggestions: artists
      });
    });

  }


  render() {
    const { query, suggestions, isLoading } = this.state;  
    const inputProps = {
      placeholder: 'Search an Artist',
      value: query,
      onChange: this.updateSearchQuery,
      type: 'search'
    }
    const status = (isLoading ? 'Loading...' : 'Type to load suggestions');
    return (
      <div className='fl w-100' >
        <form className="pa1 black-80" onSubmit={this.submitQuery}>
          <div className="measure">
            <label htmlFor="name" className="f6 b db mb2 white">Search Songs
            </label>
            <div className='fl w-90 input-reset mb1'>
              <Autosuggest
                suggestions={suggestions}
                onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                getSuggestionValue={getSuggestionValue}
                renderSuggestion={renderSuggestion}
                inputProps={inputProps}
                id="name"                   />
            </div>
            <div className='fl w-10 ph3'>
              <a
                onClick={this.submitQuery}
                className="f6 link br2 ba ph3 pv2 mb2 dib white hover-hot-pink no-underline"                
                href="#0">Search</a>
                <div className='hot-pink mh5'>Status: {status}</div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SpotifySearchInput;