const { User } = require("../db");
const { verifyToken } = require("../utilities/auth");

/**
 * Check if user is authorized
 * @param {Request} req 
 * @param {Response} res 
 * @param {NextFunction} next
 */
const authUser = async (req, res, next) => {
    const bearer = req.headers.authorization || req.headers["authorization"] || req.query.token || false;

    if (!bearer) return res.status(403).json({ message: "Not Authorized" });

    const token = bearer.split(" ")[1];

    if (!token) return res.status(403).json({ message: "Not Authorized" });

    try {
        const decoded = verifyToken(token);

        if (!decoded) return res.status(403).json({ message: "Not Authorized" });

        const user = await User.findOne({ _id: decoded._id }, "-password", { lean: true });

        if (!user) return res.status(403).json({ message: "Not Authorized" });

        req.user = user;
        return next();
    } catch(err) {
        console.log(err);
        return res.status(403).json({ message: "Not Authorized" });
    }
}

module.exports = {
    authUser,
}