module.exports = {
  port: 3306,
  db: {
    database: 'tickets_db',
    user: 'tickets_user',
    password: 'tickets_pass',
    host: 'ticketsdb.cxrz9l1i58ux.us-west-2.rds.amazonaws.com'
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

