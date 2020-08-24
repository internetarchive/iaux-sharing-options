import { html, LitElement } from 'lit-element';
import sharingOptionsCSS from './styles/ia-sharing-options.js';
import TwitterProvider from './providers/twitter.js';
import FacebookProvider from './providers/facebook.js';
import TumblrProvider from './providers/tumblr.js';
import PinterestProvider from './providers/pinterest.js';
import EmailProvider from './providers/email.js';

export class IASharingOptions extends LitElement {
  static get styles() {
    return sharingOptionsCSS;
  }

  static get properties() {
    return {
      creator: { type: String },
      description: { type: String },
      identifier: { type: String },
      sharingOptions: { type: Array },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.sharingOptions = [];
  }

  firstUpdated() {
    const {
      creator,
      description,
      identifier,
      type,
    } = this;
    const params = {
      creator,
      description,
      identifier,
      type,
    };

    this.sharingOptions = [
      new TwitterProvider(params),
      new FacebookProvider(params),
      new TumblrProvider(params),
      new PinterestProvider(params),
      new EmailProvider(params),
    ];
  }

  get sharingItems() {
    return this.sharingOptions.map(option => (
      html`<li>
        <a class="${option.icon}" href="${option.url}">
          <ia-icon icon=${option.icon}></ia-icon>
          ${option.name}
        </a>
      </li>`
    ));
  }

  unsetSelectedMenuOption(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('menuTypeSelected', {
      bubbles: true,
      composed: true,
      detail: {
        id: 'share',
      },
    }));
  }

  render() {
    return html`
      <header>
        <h3>Share this ${this.type}</h3>
        <a href="#" class="close" @click=${this.unsetSelectedMenuOption}><ia-icon icon="collapseSidebar"></ia-icon></a>
      </header>
      <ul>
        ${this.sharingItems}
      </ul>
    `;
  }
}
