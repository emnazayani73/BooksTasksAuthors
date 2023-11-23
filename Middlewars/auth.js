const jwt = require("jsonwebtoken");
const User = require("../Models/User");
// verifie est ce que la personne est connecté ou non
//token ytb3ath fil header sous formpe chiane de caractère

module.exports.loggedMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    const userId = decodedToken.userId;

    User.findOne({ _id: userId })
      .then((user) => {
        if (!user) {
          return res
            .status(401)
            .json({ message: "login ou mot de passe incorrecte " });
        } else {
          req.auth = {
            userId: userId,
            role: user.role,
          };
          next();
        }
      })
      .catch((error) => {
        res.status(500).json({ error: error.message });
      });
    // ken manhtech next y9ef ghadi
  } catch (error) {
    res.status(401).json({ error });
  }
};
module.exports.isAdmin = (req, res, next) => {
  try {
    if (req.auth.role === "admin") {
      next();
    } else {
      req.status(403).json({ error: "no access " });
    }
  } catch {
    req.status(401).json({ error: error.message });
  }
};
