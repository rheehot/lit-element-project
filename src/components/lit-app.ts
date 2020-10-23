import {
  LitElement,
  html,
  property,
  customElement,
  css,
  query,
} from "lit-element";
import "./portal-component";
import { Router } from "@vaadin/router";

@customElement("lit-app")
class LitApp extends LitElement {
  @query("main")
  main = null;

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("load", (e) => {
      this.initRouter();
    });

    window.addEventListener("hashchange", (e) => {
      console.log(e);
    });
  }

  initRouter() {
    const router = new Router(this.main);
    router.setRoutes([
      {
        path: "/",
        component: "portfolio-detail",
        action: () => {
          import("../pages/portfolio-detail");
        },
      },
      {
        path: "/portfolio-detail",
        component: "portfolio-detail",
        action: () => {
          import("../pages/portfolio-detail");
        },
      },
      {
        path: "/portfolio-detail/some",
        component: "portfolio-detail",
        action: () => {
          import("../pages/portfolio-detail");
        },
      },
      {
        path: "/portfolio-detail/:id",
        component: "portfolio-detail",
        action: () => {
          import("../pages/portfolio-detail");
        },
      },
    ]);
  }

  render() {
    return html`
      <main></main>
      <portal-component></portal-component>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-app": LitApp;
  }
}
