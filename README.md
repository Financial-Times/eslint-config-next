# next-service-app-template

This is a template repository, to use when creating a new [Node.js](https://nodejs.org/) system for FT.com that will run on the [Heroku](https://heroku.com) platform.

See https://github.blog/2019-06-06-generate-new-repositories-with-repository-templates/ for information about using repository templates.

Our guide for creating a new Heroku based system can be found at https://github.com/Financial-Times/next/wiki/Creating-New-Apps.

Search for instances of `__service__` to replace with your system's name.

## What this template includes

### [n-express](https://github.com/financial-times/n-express)

Initialised in [`server/app.js`](https://github.com/Financial-Times/next-service-app-template/blob/master/server/app.js#L22-L24)

### [n-gage](https://github.com/financial-times/n-gage) & [n-heroku-tools](https://github.com/financial-times/n-heroku-tools)

Common build & deploy tools for FT.com projects, included in [`Makefile`](https://github.com/Financial-Times/next-service-app-template/blob/master/Makefile)

### [n-test](https://github.com/financial-times/n-test)

Tool for running smoke tests on your server. See [`test/smoke.js`](https://github.com/Financial-Times/next-service-app-template/blob/master/test/smoke.js)

### [jest](https://jestjs.io/)

"A delightful JavaScript Testing Framework". See [`test/server/server.spec.js`](https://github.com/Financial-Times/next-service-app-template/blob/master/test/server/server.spec.js)

### [secret-squirrel](https://github.com/financial-times/secret-squirrel)

Protects against secrets (API keys, passwords, user data etc) being committed. Run as a pre-commit hook, set in [`package.json`](https://github.com/Financial-Times/next-service-app-template/blob/master/package.json#L8)

### [snyk](https://snyk.io)

Third-party tool to check dependencies for known security issues. Run after `npm install`, set in [`package.json`](https://github.com/Financial-Times/next-service-app-template/blob/master/package.json#L12)
