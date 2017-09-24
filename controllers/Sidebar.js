import FolderTemplate from '../templates/folders';

class Sidebar {
  constructor({data, label}) {
    this.data = data;
    this.label = label;
    this.render();
  }

  render() {
    $('#sidebar').html(FolderTemplate(this.data, this.label))
  }
}

export default Sidebar;