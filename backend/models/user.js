import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, required: true, max: 100},
    lastname: {type: String, required: true, max: 100},
    age: {type: Number, required: true},
});

module.exports = mongoose.model('User', UserSchema);