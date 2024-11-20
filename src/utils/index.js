const jwt = require('jsonwebtoken');

function signJWT(id, email, username) {
  const accessToken = jwt.sign(
    { id, email, username },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_ACCESS_EXPIRE },
  );
  const refreshToken = jwt.sign(
    { id, email, username },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: process.env.JWT_REFRESH_EXPIRE },
  );
  return { accessToken, refreshToken };
}

module.exports = { signJWT };
