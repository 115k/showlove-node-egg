'use strict';
const utils = require('../utils');
const apiMap = require('./map');
const apiBase = '/api/';
module.exports = app => {
  const { router, controller } = app;
  // 原始的get put post 等方法
  utils.rouerEach(apiMap.resource, (conn, route, version) => {
    if (controller[version][conn].all) router.get(apiBase + version + route, controller[version][conn].all);
    if (controller[version][conn].get) router.get(apiBase + version + route + '/:id', controller[version][conn].get);

    if (controller[version][conn].post) router.post(apiBase + version + route, controller[version][conn].post);

    if (controller[version][conn].put) router.put(apiBase + version + route + '/:id', controller[version][conn].put);

    if (controller[version][conn].delete) router.delete(apiBase + version + route + '/:id', controller[version][conn].delete);
  });
  // 自定义的方法
  utils.rouerEach(apiMap.custom, (conn, route, version) => {
    router[conn.methods](apiBase + version + route, controller[version][conn.controller][conn.action]);
  });
};
