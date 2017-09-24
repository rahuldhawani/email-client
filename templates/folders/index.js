const folder = (data, selectedLabel) => {
  let renderStr = `
    <h4>Folders</h4>
    `;

  renderStr += `
  <ul class="list-group">`;

  data.forEach((folder) => {
    renderStr += `
    <li class="list-group-item ${selectedLabel === folder.title ? 'active': ''}">
        <a href="/#home?label=${folder.title}">${folder.title} <span class="badge">${folder.unreadCount}</span></a>
    </li>`
  });

  renderStr += '</ul>';
  return renderStr;
};

export default folder;