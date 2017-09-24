import spamData from './data/spam';
import inboxData from './data/inbox';

const LOCALSTORAGE_KEY = 'data';

const api = {
  getConfig: () => {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    const toSend = [];
    Object.keys(data).forEach((key) => {
      const unreadEmails = data[key].filter((d) => {
        return d.unread
      });

      const temp = {
        title: key,
        unreadCount: unreadEmails.length
      };

      toSend.push(temp);
    });

    return toSend;
  },

  label: {
    get: (label, filters) => {
      const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      const temp = data[label];

      return temp.filter((email) => {
        return (filters && filters.flag ? email.flag : true);
        // filters can have multiple keys, just loop over to implement multiple filters
      });
    }
  },

  email: {
    delete: (label, id) => {
      const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      let temp = [];
      data[label].forEach((email) => {
        if ( email.mId === id ) {
          data['deletedItems'].push(email);
        } else {
          temp.push(email)
        }
      });

      data[label] = temp;
      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    },

    flag: (label, id, state) => {
      const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
      let temp = data[label];
      temp = temp.map((email) => {
        if ( email.mId === id ) {
          email.flag = state;
        }
        return email;
      });

      data[label] = temp;

      localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
    }
  }
};

const initApi = () => {
  // to store the data in localstorage
  // store the data one time to mimic API use case.
  // LocalStorage now acts as a backend and api factory functions acts as endpoints.
  const data = localStorage.getItem(LOCALSTORAGE_KEY);
  if ( !data ) {
    const emails = {
      'inbox': inboxData,
      'spam': spamData,
      'deletedItems': []
    };

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(emails));
  }
};

initApi();

export default api;