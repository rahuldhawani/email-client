import EmailListingTemplate from '../templates/emailListing';

class EmailListing {
  constructor({ data, label, onFilterUpdate }) {
    this.data = data;
    this.label = label;
    this.onFilterUpdate = onFilterUpdate;
    this.filters = {
      flag: false
    };
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    $(document).on('change', '#show-flag-emails', (e) => {
      this.filters = { flag: e.target.checked };
      this.onFilterUpdate(this.label, this.filters)
    });
  }

  render() {
    $('#email-listing').html(EmailListingTemplate(this.data, this.label, this.filters));
  }
}

export default EmailListing;