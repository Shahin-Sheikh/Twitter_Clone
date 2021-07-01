const jwt = require('jsonwebtoken');
const User = require('./model/user');

exports.protect = async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startswith('Baearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }
  if (!token) {
    return next(new ErrorResponse('Not authorized to acces this route', 401));
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRECT);
    const user = await User.findById(decoded.id);
    if (!user) {
      return next(new ErrorResponse('No user foun with this id', 404));
    }

    req.user = user;

    next();
  } catch (error) {
    return next(new ErrorResponse('Not authorized to access thsi route', 401));
  }
};
