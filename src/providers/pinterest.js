import '@internetarchive/icon-pinterest/icon-pinterest';
import { html } from 'lit';
import Provider from './provider.js';

export default class extends Provider {
  constructor(params) {
    super(params);
    this.name = 'Pinterest';
    this.icon = html`<ia-icon-pinterest></ia-icon-pinterest>`;
    this.class = 'pinterest';
  }

  get url() {
    return `http://www.pinterest.com/pin/create/button/?url=https://${this.baseHost}/details/${this.itemPath}&description=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
}
