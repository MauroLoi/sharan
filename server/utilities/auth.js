const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const { SERVER_PRIVATE_KEY } = process.env;

/**
 * Generate password hash to save on db
 * @param {string} password 
 * @returns {Promise<string>} hashed passowrd
 */
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

/**
 * Compare plane text password with hash on db
 * @param {string} password 
 * @param {string} hash 
 * @returns {Promise<boolean>}
 */
const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
}

/**
 * Generate JWT token
 * @param {object} payload 
 * @returns {string}
 */
const generateToken = (payload) => {
    return jwt.sign(payload, SERVER_PRIVATE_KEY);
}

/**
 * Verify JWT token
 * @param {string} token 
 * @returns {object|false}
 */
const verifyToken = (token) => {
    return jwt.verify(token, SERVER_PRIVATE_KEY);
}

module.exports = {
    hashPassword,
    comparePassword,
    generateToken,
    verifyToken,
}