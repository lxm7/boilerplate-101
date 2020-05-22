const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    // Obviously we wont norally keep secrets in code but for quick demo!
    const decoded = jwt.verify(token, "secret123");
    // Saving value to the req body stops the whole UI from reloading upon submit of form.
    req.tokenDecode = decoded;
    next();
  } catch (e) {
    res.status(401).send({ error: `Auth failed. Reason: ${e}` });
  }
};

module.exports = auth;
