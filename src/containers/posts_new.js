import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  renderField(field) {
    return (
      <div className="form-group row">
        <label htmlFor="post_title" className="col-sm-2 col-form-label">{field.label}</label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control" id="post_title"
            {...field.input}
          />
          <span className="text-danger">{field.meta.error}</span>
        </div>
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field name="title" label="Title" component={this.renderField} />
        <Field name="categories" label="Categories" component={this.renderField} />
        <Field name="content" label="Post Content" component={this.renderField} />
      </form>
    );
  }
}

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
