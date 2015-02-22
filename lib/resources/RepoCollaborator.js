'use strict';

var Resource = require('../Resource');
var method = Resource.method;

module.exports = Resource.extend({

  list: method({
    method: 'GET',
    path: '/repos/:full_name/collaborators',
    urlParams: ['full_name']
  }),

  checkForUser: method({
    method: 'GET',
    path: '/repos/:full_name/collaborators/:username',
    urlParams: ['full_name', 'username'],
    checkOperation: true
  })


});