import '@internetarchive/icon-email/icon-email';
import { html } from 'lit';
import Provider from './provider.js';

export default class extends Provider {
  constructor(params) {
    super(params);
    this.name = 'Email';
    this.icon = html`<ia-icon-email></ia-icon-email>`;
    this.class = 'email';
  }

  get url() {
    return `mailto:?body=https://${this.baseHost}/details/${this.itemPath}&subject=${this.description} : ${this.creator}${this.promoCopy}`;
  }
}
