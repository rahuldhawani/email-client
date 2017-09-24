import EmailTemplate from '../templates/email';

class Email {
  constructor({ email, label, onEmailDelete, onFlag }) {
    this.email = email;
    this.onEmailDelete = onEmailDelete;
    this.onFlag = onFlag;
    this.label = label;
    this.render();
    this._bindEvents();
  }

  _bindEvents() {
    $('#delete').on('click', () => {
      this.onEmailDelete(this.label, this.email.mId)
    });

    $('#flag').on('change', (e) => {
      this.onFlag(this.label, this.email.mId, e.target.checked)
    })
  }

  render() {
    if ( this.email ) {
      $('#email').html(EmailTemplate(this.email))
    }
    else {
      $('#email').html('Select an item to read')
    }
  }
}

export default Email;