import '@internetarchive/icon-facebook/icon-facebook';
import { html } from 'lit';
import Provider from './provider.js';

export default class extends Provider {
  constructor(params) {
    super(params);
    this.name = 'Facebook';
    this.icon = html`<ia-icon-facebook></ia-icon-facebook>`;
    this.class = 'facebook';
  }

  get url() {
    return `https://www.facebook.com/sharer/sharer.php?u=https://${this.baseHost}/details/${this.itemPath}`;
  }
}
