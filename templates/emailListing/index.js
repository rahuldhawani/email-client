import styles from './styles.scss'

const emailListing = (data, label, filters) => {
  let renderStr = `
<div class="email-list-header">
    <h4 class="u-inline-block">Emails</h4>
    <div>
        <input ${filters.flag ? 'checked' : '' } type="checkbox" id="show-flag-emails"/>
        <label for="show-flag-emails">Show only Flagged</label>
    </div>
</div>`;
  renderStr += `<ul class="list-group">`;

  data.forEach((email) => {
    renderStr += `
    <li class="list-group-item ">
        <a href="/#home?label=${label}&id=${email.mId}" class="c-email-list">
              <div class="c-email-list__subject">${email.subject}</div>
              <div class="c-email-list__content" title="${email.content}">${email.content}</div>
        </a>
    </li>`
  });
  return renderStr;
};

export default emailListing;