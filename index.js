const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: '5mb' })); // Increase limit to 50MB
app.use(bodyParser.urlencoded({ limit: '5mb', extended: true })); // Increase limit for URL-encoded data

 

require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const userRoute = require("./model/router")
// const { createPool } = require('mysql2');
var jwt = require('jsonwebtoken');

app.use("/", userRoute);



// const pool = createPool({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME,
//     connectionLimit: 10
// });



// app.get("/", (req, res)=> {
//     const sqlinseryt = "INSERT INTO sample ( LastName, FirstName, Address, City)VALUES ('azar', 'mohamed', 'sathy', 'annur')"
//     pool.query(sqlinseryt, (err, result, fields)=> {
//     // if (err) {
//     //     return console.log("error------"+err);
//     // }
//     // return console.log("result------"+result);
//     console.log("error------"+err);
//     console.log("result------"+result);
//     res.send("Helloo");

// }); 
// });

// // POsT WEBTOKEN API
// app.post("/api/token", (req, res) => {

//     const user = { id: 3 };
//     const token = jwt.sign({ user }, 'secret_key')
//     const sqlget = "SELECT * FROM sample";
//     res.json({
//         token: token 
//     })
//     // pool.query(sqlget, (err, result, fields) => {
//     //     res.send(result);

//     // console.log("error------" + err);
//     // console.log("result------" + result);
//     // });

// });

// GET API
// app.get("/api/get", (req, res) => {

//     const sqlget = "SELECT * FROM sample";
//     pool.query(sqlget, (err, result, fields) => {
//         res.send(result);

//         // console.log("error------" + err);
//         // console.log("result------" + result);
//     });

// });

// // POST API
// app.post("/api/post", (req, res) => {
//     const { LastName, FirstName, Address, City } = req.body;
//     const sqlinsert = "INSERT INTO sample ( LastName, FirstName, Address, City) VALUES (?, ?, ?, ?)"
//     pool.query(sqlinsert, [LastName, FirstName, Address, City], (err, result, fields) => {
//         if (err) {
//             return console.log(err);
//         }
//         if (res) {
//             return res.status(200).json({ error: false, responseMessage: "Added successfully" });

//         }
//     });

// });

// // DELETE API
// app.delete("/api/remove/:id", (req, res) => {
//     const { id } = req.params;
//     const sqldelete = "DELETE FROM sample WHERE PersonID = ?";

//     pool.query(sqldelete, id, (err, result, fields) => {
//         if (err) {
//             return console.log(err);
//         }
//         if (res) {
//             return res.status(200).json({ error: false, responseMessage: "Removed successfully" });

//         }
//     });

// });

// // UPDATE API
// app.put("/api/put/:id", (req, res) => {
//     const { id } = req.params;
//     const { LastName, FirstName, Address, City } = req.body;
//     const sqlinsert = "UPDATE sample SET LastName = ?, FirstName = ?, Address = ?, City = ? WHERE PersonID = ?";
//     pool.query(sqlinsert, [LastName, FirstName, Address, City, id], (err, result, fields) => {
//         if (err) {
//             return console.log(err);
//         }
//         if (res) {
//             return res.status(200).json({ error: false, responseMessage: "Added successfully" });

//         }
//     });

// });
app.listen(process.env.APP_PORT, () => {
    console.log("port", process.env.APP_PORT);

});

// app.listen(port, () => {
//     console.log("server up and running on PORT :", port);
//   });
// pool.query(`select * from registration`, function (err, result, fields) {
//     if (err) {
//         return console.log(err);
//     }
//     return console.log(result);
// }); 