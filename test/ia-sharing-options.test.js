import {
  html,
  fixture,
  expect,
  oneEvent,
} from '@open-wc/testing';
import sinon from 'sinon';
import { IASharingOptions } from '../src/ia-sharing-options.js';

customElements.define('ia-sharing-options', IASharingOptions);

const identifier = 'goody';
const itemType = 'book';
const creator = 'Welsh, Charles';
const description = 'The history of Little Goody Two-Shoes : otherwise called Mrs. Margery Two-Shoes ... [1766 edition]';

const container = () => (
  html`<ia-sharing-options
    identifier="${identifier}"
    type="${itemType}"
    creator="${creator}"
    description="${description}"
  ></ia-sharing-options>`
);

describe('<ia-sharing-options>', () => {
  afterEach(() => {
    sinon.restore();
  });

  it('sets default properties', async () => {
    const el = await fixture(container());

    expect(el.identifier).to.equal(identifier);
    expect(el.type).to.equal(itemType);
    expect(el.creator).to.equal(creator);
    expect(el.description).to.equal(description);
  });

  it('renders buttons for each sharing method', async () => {
    const el = await fixture(container());

    await el.updateComplete;

    el.sharingOptions.forEach((option) => {
      const button = el.shadowRoot.querySelector(`a.${option.icon}`);
      expect(button).to.exist;
      expect(button.getAttribute('href')).to.equal(option.url);
    });
  });

  it('emits a custom event to close the menu', async () => {
    const el = await fixture(container());

    setTimeout(() => (
      el.unsetSelectedMenuOption(new Event('click'))
    ));
    const response = await oneEvent(el, 'menuTypeSelected');

    expect(response).to.exist;
  });

  it('closes the menu when close element clicked', async () => {
    IASharingOptions.prototype.unsetSelectedMenuOption = sinon.fake();

    const el = await fixture(container());

    el.shadowRoot.querySelector('.close').click();
    expect(el.unsetSelectedMenuOption.callCount).to.equal(1);
  });
});
