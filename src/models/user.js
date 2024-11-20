const { type } = require('@hapi/joi/lib/extend');
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const { roles } = require('./permission');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  dateOfBirth: { type: Date },
  email: { type: String, required: true, unique: true },
  createdDate: { type: Date, required: true, default: new Date() },
  password: { type: String },
  refreshToken: { type: String },
  type: { type: String, default: 'PW' },
  permission: {
    type: String,
    enum: [roles.ADMIN.role, roles.USER.role, roles.GUESS.role],
    default: roles.USER.role,
  },
});

userSchema.plugin(mongoosePaginate);

const UserModel = mongoose.model('Users', userSchema);

module.exports = UserModel;
