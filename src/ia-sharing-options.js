import { classMap } from 'lit/directives/class-map.js';
import { html, LitElement } from 'lit';
import { nothing } from 'lit/html.js';
import '@internetarchive/icon-link/icon-link.js';
import sharingOptionsCSS from './styles/ia-sharing-options.js';
import EmailProvider from './providers/email.js';
import FacebookProvider from './providers/facebook.js';
import PinterestProvider from './providers/pinterest.js';
import TumblrProvider from './providers/tumblr.js';
import TwitterProvider from './providers/twitter.js';

const copyToClipboard = ({ currentTarget }) => {
  const textarea = currentTarget.querySelector('textarea');
  const note = currentTarget.querySelector('small');
  textarea.select();
  document.execCommand('copy');
  textarea.blur();
  note.classList.add('visible');
  clearTimeout(note.timeout);
  note.timeout = setTimeout(() => note.classList.remove('visible'), 4000);
};

export class IASharingOptions extends LitElement {
  static get styles() {
    return sharingOptionsCSS;
  }

  static get properties() {
    return {
      baseHost: { type: String },
      creator: { type: String },
      description: { type: String },
      embedOptionsVisible: { type: Boolean },
      identifier: { type: String },
      sharingOptions: { type: Array },
      type: { type: String },
      renderHeader: { type: Boolean },
      fileSubPrefix: { type: String },
    };
  }

  constructor() {
    super();
    this.baseHost = '';
    this.sharingOptions = [];
    this.fileSubPrefix = '';
  }

  firstUpdated() {
    const {
      baseHost,
      creator,
      description,
      identifier,
      type,
      fileSubPrefix,
    } = this;
    const params = {
      baseHost,
      creator,
      description,
      identifier,
      type,
      fileSubPrefix,
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
        <a class="${option.class}" href="${option.url}" target="_blank">
          ${option.icon}
          ${option.name}
        </a>
      </li>`
    ));
  }

  get embedOption() {
    return html`<li>
      <a href="#" @click=${this.toggleEmbedOptions}>
        <ia-icon-link></ia-icon-link>
        Get an embeddable link
      </a>
    </li>`;
  }

  get iframeEmbed() {
    return html`&lt;iframe src="https://${this.baseHost}/embed/${this.identifier}" width="560" height="384" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen&gt;&lt;/iframe&gt;`;
  }

  get bbcodeEmbed() {
    return `[archiveorg ${this.identifier} width=560 height=384 frameborder=0 webkitallowfullscreen=true mozallowfullscreen=true]`;
  }

  get helpURL() {
    return `https://${this.baseHost}/help/audio.php?identifier=${this.identifier}`;
  }

  toggleEmbedOptions(e) {
    e.preventDefault();
    this.embedOptionsVisible = !this.embedOptionsVisible;
  }

  get header() {
    const header = html`<header><h3>Share this ${this.type}</h3></header>`;
    return this.renderHeader ? header : nothing;
  }

  render() {
    return html`
      ${this.header}
      <ul>
        ${this.sharingItems}
        ${this.embedOption}
        <div class=${classMap({ visible: this.embedOptionsVisible, embed: true })}>
          <h4>Embed</h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly="readonly">${this.iframeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <h4>Embed for wordpress.com hosted blogs and archive.org item &lt;description&gt; tags</h4>
          <div class="code" @click=${copyToClipboard}>
            <textarea readonly="readonly">${this.bbcodeEmbed}</textarea>
            <small>Copied to clipboard</small>
          </div>
          <p>Want more? <a href=${this.helpURL}>Advanced embedding details, examples, and help</a>!</p>
        </div>
      </ul>
    `;
  }
}

customElements.define('ia-sharing-options', IASharingOptions);
