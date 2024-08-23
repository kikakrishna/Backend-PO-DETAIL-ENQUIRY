// const { getUsers } = require("./router");

const { hashSync, genSaltSync, compareSync, } = require("bcrypt");
const { sign } = require("jsonwebtoken");
var bcrypt = require('bcrypt');

const {

    getUserByUserEmail,
    getsingleUsers,
    festuploaddata,
    addproducttable,
    getallvalues,
    updateproducttable,
    // festupload
    getUsers
} = require("./service");

module.exports = {
    getUsers: (req, res) => {
        getUsers((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getchattwo: (req, res) => {
        getchattwoo((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    login: (req, res) => {
        console.log(req);
        const body = req.body;
        console.log(body);
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }

            // console.log(body.password, "body");
            // console.log(results.password, "resultpwd");

            const result = bcrypt.compare(body.password, results.password);
            if (result) {
                // results.password = undefined;
                const jsontoken = sign({ result: results }, "qwe1234", {
                    expiresIn: "1h"
                });
                console.log("result");

                return res.json({
                    success: 1,
                    message: "login successfull",
                    token: jsontoken
                });

            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        });
    },

    chattwo: (req, res) => {
        console.log(req);
        const body = req.body;
        console.log(body);
        getchattwo(body.email, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }

            // console.log(body.password, "body");
            // console.log(results.password, "resultpwd");

            const result = bcrypt.compare(body.password, results.password);
            if (result) {
                // results.password = undefined;
                const jsontoken = sign({ result: results }, "qwe1234", {
                    expiresIn: "1h"
                });
                console.log("result");

                return res.json({
                    success: 1,
                    message: "login successfull",
                    token: jsontoken
                });

            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        });
    },

    addproductget: (req, res) => {
        // console.log(req);
        const body = req.body;
        console.log("body--------------------------------->",body);




        addproducttable(body, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: err
                });
            }

            // console.log(body.password, "body");
            // console.log(results.password, "resultpwd");

            const result = bcrypt.compare(body.password, results.password);
            if (result) {
                // results.password = undefined;
                const jsontoken = sign({ result: results }, "qwe1234", {
                    expiresIn: "1h"
                });
                console.log("result");

                return res.json({
                    success: 1,
                    message: "login successfull",
                    token: jsontoken
                });

            } else {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }
        });
    },







    // addproductget: (req, res) => {
    //     // console.log(req);
    //     const body = req.body;
    //     console.log(body);
    //     addproducttable(body, (err, results) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         if (!results) {
    //             return res.json({
    //                 success: 0,
    //                 data: "Invalid email or password"
    //             });
    //         }

    //         // console.log(body.password, "body");
    //         // console.log(results.password, "resultpwd");


    //     });
    // },

    getallUservalues: (req, res) => {

        console.log("req------------------",req.query);
        
        getallvalues((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },

    updateproduct: (req, res) => {
        // console.log(req);
        const body = req.body;
        console.log(body);
        updateproducttable(body, (err, results) => {
            if (err) {
                console.log(err);
            }
            if (!results) {
                return res.json({
                    success: 0,
                    data: "Invalid email or password"
                });
            }

            // console.log(body.password, "body");
            // console.log(results.password, "resultpwd");


        });





    },



    // Fest swiggy

    festupload: (req, res) => {
        console.log("test")




        const body = req.body;
        console.log(body);
        // addproducttable(body, (err, results) => {
        //     if (err) {
        //         console.log(err);
        //     }
        //     if (!results) {
        //         return res.json({
        //             success: 0,
        //             data: "Invalid email or password"
        //         });
        //     }


        festuploaddata(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }

            return res.json({
                success: 1,
                data: results
            });
        });
    },
}; 