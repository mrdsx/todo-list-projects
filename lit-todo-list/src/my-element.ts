import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./lib/app-heading.ts";
import "./lib/todos-area.ts";
import "./lib/wrappers/app-element.ts";
import "./lib/wrappers/container-element.ts";

@customElement("my-element")
export class MyElement extends LitElement {
  render() {
    return html`
      <app-element>
        <container-element>
          <app-heading></app-heading>
          <todos-area></todos-area>
        </container-element>
      </app-element>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-element": MyElement;
  }
}
