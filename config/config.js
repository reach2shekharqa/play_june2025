// config.js
require('dotenv').config();

const config = {
  baseUrl: process.env.BASE_URL || 'https://default-url.com',
  username: process.env.APP_USERNAME || 'defaultUser',
  password: process.env.APP_PASSWORD || 'defaultPass',
  timeout: parseInt(process.env.TIMEOUT_MS, 10) || 30000,
  // Add other config values as needed
};

export default config;
