#!/usr/bin/env node

const { join } = require('path');
const { BaseGenerator } = require('@umijs/utils');

const generator = new BaseGenerator({
  path: join(__dirname, '..', 'templates', 'page'),
  target: join(__dirname, '..', 'test'),
  data: {},
  questions: [],
});
generator.run();
