const express = require("express")
const userRouter = require("./user")
const accountRouter = require("./account")

const router = express.Router();

router.use("/user", userRouter); // any req that starts with /user will trigger the middleware.
router.use("/account", accountRouter);

module.exports = router;

