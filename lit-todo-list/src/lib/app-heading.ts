import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import litIcon from "../assets/lit.svg";

@customElement("app-heading")
export class AppHeading extends LitElement {
  render() {
    return html`
      <div class="app-heading">
        <img src=${litIcon} alt="Lit Icon" />
        <span>Lit Todo List</span>
      </div>
    `;
  }

  static styles = css`
    .app-heading {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
      font-size: 1.5rem;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "app-element": AppHeading;
  }
}
