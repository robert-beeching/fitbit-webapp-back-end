# Fitbit Dashboard Back-end

## Intro

NodeJS project which is an acting API layer for a ReactJS front-end Fitbit dashboard.

Responsibilities include:

- Providing authentication to Fitbit API using OAuth 2 Authorization Code Grant Flow. Handles initial auth redirect, and handling of access code to retrieve an access token. Uses passport.js library to shorten and neaten this process.
- Handling cookie-based sessions using express-session middleware. Also hooks up to a MySQL database to manage tokens.
- Provides endpoints to the front-end for retrieval of data, firstly looking in the database and forwarding to the API if data does not already exist. App will then store this info in database to minimize requests in future.

## Scripts

Only interesting script currently is to run the app:

`npm run start`

Note: It will require a .env file to be present which will have items such as API id & secret, cookie secret, DB user, pass, port, host etc.

## Disclaimer

This project is work in progress. There is much functionality yet to be added, and refactoring of code. Some todo's are:

- Real time notifications to user using an SMS api, perhaps for updates during the week of progress vs average / benchmark
- Testing
- More analysis, graphs, tables for data.
- Implement Web API subscriptions to ensure database holds most recent data
- Create own design, move away from Bootstrap (bootstrap used to get things up and running quickly whilst looking reasonable!)
- Production ready asset building
