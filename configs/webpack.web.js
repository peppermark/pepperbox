const base = require('./webpack.base')

base.target = 'web'
base.output.filename = 'bundle.web.js'

module.exports = base
