import Provider from './provider.js';

export default class extends Provider {
  constructor(params) {
    super(params);
    this.name = 'Email';
    this.icon = 'email';
  }

  get url() {
    return `mailto:?body=https://archive.org/details/${this.identifier}&subject=${this.description} : ${this.creator}${this.promoCopy}`;
  }
}
