import User from "../models/User.js";

export const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).send(users);
};

export const createUser = async (req, res) => {
  const {
    username,
    password,
    firstName,
    lastName,
    dateOfBirth,
    email,
    telephone,
    gender,
  } = req.body;

  console.log(req.body);

  try {
    const newUser = await User.create({
      username,
      password,
      firstName,
      lastName,
      dateOfBirth,
      email,
      telephone,
      gender,
    });

    res.status(200).send("User created successfully!");
  } catch (error) {
    res.status(500).send("Bad request!" + error.message);
  }
};
