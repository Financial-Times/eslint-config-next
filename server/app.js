
const express = require('@financial-times/n-express');

/**
 * Snyk runtime monitoring.
 *
 * Determines whether a vulnerable dependency is indeed being used at runtime in a way that can be exploited.
 *
 * @see https://snyk.io/docs/runtime-protection/
 */
if (process.env.SNYK_PROJECT_ID) {
	require('@snyk/nodejs-runtime-agent')({
		projectId: process.env.SNYK_PROJECT_ID
	});
}

/**
 * Create a new instance of @financial-times/n-express.
 *
 * @see https://github.com/Financial-Times/n-express
 */
const app = express({
	systemCode: 'next-__service__',
});

app.get('/__gtg', (req, res) => res.sendStatus(200));

app.get('/____service__', (req, res) => {
	res.send('Hello World!');
});

// Start the app
const port = process.env.PORT || 3001;

app.listen(port);
