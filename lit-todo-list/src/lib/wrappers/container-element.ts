import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("container-element")
export class ContainerElement extends LitElement {
  render() {
    return html`<slot />`;
  }

  static styles = css`
    :host {
      padding-top: 10rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "container-element": ContainerElement;
  }
}
