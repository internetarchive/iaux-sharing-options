export default class {
  constructor(params) {
    this.name = 'Facebook';
    this.icon = 'facebook';
    Object.assign(this, params);
  }

  get url() {
    return `https://www.facebook.com/sharer/sharer.php?u=https://archive.org/details/${this.identifier}`;
  }
}
