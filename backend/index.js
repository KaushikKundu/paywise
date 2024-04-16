const express = require("express");
const rootRouter = require('./routes/index');
//const userRouter = require('./routes/user');
const PORT = 3000;
//const router = express.Router();
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.use('/api/v1', rootRouter);


app.listen(PORT, () => {
    console.log("app running");
})
