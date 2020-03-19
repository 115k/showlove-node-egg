'use strict';
module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;
  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: STRING(30),
    password: STRING(18),
    age: INTEGER,
    created_at: DATE,
    updated_at: DATE,
  });

  User.insert = async function({ obj }) {
    return await this.create({ ...obj });
  };
  User.find = async function({ name }) {
    return await this.findOne({
      where: {
        name,
      },
    });
  };
  return User;
};
