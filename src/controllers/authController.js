const authService = require("../services/authService");
const responseHandler = require("../utils/responseUtil");

exports.register = async (req, res) => {
  try {
    const result = await authService.registerUser(req.body);
    responseHandler.success(res, "User registered successfully!", result);
  } catch (error) {
    responseHandler.error(res);
  }
};

exports.login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body);
    if (!result) return responseHandler.unauthorized(res, "Invalid credentials!");

    responseHandler.success(res, "Login successful!", result);
  } catch (error) {
    responseHandler.error(res);
  }
};
