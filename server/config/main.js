module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',
  // Database connection information
  database: 'mongodb://localhost/meishizhaoshi',
  // Setting port for server
  port: process.env.PORT || 3001,
  consts: {
    profile_fig: 'https://cdn-images-1.medium.com/max/1600/1*GEniDHmmO0nkVuKQ8fhLYw.png'
  }
};
