import styles from './styles.scss'

const email = (email) => {
  let renderStr = `
    <div class="c-email">
        <div class="c-email__header">
            <h4 class="c-email__subject">
                ${email.subject}
            </h4>
            <div class="c-email__actions">
                <button type="button" id="delete" class="btn btn-default">
                    <span class="glyphicon glyphicon-trash" ></span>
                </button>
              
                <label for="flag"><input ${email.flag ? 'checked' : ''} type="checkbox" id="flag">Flag</label>  
            </div>
        </div>
        <div class="c-email__content"> ${email.content}</div>
    </div>`;

  return renderStr;
};

export default email;