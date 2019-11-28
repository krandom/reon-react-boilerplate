const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const uuid = require('uuid');

const UserSchema = new mongoose.Schema({
	email: [{
		address: {
			type: String,
			required: true,
			unique: true,
		},
		primary: {
			type: Boolean,
			default: true,
		},
		verificationCode: {
			type: String,
			default: uuid(),
		},
		dateAdded: {
			type: Date,
			default: Date.now,
			private: true,
		}
	}],
	password: {
		type: String,
		required: true,
		unique: true,
		private: true,
	},
	avatar: {
		type: String,
	},
	signupDate: {
		type: Date,
		default: Date.now,
	},
	loginDate: {
		type: Date,
		default: Date.now,
	},
	role: {
		type: String,
		default: 'user',
		required: true,
	}
});

UserSchema.pre('save', async function(next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);

	next()
});

module.exports = User = mongoose.model('user', UserSchema);