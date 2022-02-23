import '@internetarchive/icon-twitter/icon-twitter';
import { html } from 'lit';
import Provider from './provider.js';

export default class extends Provider {
  constructor(params) {
    super(params);
    this.name = 'Twitter';
    this.icon = html`<ia-icon-twitter></ia-icon-twitter>`;
    this.class = 'twitter';
  }

  get url() {
    return `https://twitter.com/intent/tweet?url=https://${this.baseHost}/details/${this.itemPath}&via=internetarchive&text=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
}
