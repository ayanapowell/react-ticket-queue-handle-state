import React from 'react';
import { PropTypes } from 'prop-types';

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();
    props.onNewTicketCreation({
      names: _names.value,
      location: _location.value,
      issue: _issue.value
    });
    _names.value = '';
    _location.value = '';
    _issue.value = '';
  }
  return (
    <div>
      <form onSubmit={handleNewTicketFormSubmission}>
        <input
          type="text"
          id="names"
          placeholder="Pair Names"
          ref={input => {
            _names = input;
          }}
        />
        <br />
        <input
          type="text"
          id="location"
          placeholder="Location"
          ref={input => {
            _location = input;
          }}
        />
        <br />
        <textarea
          id="issue"
          placeholder="Describe your issue."
          ref={textarea => {
            _issue = textarea;
          }}
        />
        <br />
        <button className="btn" type="submit">
          Help!
        </button>
      </form>
    </div>
  );
}

NewTicketForm.propTypes = {
  handleNewTicketFormSubmission: PropTypes.func,
  onNewTicketCreation: PropTypes.func
};

export default NewTicketForm;
