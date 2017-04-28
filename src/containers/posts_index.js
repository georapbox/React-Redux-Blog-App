import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {map, truncate} from 'lodash';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return map(this.props.posts, post => {
      return (
        <Link className="list-group-item list-group-item-action flex-column align-items-start" to={`/posts/${post.id}`} key={post.id}>
          <h5 className="mb-0">{post.title}</h5>
          <p className="mb-2">
            <small>
              <span className="font-weight-bold">Category: </span>
              {post.categories}
            </small>
          </p>
          <p className="mb-0">{truncate(post.content, {length: 100})}</p>
        </Link>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-sm-right mb-3">
          <Link className="btn btn-primary" to="/posts/new">New Post</Link>
        </div>

        <h2 className="mb-3">Posts</h2>

        <div className="list-group">
          {this.renderPosts()}
        </div>
      </div>
    );
  }
}

PostsIndex.propTypes = {
  fetchPosts: PropTypes.func,
  posts: PropTypes.object
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);
