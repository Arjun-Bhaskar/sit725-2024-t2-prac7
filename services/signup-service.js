const User = require('../modal/signup-modal');

exports.createObj = (payload) => {
    return new User({
        fullName: payload.fullName, 
        email: payload.email,
        phoneNo: payload.phoneNo,
        password: payload.password
    });
}

exports.saveData = (obj) => {
    return obj.save();
}
