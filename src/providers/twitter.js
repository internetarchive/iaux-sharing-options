import Provider from './provider.js';

export default class extends Provider {
  constructor(params) {
    super(params);
    this.name = 'Twitter';
    this.icon = 'twitter';
  }

  get url() {
    return `https://twitter.com/intent/tweet?url=https://archive.org/details/${this.identifier}&via=internetarchive&text=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
}
