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
  console.log(values);
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);
