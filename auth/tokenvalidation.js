const jwt = require("jsonwebtoken");

module.exports = {
    checkToken: (req, res, next) => {
        let token = req.get("authorization");
        console.log(token)

        if (token) {
            token = token.slice(7);
            console.log(process.env.JWT_KEY, "process.env.JWT_KEY");
            jwt.verify(token, "qwe1234", (err, decoded) => {
                if (err) {
                    return res.json({
                        error: true,
                        errorMessage: "Inavalid token"
                    });
                } else {
                    req.decode = decoded;
                    next();
                }
            })
        } else {
            return res.json({
                error: true,
                message: "Access Denied! Unauthorized User"
            });
        }
    }
}