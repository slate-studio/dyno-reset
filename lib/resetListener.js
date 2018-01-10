#!/usr/bin/env node

'use strict'

const config     = require('config')
const resetTools = require('./resetTools')
const logger     = require('@slatestudio/dyno/lib/log')
const msg        = require('@slatestudio/dyno/lib/msg')

module.exports = logger(config)
  .then(() => msg(config))
  .then(({ globals }) => {
    global.Message  = globals.Message
    global.Listener = globals.Listener
  })
  .then(() => resetTools.listen())
  .then(() => log.info('Reset listener started'))
