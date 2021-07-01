const express=require("express");
const router=express.Router();

const {contact}=require('../controller/contact');

router.post("/query",contact)
// router.get('/query',read);

module.exports=router;