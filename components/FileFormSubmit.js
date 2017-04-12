import React, { Component } from 'react';

class FileFormSubmit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showError: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    // ensures that a file is selected
    // if not, an error message is displayed
    if (this.form.file.value) {
      this.form.submit();
    } else {
      this.setState({ showError: true });
    }
  }

  render() {
    const showError = this.state.showError;

    return (
      <div className="form-container">
        <p>
          Choose a file to upload to the server
        </p>
        <form
          ref={(form) => { this.form = form; } } 
          onSubmit={this.handleSubmit} 
          action="/imagesize" 
          method="post" 
          encType="multipart/form-data"
        >
          <input type="file" name="file" />
          <input type="submit" value="Submit" />
        </form>
        {showError 
          ? <p className="errorMessage">You must select a file before submitting</p>
          : null
        }
      </div>
    );
  }
}

export default FileFormSubmit;
