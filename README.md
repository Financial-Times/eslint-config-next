# eslint-config-next [![CircleCI](https://circleci.com/gh/Financial-Times/eslint-config-next.svg?style=svg&circle-token=9c352d2fac5fe7e9eb3232c48d8600eea057f6bb)](https://github.com/Financial-Times/eslint-config-next)

ESLint configuration for Next projects

## Usage

Reference the shared configuration in your repository's own `.eslintrc.js` like so:

```js
module.exports = {
	extends: ['@financial-times/eslint-config-next']
}
```

Avoid using `.eslintrc` file format since [it has been depracated.](https://eslint.org/docs/user-guide/configuring#configuration-file-formats-1)

You can find the docs for ESLint shareable configs [here](https://eslint.org/docs/developer-guide/shareable-configs).
