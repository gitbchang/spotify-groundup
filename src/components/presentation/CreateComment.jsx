import React, {Component} from 'react';

import {APIManager} from '../../utils/';

class CreateComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: {
        username: '',
        body: ''
      }
    }
  }

  updateComment = (e) => {
    let commentObject = Object.assign({}, this.state.comment);

    // we have to make sure the id's match the state key values this way but it is
    // neater
    commentObject[e.target.id] = e.target.value;
    this.setState({comment: commentObject});

    // if(e.target.id === 'comment-user') {   commentObject['user'] =
    // e.target.value;   this.setState({comment: commentObject}); } else
    // if(e.target.id === 'comment-body') {   commentObject['body'] =
    // e.target.value;   this.setState({comment: commentObject}); }

  }

  submitComment = () => {
    // pass back the new comment DATA to the Comment Container(Smart Component)
    this.props.newComments(this.state.comment);

  }

  render() {
    return (
      <div>
        <h3>Create Comment</h3>
        <input
          id='username'
          onChange={this.updateComment}
          className="form-control"
          type="text"
          placeholder="Username"/><br/>

        <input
          id='body'
          onChange={this.updateComment}
          className="form-control"
          type="text"
          placeholder="Comment"/><br/>

        <button onClick={this.submitComment} className="btn btn-info" type="submit">Submit Comment</button>
      </div>
    );
  }
}

export default CreateComment;