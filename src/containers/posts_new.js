import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';
import Alert from '../components/alert';
import Spinner from '../components/spinner';

class PostsNew extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      isSending: false
    };
  }

  onFormSubmit(values) {
    this.setState({isSending: true});

    this.props
      .createPost(values)
      .then(response => {
        if (response.error) {
          this.setState({error: true, isSending: false});
          console.error(response.payload);
          return response;
        }

        this.setState({error: false, isSending: false});
        this.props.history.push('/');
      });
  }

  renderField(field) {
    const {label, input, meta: {touched, error}} = field;
    const className = `form-group row ${touched && error ? 'has-danger' : ''}`;

    return (
      <div className={className}>
        <label htmlFor="post_title" className="col-sm-2 col-form-label">{label}</label>

        <div className="col-sm-10">
          <input type="text" className="form-control" id="post_title" {...input} />
          <span className="text-danger">{touched ? error : ''}</span>
        </div>
      </div>
    );
  }

  onHideError() {
    this.setState({error: false});
  }

  render() {
    const {handleSubmit} = this.props;
    const {isSending} = this.state;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="content" label="Post Content" component={this.renderField} />
        <Link to="/" className="btn btn-danger mr-1">Cancel</Link>

        <button type="submit" className={`btn btn-primary ${isSending ? 'd-none' : ''}`}>Submit</button>

        <span className={!isSending ? 'd-none' : ''}>
          <Spinner
            visible={true}
            customClass="d-inline-block ml-2 mr-2"
            width="20px" height="20px" />
          Please wait...
        </span>

        <Alert
          type="danger"
          message="Ooooops!!! Something went terribly wrong!"
          visible={this.state.error}
          customClass="mt-3"
          onHideError={this.onHideError.bind(this)} />
      </form>
    );
  }
}

PostsNew.propTypes = {
  handleSubmit: PropTypes.func,
  createPost: PropTypes.func,
  history: PropTypes.object
};

function validate(values) {
  const errors = {};
  const {title, categories, content} = values;

  if (!title) {
    errors.title = 'Title is a required field';
  }

  if (!categories) {
    errors.categories = 'Categories is a required field';
  }

  if (!content) {
    errors.content = 'Content is a required field';
  }

  // If errors is empty object, the form is fine to submit.
  // If errors has *any* properties, redux-form assumes form is invalid.
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, {createPost})(PostsNew)
);
