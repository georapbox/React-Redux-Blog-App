import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {map} from 'lodash';
import {fetchPosts} from '../actions';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-sm-right mb-3">
          <Link className="btn btn-primary" to="/posts/new">New Post</Link>
        </div>

        <h3>Posts</h3>

        <ul className="list-group">
          {this.renderPosts()}
        </ul>
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
