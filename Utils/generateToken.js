const jwt = require('jsonwebtoken');
function generateToken(CreatedUser) {
    return jwt.sign({ email: CreatedUser.email, id: CreatedUser._id }, process.env.JWT_KEY);
}

module.exports.generateToken = generateToken;