const morgan = require('morgan')
const pify = require('pify')
const log = pify(morgan('combined'))

module.exports = log
