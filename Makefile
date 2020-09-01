# Load our shared build tools. See https://github.com/Financial-Times/n-gage for more information.
node_modules/@financial-times/n-gage/index.mk:
	npm install @financial-times/n-gage
	touch $@

-include node_modules/@financial-times/n-gage/index.mk

VAULT_NAME=ft-next-__service__-api
HEROKU_APP_STAGING=ft-next-__service__-api-staging
HEROKU_APP_EU=ft-next-__service__-api-eu
HEROKU_APP_US=ft-next-__service__-api-us

unit-test:
	NODE_ENV=test jest

test: verify unit-test

run:
	nht run --https
