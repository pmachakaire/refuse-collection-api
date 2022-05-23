// @desc    Get all users
// @route   GET /api/v1/users
// @access  Public
exports.getUsers = (req, res, next) => {
  res.status(200).json({ success: true, msg: "show all users" });
};

// @desc    Get single user
// @route   GET /api/v1/users/:id
// @access  Public
exports.getUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `fetch user with id ${req.params.id}` });
};

// @desc    Create new user
// @route   POST /api/v1/users
// @access  Private
exports.createUser = (req, res, next) => {
  res.status(201).json({ success: true, msg: "create new user" });
};

// @desc    Update user
// @route   PUT /api/v1/users/:id
// @access  Private
exports.updateUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `update user with id ${req.params.id}` });
};

// @desc    Delete single user
// @route   DELETE /api/v1/users/:id
// @access  Private
exports.deleteUser = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete user with id ${req.params.id}` });
};
