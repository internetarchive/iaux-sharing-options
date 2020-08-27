import '@internetarchive/icon-facebook/icon-facebook';
import { html } from 'lit-element';

export default class {
  constructor(params) {
    this.name = 'Facebook';
    this.icon = html`<ia-icon-facebook></ia-icon-facebook>`;
    this.class = 'facebook';
    Object.assign(this, params);
  }

  get url() {
    return `https://www.facebook.com/sharer/sharer.php?u=https://${this.baseHost}/details/${this.identifier}`;
  }
}
