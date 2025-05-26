const jwt = require('jsonwebtoken');
const usermodel = require('../models/user-model');

module.exports = async function (req, res, next) {
    if (!req.cookies.token) {
        req.flash("error", "You need to login first");
        return res.redirect("/");
    }

    try {
        let decoded = jwt.verify(req.cookies.token, process.env.JWT_KEY);
        let user = await usermodel
            .findOne({ email: decoded.email })
            .select("-password");

        if (!user) {
            req.flash("error", "User not found");
            return res.redirect("/");
        }

        req.user = user;
        next(); // Proceed to the next middleware/route
    } catch (err) {
        console.error("JWT verification error:", err.message);
        req.flash("error", "Something went wrong");
        res.redirect("/");
    }
};
