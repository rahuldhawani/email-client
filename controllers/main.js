import api from '../api';
import Sidebar from './Sidebar';
import EmailListing from './EmailListing';
import Email from './Email';

class MainController {
  constructor() {
    this._label = null;
    this._currentEmailId = null;
    this._data = {
      config: null,
      labelData: null
    }
  }

  _getClientConfig() {
    // get initial config like all labels so that api calls to all labels can go here.
    this._data.config = api.getConfig();
  };

  getSelectedLabelData(label) {
    this._data.labelData = api.label.get(label);
  };

  getEmailById(id) {
    return this._data.labelData.find((email) => {
      return email.mId === id;
    });
  }

  handleEmailDelete(label, emailId) {
    api.email.delete(label, emailId);
    location.replace(`/#home?label=${this._label}`)
  }

  handleEmailFlag(label, emailId, state) {
    api.email.flag(label, emailId, state);
  }

  handleFilterUpdate(label, filters) {
    this._emailListingComponent.data = api.label.get(label, filters);
    this._emailListingComponent.render();
  }


  render(urlParams) {
    this._label = urlParams.label;
    this._currentEmailId = urlParams.id;

    this._getClientConfig();
    this.getSelectedLabelData(this._label);

    this._sidebarComponent = new Sidebar({data: this._data.config, label: this._label});

    this._emailListingComponent = new EmailListing({
      data: this._data.labelData,
      label: this._label,
      onFilterUpdate: this.handleFilterUpdate.bind(this)
    });

    this._emailComponent = new Email({
      email: this.getEmailById(this._currentEmailId),
      label: this._label,
      onEmailDelete: this.handleEmailDelete.bind(this),
      onFlag: this.handleEmailFlag.bind(this)
    });
  }
}

export default new MainController();
