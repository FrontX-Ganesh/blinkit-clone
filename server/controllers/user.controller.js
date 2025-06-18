import UserModel from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import generatedAccessToken from "../utils/generatedAccessToken.js";
import genertedRefreshToken from "../utils/generatedRefreshToken.js";
import uploadImageClodinary from "../utils/uploadImageClodinary.js";
import jwt from "jsonwebtoken";

export async function registerUserController(request, response) {
  try {
    const { name, email, password } = request.body;
    if (!name || !email || !password) {
      return response.status(400).json({
        message: "provide email, name, password",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    if (user) {
      return response.json({
        message: "Already register email",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    const newUser = new UserModel({ name, email, password: hashPassword });
    const save = await newUser.save();

    return response.json({
      message: "User register successfully",
      error: false,
      success: true,
      data: save,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

export async function loginController(request, response) {
  try {
    const { email, password } = request.body;
    if (!email || !password) {
      return response.status(400).json({
        message: "provide email, password",
        error: true,
        success: false,
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return response
        .status(400)
        .json({ message: "User not register", error: true, success: false });
    }

    if (user.status !== "Active") {
      return response
        .status(400)
        .json({ message: "Contact to Admin", error: true, success: false });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);
    if (!checkPassword) {
      return response
        .status(400)
        .json({ message: "Check your password", error: true, success: false });
    }

    const accesstoken = await generatedAccessToken(user._id);
    const refreshToken = await genertedRefreshToken(user._id);

    await UserModel.findByIdAndUpdate(user._id, {
      last_login_date: new Date(),
    });

    const cookiesOption = { httpOnly: true, secure: true, sameSite: "None" };
    response.cookie("accessToken", accesstoken, cookiesOption);
    response.cookie("refreshToken", refreshToken, cookiesOption);

    return response.json({
      message: "Login successfully",
      error: false,
      success: true,
      data: { accesstoken, refreshToken },
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

export async function logoutController(request, response) {
  try {
    const userid = request.userId;

    const cookiesOption = { httpOnly: true, secure: true, sameSite: "None" };
    response.clearCookie("accessToken", cookiesOption);
    response.clearCookie("refreshToken", cookiesOption);

    await UserModel.findByIdAndUpdate(userid, { refresh_token: "" });

    return response.json({
      message: "Logout successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

export async function resetpassword(request, response) {
  try {
    const { email } = request.body;

    // Find user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return response.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    // Generate reset token (or any other logic if needed)
    const resetToken = generateResetToken(); // assume this is your function
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await user.save();

    // Removed email sending code here

    return response.status(200).json({
      message: "Reset token generated successfully",
      error: false,
      success: true,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || "Something went wrong",
      error: true,
      success: false,
    });
  }
}

export async function forgotPasswordController(request, response) {
  try {
    const { email } = request.body;

    // Check if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      return response.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    // Generate and save reset token (email sending removed)
    const resetToken = generateResetToken(); // define this function elsewhere
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = Date.now() + 3600000; // 1 hour from now
    await user.save();

    return response.status(200).json({
      message: "Reset token generated successfully",
      success: true,
      error: false,
      resetToken, // you can remove this if not needed on frontend
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || "Internal Server Error",
      success: false,
      error: true,
    });
  }
}

export async function verifyEmailController(request, response) {
  try {
    const { token } = request.params;

    const user = await UserModel.findOne({ emailVerificationToken: token });

    if (!user) {
      return response.status(400).json({
        message: "Invalid or expired verification token",
        success: false,
        error: true,
      });
    }

    user.isVerified = true;
    user.emailVerificationToken = undefined; // Clear token
    await user.save();

    return response.status(200).json({
      message: "Email verified successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    return response.status(500).json({
      message: error.message || "Server Error",
      success: false,
      error: true,
    });
  }
}

export async function verifyForgotPasswordOtp(request, response) {}

export async function uploadAvatar(request, response) {
  try {
    const userId = request.userId;
    const image = request.file;

    const upload = await uploadImageClodinary(image);
    await UserModel.findByIdAndUpdate(userId, { avatar: upload.url });

    return response.json({
      message: "upload profile",
      success: true,
      error: false,
      data: { _id: userId, avatar: upload.url },
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

export async function updateUserDetails(request, response) {
  try {
    const userId = request.userId;
    const { name, email, mobile, password } = request.body;

    let hashPassword = "";
    if (password) {
      const salt = await bcryptjs.genSalt(10);
      hashPassword = await bcryptjs.hash(password, salt);
    }

    const updateUser = await UserModel.updateOne(
      { _id: userId },
      {
        ...(name && { name }),
        ...(email && { email }),
        ...(mobile && { mobile }),
        ...(password && { password: hashPassword }),
      }
    );

    return response.json({
      message: "Updated successfully",
      error: false,
      success: true,
      data: updateUser,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

export async function refreshToken(request, response) {
  try {
    const token =
      request.cookies.refreshToken ||
      request.headers?.authorization?.split(" ")[1];

    if (!token) {
      return response
        .status(401)
        .json({ message: "Invalid token", error: true, success: false });
    }

    const verifyToken = jwt.verify(token, process.env.SECRET_KEY_REFRESH_TOKEN);
    if (!verifyToken) {
      return response
        .status(401)
        .json({ message: "token is expired", error: true, success: false });
    }

    const userId = verifyToken._id;
    const newAccessToken = await generatedAccessToken(userId);

    const cookiesOption = { httpOnly: true, secure: true, sameSite: "None" };
    response.cookie("accessToken", newAccessToken, cookiesOption);

    return response.json({
      message: "New Access token generated",
      error: false,
      success: true,
      data: { accessToken: newAccessToken },
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: error.message || error, error: true, success: false });
  }
}

export async function userDetails(request, response) {
  try {
    const userId = request.userId;
    const user = await UserModel.findById(userId).select(
      "-password -refresh_token"
    );

    return response.json({
      message: "user details",
      data: user,
      error: false,
      success: true,
    });
  } catch (error) {
    return response
      .status(500)
      .json({ message: "Something is wrong", error: true, success: false });
  }
}
