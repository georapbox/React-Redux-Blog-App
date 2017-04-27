import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';

class PostsNew extends Component {
  onFormSubmit(values) {
    console.log(values);
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

  render() {
    const {handleSubmit} = this.props;

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit.bind(this))}>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="content" label="Post Content" component={this.renderField} />
        <Link to="/" className="btn btn-danger mr-1">Cancel</Link>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

PostsNew.propTypes = {
  handleSubmit: PropTypes.func
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
})(PostsNew);
