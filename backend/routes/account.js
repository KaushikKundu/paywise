const express = require("express");
const {Account} = require("../db")
const {authMiddleware} =require("../middleware");
const { default: mongoose } = require("mongoose");
const accountRouter = express.Router()

accountRouter.get("/balance", authMiddleware, async (req,res)=>{
    const userId = req.userId;
    const account = await Account.findOne({userId});
    res.status(200).json({
        "balance": account.balance
    })
})
accountRouter.post("/transfer", authMiddleware, async(req,res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const {to, amount} = req.body;
    const myAccount = await Account.findOne({userId: req.userId}).session(session);
    if(!myAccount || amount > myAccount.balance){
        session.abortTransaction();
        return res.status(400).json({
            message:"Insufficient balance"
        })
    }
    const toAccount = await Account.findOne({userId: to}).session(session);
    if(!toAccount){
        session.abortTransaction();
        return res.status(400).json({
            message:"Receiver not found"
        })
    }
  await Account.updateOne({userId:to},{$inc:{balance: amount}}).session(session);
  await Account.updateOne({userId:req.userId},{$inc:{balance: -amount}}).session(session);
    await session.commitTransaction();
    res.json({
        message:"transfer successful"
    })
})

module.exports = accountRouter;