module.exports = {
  port: process.env.PORT || 8086,
  db: {
    database: process.env.DB_NAME || 'connected_db',
    user: process.env.DB_USER || 'connected_user',
    password: process.env.DB_PASS || 'connected_pass',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      storage: './connected.sqlite'
    }
  }
}