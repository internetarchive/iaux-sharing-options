[![Build Status](https://travis-ci.com/internetarchive/iaux-sharing-options.svg?branch=master)](https://travis-ci.com/internetarchive/iaux-sharing-options)
[![codecov](https://codecov.io/gh/internetarchive/iaux-sharing-options/branch/master/graph/badge.svg)](https://codecov.io/gh/internetarchive/iaux-sharing-options)

# \<ia-sharing-options>

This webcomponent follows the [open-wc](https://github.com/open-wc/open-wc) recommendation.

## Installation
```bash
npm i ia-sharing-options
```
or
```bash
yarn add @internetarchive/ia-sharing-options
```

## Usage
```html
<script type="module">
  import 'ia-sharing-options/ia-sharing-options.js';
</script>

<ia-sharing-options></ia-sharing-options>
```

The necessary properties to build all sharing URLs appear below:

```
{
  baseHost: "archive.org" // The domain name used to build sharing URLs
  identifier: "goody", // Item identifier
  type: "book", // Item type
  creator: "Welsh, Charles", // Item creator
  description: "The history of Little Goody Two-Shoes : otherwise called Mrs. Margery Two-Shoes ... [1766 edition]" // Item description
}
```

## Styling

```css
ia-sharing-options {
  --shareLinkColor: #fff;
  --shareIconBorder: #fff;
  --textareaColor: #fff;
  --textareaColor: #151515;
}
```

## Linting with ESLint
To scan the project for linting errors, run
```bash
npm run lint
```

## Testing with Karma
To run the suite of karma tests, run
```bash
npm run test
```

To run the tests in watch mode (for <abbr title="test driven development">TDD</abbr>, for example), run

```bash
npm run test:watch
```

## Tooling configs

For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.

If you customize the configuration a lot, you can consider moving them to individual files.

## Local Demo with `es-dev-server`
```bash
npm start
```
To run a local development server that serves the basic demo located in `demo/index.html`
