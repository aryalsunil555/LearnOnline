var Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');

const userSchema = new Sequelize.Schema({
    firstName: {
        type:String
            },
    middleName: {
        type:String
    },
    lastName: {
        type:String
    },
    gender: {
        type:String
    },
    address: {
        type:String
    },
    dob: {
        type:Date
    },
    email: {
        type:String
    },
    phone: {
        type:String
    },
    password: {
        type:String
    },
    tokens: [{
    token: {
        type : String,
        required:true
    }
}]

})

userSchema.statics.checkCreadentialsDb = async (email,password) => {
    const user = this;
    const token = jwt.sign({_id: user._id.toString() }, "thisismynewcourse");

    console.log("Login Successful");
    console.log(token);
    user.tokens = user.tokens.concat({token: token});
    await user.save();
    return token;

}
const User = Sequelize.Model('User', userSchema);

module.exports = {
	User
}