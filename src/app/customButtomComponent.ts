export class CustomButtonComponent {
  eGui!: HTMLDivElement;
  eButton: any;
  eventListener!: () => void;

  init() {
    this.eGui = document.createElement('div');
    let eButton = document.createElement('button');
    eButton.className = 'btn-simple';
    eButton.textContent = '刪除';
    this.eventListener = () => alert('刪除此英雄！');
    eButton.addEventListener('click', this.eventListener);
    this.eGui.appendChild(eButton);
  }

  getGui() {
    return this.eGui;
  }

  refresh() {
    return true;
  }

  destroy() {
    if (this.eButton) {
      this.eButton.removeEventListener('click', this.eventListener);
    }
  }
}
