import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    if (this.props.post) {
      return;
    }

    const {id} = this.props.match.params;
    this.props.fetchPost(id);
  }

  onDeleteClick() {
    const {id} = this.props.match.params;

    this.props
      .deletePost(id)
      .then(response => {
        if (response.error) {
          console.error(response.payload);
          return response;
        }

        this.props.history.push('/');
      });
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <div className="row mb-4">
          <div className="col-6">
            <Link to="/" className="btn btn-secondary">Back</Link>
          </div>

          <div className="col-6 text-right">
            <button
              role="button"
              className="btn btn-danger pull-sm-right"
              onClick={this.onDeleteClick.bind(this)}>
              Delete
            </button>
          </div>
        </div>

        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

PostsShow.propTypes = {
  fetchPost: PropTypes.func,
  deletePost: PropTypes.func,
  match: PropTypes.object,
  post: PropTypes.object,
  history: PropTypes.object
};

function mapStateToProps({posts}, ownProps) {
  return {
    post: posts[ownProps.match.params.id]
  };
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
