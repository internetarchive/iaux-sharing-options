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
  --iconWidth: 18px;
  --iconHeight: 18px;
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

li ia-icon {
  --iconWidth: 28px;
  --iconHeight: 28px;
  display: inline-block;
  padding: .2rem;
  margin-right: 1rem;
  vertical-align: middle;
  border: 1px solid var(--shareIconBorder);
  border-radius: 7px;
  background: var(--shareIconBg);
}
`;
