'use strict';
const Service = require('egg').Service;
class UserService extends Service {
  async find({ name, password }) {
    const user = await this.ctx.model.User.find({ name, password });
    return user;
  }
  async insert({ obj }) {
    const user = await this.ctx.model.User.insert({ obj });
    return user;
  }
}

module.exports = UserService;
