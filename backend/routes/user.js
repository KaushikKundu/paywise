const express = require("express");
const userRouter = express.Router();
const {authMiddleware} = require("../middleware")
const z = require("zod");
const {User,Account} = require("../db");
const jwt = require("jsonwebtoken");
const config = require("../config")
const signupBody = z.object({
  username: z.string().email(),
  password: z.string(),
  firstname: z.string(),
  lastname: z.string(),
});
const signinBody = z.object({
  username: z.string().email(),
  password: z.number(),
});
const updateBody = z.object({
  firstname: z.string().optional(),
  lastname: z.string().optional(),
  password: z.number().optional()
});
userRouter.post("/signup", async (req, res) => {
  // collecting formdata i.e schema design
  const { success } = signupBody.safeParse(req.body);
  console.log(success);
  if (!success) {
    return res.status(411).json({
      message: " Incorrect inputs",
    });
  }
  const existingUser = await User.findOne({ username: req.body.username });
  console.log(existingUser)
  if (existingUser) {
    return res.status(409).json({
      message: "Email already exists",
    });
  }
  const user = await User.create({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password,
  });
  const userId = user._id;
  console.log(userId)
  // new  account creation
  await Account.create({
    userId,
    balance: 1 + Math.random()*10000
  })
  
  const token = jwt.sign(
    {userId},
    config.JWT_SECRET
  );
  res.json({
    message: "User created successfully",
    token,
  });
});
userRouter.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    res.status(400).json({
      message: "Incorrect inputs",
    });
  }
  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    const token = jwt.sign(
      {
        userId: existingUser._id,
      },
      config.JWT_SECRET
    );
    res.status(411).json({
      token: token,
    });
    return;
  }

  res.status(411).json({
    message: "Error while logging in",
  });
});
userRouter.put("/update",authMiddleware, async (req, res) => {
  const { success } = updateBody.safeParse(req.body);
  if (!success) {
    res.json({
        message: "Error while updating information"    
    })
  }
  await User.updateOne({_id: req.userId}, req.body);

  res.json({
    message: "Updated successfully"
})
});

module.exports = userRouter