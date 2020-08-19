import { css } from 'lit-element';

export default css`
:host {
  display: block;
  height: 100%;
  padding: 1.5rem 1rem;
  overflow-y: auto;
  font-size: 1.4rem;
  box-sizing: border-box;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

h3 {
  padding: 0;
  margin: 0 1rem 0 0;
  font-size: 1.6rem;
}

a.close {
  justify-self: end;
}

ul {
  padding: 0;
  list-style: none;
}

li {
  padding: 0 0 1rem 0;
}

li a {
  font-size: 1.6rem;
  text-decoration: none;
  color: var(--shareLinkColor);
}

li a:before {
  display: inline-block;
  width: 32px;
  height: 32px;
  margin-right: 1rem;
  vertical-align: middle;
  content: "";
  border: 1px solid var(--shareIconBorder);
  border-radius: 7px;
  background: transparent 50% 50% no-repeat;
  background-size: 100%;
}

a.twitter:before {
  background-image: url('../src/images/icon_twitter.png');
}
a.facebook:before {
  background-image: url('../src/images/icon_facebook.png');
}
a.tumblr:before {
  background-image: url('../src/images/icon_tumblr.png');
}
a.pinterest:before {
  background-image: url('../src/images/icon_pinterest.png');
}
a.mailto:before {
  background-image: url('../src/images/icon_email.png');
}
`;
