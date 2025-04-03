import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema({
  username: {
    type: String,
    rquierd: true,
  },
  pwd: {
    type: String,
    requierd: true,
    length: 12,
  },
  email: {
    type: String,
    requierd: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  sns: String,
});
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    this.pwd = await bcrypt.hash(this.pwd, salt);
  } catch (err) {
    next(err);
  }
});

const User = mongoose.model('User', userSchema);

export default User;
