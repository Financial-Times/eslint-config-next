# eslint-config-next
ESLint configuration for Next projects

## Usage

Reference the shared configuration in your repository's own `.eslintrc.js` like so:

```js
module.exports = {
	extends: ['@financial-times/eslint-config-next']
}
```

Avoid using `.eslintrc` file format since [it has been depracated.](https://eslint.org/docs/user-guide/configuring#configuration-file-formats-1)