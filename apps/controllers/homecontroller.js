var express = require("express");
var router = express.Router();

router.use("/", function(req,res){
    res.json({"message" : "this id product page"});
});
module.exports = router;