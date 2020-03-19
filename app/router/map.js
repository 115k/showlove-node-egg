'use strict';
module.exports = {
  resource: {
    v1: {
      'admin/user': 'user',
    },
  },
  custom: {
    v1: {
      '/user/login': {
        methods: 'post',
        action: 'login',
        controller: 'user',
      },
      '/user/add': {
        methods: 'post',
        action: 'add',
        controller: 'user',
      },
    },
  },
};
