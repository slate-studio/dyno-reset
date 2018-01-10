#!/usr/bin/env node

'use strict'

const resetTools = require('./resetTools')
const logger     = require('@slatestudio/dyno/lib/log')
const msg        = require('@slatestudio/dyno/lib/msg')

module.exports = resetTools.initialize()
  .then(() => resetTools.listen())
  .then(() => log.info('Reset listener started'))
