/**
 * Smoke tests for this system, which are run when testing branches and just before deploying to production.
 *
 * See the @financial-times/n-test package for the definition of what this file should export.
 *
 * @see https://github.com/Financial-Times/n-test#usage
 */
const chai = require('chai');

chai.should();

module.exports = [
	{
		https: true,
		urls: {
			'/____service__': 200,
		}
	}
];
