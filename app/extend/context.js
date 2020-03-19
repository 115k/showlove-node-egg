'use strict';
module.exports = {
  error(msg, data = {}) {
    this.status = 200;
    this.body = {
      code: 400,
      success: false,
      msg: msg || '',
      ...data,
    };
  },
  send(data) {
    this.status = 200;
    this.body = {
      code: 0,
      success: true,
      msg: '',
      ...data,
    };
  },
  sendSuccess(data) {
    this.status = 200;
    this.body = {
      code: 0,
      success: true,
      msg: data.msg ? data.msg : '请求成功',
      data: data.data,
    };
  },
  sendFail(data) {
    this.status = 200;
    this.body = {
      code: data.code,
      success: false,
      msg: data.msg ? data.msg : '',
      data: data.data,
    };
  },
};
