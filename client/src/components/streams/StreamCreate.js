import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";

import { createStream } from "../../actions";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    // console.log(formValues);
    this.props.createStream(formValues);
  };

  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    // console.log(meta);
    // return <input {...input} />
    return (
      <div className={`field ${meta.error && meta.touched ? `error` : null}`}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </div>
    );
  };

  render() {
    // console.log(this.props);
    return (
      <>
        <form
          className="ui form error"
          onSubmit={this.props.handleSubmit(this.onSubmit)}
        >
          <Field
            label="Enter Title"
            name="title"
            component={this.renderInput}
          />
          <Field
            label="Enter Description"
            name="description"
            component={this.renderInput}
          />
          <button className="ui button primary">Submit</button>
        </form>
      </>
    );
  }
}

const validateForm = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Title field is mandatory!";
  }
  if (!formValues.description) {
    errors.description = "Description field is mandatory!";
  }
  return errors;
};

const reduxFormConfig = {
  form: "streamCreate",
  validate: validateForm,
};

const formWrapper = reduxForm(reduxFormConfig)(StreamCreate);

export default connect(null, { createStream })(formWrapper);
