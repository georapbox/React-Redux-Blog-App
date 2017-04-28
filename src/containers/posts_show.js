import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import Alert from '../components/alert';

class PostsShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchError: false,
      deleteError: false
    };
  }

  componentDidMount() {
    if (this.props.post) {
      return;
    }

    const {id} = this.props.match.params;

    this.props.fetchPost(id)
      .then(response => {
        if (response.error) {
          this.setState({fetchError: true});
          return response;
        }
      });
  }

  onDeleteClick() {
    const {id} = this.props.match.params;

    this.props
      .deletePost(id)
      .then(response => {
        if (response.error) {
          console.error(response.payload);
          this.setState({deleteError: true});
          return response;
        }

        this.setState({deleteError: false});
        this.props.history.push('/');
      });
  }

  onHideError() {
    this.setState({fetchError: false, deleteError: false});
  }

  render() {
    const {post} = this.props;

    if (!post) {
      return (
        <div>
          <span className={`${this.state.fetchError ? 'd-none' : ''}`}>
            Loading...
          </span>

          <Alert
            type="danger"
            message="Could not fetch post!"
            visible={this.state.fetchError}
            customClass="mt-3"
            showCloseButton={false}/>
        </div>
      );
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

        <Alert
          type="danger"
          message="Could not delete post!"
          visible={this.state.deleteError}
          customClass="mt-3"
          onHideError={this.onHideError.bind(this)} />
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
