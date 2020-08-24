import Provider from './provider.js';

export default class extends Provider {
  constructor(params) {
    super(params);
    this.name = 'Email';
    this.icon = 'email';
  }

  get url() {
    return `mailto:?body=https://${this.baseHost}/details/${this.identifier}&subject=${this.description} : ${this.creator}${this.promoCopy}`;
  }
}
