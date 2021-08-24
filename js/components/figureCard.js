class FigureCounter extends HTMLElement {
  constructor() {
    super();
    let template = document.getElementById("figure").content;
    this.shadow = this.attachShadow({ mode: "open" }).appendChild(
      template.cloneNode(true)
    );
  }
}

customElements.define("figure-counter", FigureCounter);
