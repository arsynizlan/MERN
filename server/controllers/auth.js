import User from "../models/user.js";
import { hashPassword, comparePassword } from "../helpers/auth.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  try {
    /** 1.  Desctructure name, email, password from req.body */
    const { name, email, password } = req.body;

    /** 2. Validation */
    if (!name.trim()) {
      return res.json({ error: "Name is required" });
    }
    if (!email) {
      return res.json({ error: "email is required" });
    }
    if (!password) {
      return res.json({ error: "password is required" });
    }
    if (password.length < 6) {
      return res.json({ error: "password must be at least 6 characters" });
    }

    /** 3. Check if email is taken */
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ error: "Email is already taken" });
    }

    /** 4. Hash the password */
    const hashedPassword = await hashPassword(password);

    /** 5. Register User */
    const user = await new User({
      name,
      email,
      password: hashedPassword,
    }).save();
    /** 6.  */
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    /** 7. Send Response */
    res.json({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        address: user.address,
      },
      token,
    });
  } catch (err) {
    console.log(err);
  }
};
