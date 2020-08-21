import { html, LitElement } from 'lit-element';
import sharingOptionsCSS from './styles/ia-sharing-options.js';

export class IASharingOptions extends LitElement {
  static get styles() {
    return sharingOptionsCSS;
  }

  static get properties() {
    return {
      creator: { type: String },
      description: { type: String },
      identifier: { type: String },
      type: { type: String },
    };
  }

  static sharingOptions = [{
    name: 'Twitter',
    method: 'twitter',
  }, {
    name: 'Facebook',
    method: 'facebook',
  }, {
    name: 'Tumblr',
    method: 'tumblr',
  }, {
    name: 'Pinterest',
    method: 'pinterest',
  }, {
    name: 'Email',
    method: 'email',
  }];

  get encodedDescription() {
    return encodeURIComponent(this.description.replace(/\s/g, '+')).replace(/%2B/g, '+');
  }

  get twitterURL() {
    return `https://twitter.com/intent/tweet?url=https://archive.org/details/${this.identifier}&via=internetarchive&text=${this.encodedDescription}`;
  }

  get facebookURL() {
    return `https://www.facebook.com/sharer/sharer.php?u=https://archive.org/details/${this.identifier}`;
  }

  get tumblrURL() {
    return `https://www.tumblr.com/share/video?embed=%3Ciframe+width%3D%22640%22+height%3D%22480%22+frameborder%3D%220%22+allowfullscreen+src%3D%22https%3A%2F%2Farchive.org%2Fembed%2F%22+webkitallowfullscreen%3D%22true%22+mozallowfullscreen%3D%22true%22%26gt%3B%26lt%3B%2Fiframe%3E&name=${this.encodedDescription}`;
  }

  get pinterestURL() {
    return `http://www.pinterest.com/pin/create/button/?url=https://archive.org/details/${this.identifier}&description=${this.encodedDescription}`;
  }

  get emailURL() {
    return `mailto:?body=https://archive.org/details/${this.identifier}&subject=${this.description} : ${this.creator} : Free Download, Borrow, and Streaming : Internet Archive`;
  }

  get sharingItems() {
    return IASharingOptions.sharingOptions.map(option => (
      html`<li>
        <a class="${option.method}" href="${this[`${option.method}URL`]}">
          <ia-icon icon=${option.method}></ia-icon>
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
