module.exports = {
  port: 3306,
  db: {
    database: 'odds',
    user: 'will',
    password: 'password',
    host: 'odds.cxrz9l1i58ux.us-west-2.rds.amazonaws.com'
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
