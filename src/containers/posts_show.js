import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPost} from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    if (this.props.post) {
      return;
    }

    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to posts</Link>
        <br/><br/>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

PostsShow.propTypes = {
  fetchPost: PropTypes.func,
  match: PropTypes.object,
  post: PropTypes.object
};

function mapStateToProps({posts}, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {fetchPost})(PostsShow);
