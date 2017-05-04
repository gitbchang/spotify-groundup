import React, {Component} from 'react';

import { APIManager } from '../../utils/';

// import Comment from '../presentation/Comment';
import { CreateComment, Comment } from '../presentation/';
import styles from './styles';

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentList: []
    }
  }

  componentDidMount() {

    APIManager.get('api/comment', null, (err, response) => {
      if(err) {
        console.log("error", err.message);
        return;
      }
      this.setState({commentList: response.results});
    });    

  }

  submitComment = (comment) => {
    console.log("submitted");
    console.log("comment object", comment);
    // let newComment = Object.assign({}, this.state.comment);

    APIManager.post('api/comment', comment, (err, response) => {
      if(err) {
        console.log("error", err.message);
        return
      }
      console.log("Comment created", JSON.stringify(response));
      let updatedCommentList = Object.assign([], this.state.commentList);
      updatedCommentList.push(response.result);
      this.setState({
        commentList: updatedCommentList
      });
    });

  };

  // updateUsername = (e) => {

  //   let updatedComment = Object.assign({}, this.state.comment);
  //   updatedComment['username'] = e.target.value;

  //   this.setState({comment: updatedComment});
  // }

  // updateBody = (e) => {
  //   let updatedComment = Object.assign({}, this.state.comment);
  //   updatedComment['body'] = e.target.value;

  //   this.setState({comment: updatedComment});
  // }


  render() {
    const allComments = this
      .state
      .commentList
      .map((com, i) => {
        return (
          <li key={i}><Comment index={i} currentComment={com}/></li>
        )
      });

    return (
      <div>
        <h2>All Comments in Zone</h2>
        <div style={styles.comment.commentsBox}>
          <ul style={styles.comment.commentList}>
            {allComments}
          </ul>
          <CreateComment newComments={this.submitComment} />
        </div>
      </div>
    );
  }
}

export default Comments;