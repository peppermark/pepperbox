const base = require('./webpack.base')

base.target = 'node'
base.output.filename = 'bundle.node.js'

module.exports = base