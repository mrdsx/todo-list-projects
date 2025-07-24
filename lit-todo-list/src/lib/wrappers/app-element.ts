import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("app-element")
export class AppElement extends LitElement {
  render() {
    return html`<slot />`;
  }

  static styles = css`
    :host {
      display: flex;
      justify-content: center;
      text-align: center;
      background: grey;
      height: 100vh;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-element": AppElement;
  }
}
