/* eslint-env mocha */

// eslint-disable-next-line no-unused-vars
import should from 'should'
import 'isomorphic-fetch'
import {Cozy} from '../../src'

const COZY_STACK_URL = process.env && process.env.COZY_STACK_URL || ''
const COZY_STACK_VERSION = process.env && process.env.COZY_STACK_VERSION
const COZY_STACK_TOKEN = process.env && process.env.COZY_STACK_TOKEN

describe('settings api', async function () {
  let cozy

  beforeEach(function () {
    if (COZY_STACK_VERSION === '2') {
      this.skip()
    }
    cozy = new Cozy({
      cozyURL: COZY_STACK_URL,
      token: COZY_STACK_TOKEN
    })
  })

  it('gets the disk usage', async function () {
    const usage = await cozy.settings.diskUsage()
    usage.should.have.property('attributes')
    usage.attributes.used.should.be.type('string')
  })
})
