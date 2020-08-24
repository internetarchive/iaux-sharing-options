import Provider from './provider.js';

export default class extends Provider {
  constructor(params) {
    super(params);
    this.name = 'Pinterest';
    this.icon = 'pinterest';
  }

  get url() {
    return `http://www.pinterest.com/pin/create/button/?url=https://archive.org/details/${this.identifier}&description=${this.encodedDescription}+%3A+${this.encodedCreator}${this.encodedPromoCopy}`;
  }
}
