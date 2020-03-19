'use strict';
module.exports = () => {
  return async function(ctx, next) {
    ctx.set('x-powered-by', 'OperationServer/3.0');
    ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    ctx.set('Access-Control-Allow-Headers', 'content-type,token');
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Allow', 'PUT,POST,GET,DELETE,OPTIONS');
    ctx.set('Cache-Control', 'no-cache');
    ctx.set('Pragma', 'no-cache');
    ctx.set('Expires', '-1');
    ctx.set('Content-Type', 'application/json');
    if (ctx.request.method === 'OPTIONS') {
      ctx.status = 204;
    } else {
      await next();
    }
  };
};
