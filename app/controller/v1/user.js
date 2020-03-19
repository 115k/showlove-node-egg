'use strict';
const Controller = require('egg').Controller;
class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const name = ctx.request.body.name;
    const password = ctx.request.body.password;
    if (!name) {
      ctx.error('请输入用户名');
      return;
    }
    if (!password) {
      ctx.error('请输入密码');
    }
    const user = await service.v1.user.find({ name, password });
    if (!user) {
      ctx.error('用户名与密码不匹配');
    } else {
      ctx.sendSuccess({ data: user, msg: '登录成功' });
    }
  }
  async add() {
    const { ctx, service } = this;
    const obj = ctx.request.body;
    if (!obj.name) {
      ctx.error('昵称不能为空');
      return;
    }
    if (!obj.password) {
      ctx.error('密码不能为空');
      return;
    }
    obj.created_at = new Date().getTime();
    const result = await service.v1.user.insert({ obj });
    if (result && result.name) {
      ctx.sendSuccess({ data: result, msg: '注册成功' });
    } else {
      ctx.error('注册失败');
    }
  }
}

module.exports = UserController;
