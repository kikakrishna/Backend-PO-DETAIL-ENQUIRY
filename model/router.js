const router = require("express").Router();
const { checkToken } = require("../auth/tokenvalidation");


const {
    getUsers,
    login,
    chattwo,
    getchattwo,
    festupload,
    // festget,
    addproductget,
    getallUservalues,
    updateproduct,

} = require("./controller")

// router.post("/login", login);
router.get("/getrows", getUsers);
// router.get("/getchattwo", getchattwo);

// router.put("/updateproduct", updateproduct);
router.post("/poupload", addproductget);
router.get("/getbydate", getallUservalues);


module.exports = router



