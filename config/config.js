const config = {
  sessionConfig: {
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: true,
    cookieName: "id"
  },
  fitbitApiConfig: {
    client: {
      id: process.env.FITBIT_APP_ID,
      secret: process.env.FITBIT_APP_SECRET
    },
    auth: {
      tokenHost: "https://api.fitbit.com/",
      tokenPath: "oauth2/token",
      authorizeHost: "https://fitbit.com/",
      authorizePath: "oauth2/authorize"
    }
  },
  databaseConfig: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: "fitbitDB",
    port: process.env.DB_PORT
  }
};

module.exports = config;
