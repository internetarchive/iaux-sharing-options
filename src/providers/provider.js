/* eslint-disable class-methods-use-this */
export default class {
  constructor(params) {
    this.promoCopy = ' : Free Download, Borrow, and Streaming : Internet Archive';
    Object.assign(this, params);
  }

  get encodedDescription() {
    return this.encodeString(this.description);
  }

  get encodedCreator() {
    return this.encodeString(this.creator);
  }

  get encodedPromoCopy() {
    return this.encodeString(this.promoCopy);
  }

  get itemPath() {
    const encodedFileSubPrefix = this.fileSubPrefix ? encodeURIComponent(this.fileSubPrefix) : '';
    return encodedFileSubPrefix ? `${this.identifier}/${encodedFileSubPrefix}` : this.identifier;
  }

  encodeString(str) {
    return encodeURIComponent(str.replace(/\s/g, '+')).replace(/%2B/g, '+');
  }
}
