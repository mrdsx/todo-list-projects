import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-element")
export class MyElement extends LitElement {
  render() {
    return html` <div>Lit Todo List</div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-element": MyElement;
  }
}
