const pool = require("../config/database");
const moment = require('moment');

module.exports = {

    getUsers: callBack => {
        const sqlget = "SELECT * FROM sample";
        pool.query(`SELECT * FROM poupload`, (error, result) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, result);

        }

        )
    },

    getUserByUserEmail: (Email, callBack) => {
        // console.log(Email, "server");
        // console.log("fefefefefe");

        // const sqlget = "INSERT INTO chatbot (data)" 
        var sql = "INSERT INTO chattwo (data) VALUES (?)";
        const { name, code, category, image, description } = Email;

        pool.query(sql, [name, code, category, image, description], (error, results, fields) => {
            // console.log(results, "resultsserver");


            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
        );
    },










    getallvalues: (req, res) => {
        // const sqlget = "SELECT * FROM sample";
        const date = req.query.date;

        // Check if the date parameter is provided
        if (!date) {
            return res.status(400).json({ success: 0, message: 'Date query parameter is required' });
        }

        // Query to select records by date
        const query = `
          SELECT * FROM your_table_name
          WHERE DATE(created_date) = ?`;



        pool.query(query, [date], (error, result) => {
            console.log(result);
            // if (error) {
            //     return callBack(error);
            // }
            // return callBack(null, result);


            if (error) {
                return res.status(500).json({ success: 0, message: 'Database query error' });
            }

            res.json({ success: 1, data: results });

        }

        )
    },

    addproducttable: (data, callBack) => {

        console.log("---------------------------------->", data);




        // const formatDate = (dateStr) => {
        //     if (!dateStr) return null;
        //     return new Date(dateStr).toISOString().slice(0, 19).replace('T', ' ');
        // };

        const formatDate = (dateStr) => {
            if (!dateStr) return null;
            // Parse date and convert to MySQL DATETIME format
            return moment(dateStr, ["DD/MM/YYYY hh:mm A", "DD/MM/YYYY HH:mm"]).format('YYYY-MM-DD HH:mm:ss');
        };



        const query = `
    INSERT INTO grnupload (
      inbound_no, sto_no, asn_no, inbound_location, po_no, grn_no, created_date, grn_date,
      material_received_date, invoice_amount, inbound_type, invoice_no, vendor_code,
      inbound_line_no, sku_code, sku_name, lot_code, transporter_name, tracking_no,
      lot_mrp, lot_expiry, bin_location, unit_price, mrp, received_qty, expected_qty,
      lottable_03, lottable_04, lottable_05, lottable_06, lottable_07, vendor_sku_code,
      brand, damage_qty, putaway_done, grn_value_without_tax, grn_value_with_tax, igp_code,
      inbd_cost, open_qty, status, taxgrp_code, line_taxamount, external_po_code, userid,
      cust_ret_no, otb_reference_no, dn_no, dn_creation_date, dn_value
    ) VALUES ?
  `;


        const values = data.map(item => [
            item["Inbound No"],
            item["STO No"],
            item["ASN No"],
            item["Inbound Location"],
            item["PO No"],
            item["GRN No"],
            formatDate(item["Created Date"]),
            formatDate(item["GRN Date"]),
            formatDate(item["Material Received Date"]),
            item["Invoice Amount"],
            item["Inbound Type"],
            item["Invoice No"],
            item["Vendor Code"],
            item["Inbound Line No"],
            item["SKU Code"],
            item["SKU Name"],
            item["Lot Code"],
            item["Transporter Name"],
            item["Tracking No"],
            item["Lot MRP"],
            formatDate(item["Lot Expiry"]),
            item["Bin Location"],
            item["Unit Price"],
            item["MRP"],
            item["Recieved Qty"],
            item["Expected Qty"],
            item["Lottable 03"],
            item["Lottable 04"],
            item["Lottable 05"],
            item["Lottable 06"],
            item["Lottable 07"],
            item["Vendor SKU Code"],
            item["Brand"],
            item["Damage Qty"],
            item["Putaway Done"],
            item["GRN Value Without Tax"],
            item["GRN Value With Tax"],
            item["IgpCode"],
            item["INBD_COST"],
            item["Open Qty"],
            item["Status"],
            item["TaxGrpCode"],
            item["LineTaxamount"],
            item["External PO Code"],
            item["Userid"],
            item["Cust Ret No"],
            item["OTBReferenceNo"],
            item["DN No."],
            formatDate(item["DN Creation Date"]),
            item["DN Value"]
        ]);





        // const { name, code, category, image, description } = Email;
        // const query = 'INSERT INTO form_data (name, code, category, image, description) VALUES (?, ?, ?, ?, ?)';

        // var sql = "INSERT INTO form_data (name, code, category, image, description) VALUES (?, ?, ?, ?, ?)"
        // const image = Email.file;
        // console.log(image);
        pool.query(query, [values], (error, results, fields) => {
            // console.log(results, "resultsserver");
            if (error) {

                console.log("error--------------", error);

                return callBack(error);
            }
            return callBack(null, results[0]);
        }
        );
    },

    getsingleUsers: (id, callBack) => {
        console.log(id);
        const sqlget = "SELECT FROM new WHERE PersonID = ?";
        pool.query(`SELECT * FROM new WHERE id = ?`, [id], (error, result) => {
            if (error) {
                return callBack(error);
            }
            return callBack(null, result);

        }

        )
    },
    updateproducttable: (Email, callBack) => {
        console.log(Email, "server");
        // const { name, code, category, image, description } = Email;
        // const query = 'INSERT INTO form_data (name, code, category, image, description) VALUES (?, ?, ?, ?, ?)';
        const query = 'UPDATE form_data SET name = ?, code = ?, category = ?, image = ?, description = ? WHERE id = ?';
        // var sql = "INSERT INTO form_data (name, code, category, image, description) VALUES (?, ?, ?, ?, ?)"
        const image = Email.file;
        console.log(image);
        pool.query(query, [Email.name, Email.code, Email.category, Email.image, Email.description, Email.id], (error, results, fields) => {
            // console.log(results, "resultsserver");
            if (error) {
                return callBack(error);
            }
            return callBack(null, results[0]);
        }
        );
    },



    // swiggy fest

    festuploaddata: (id, callBack) => {
        console.log("efregrgrgg");
        const sql = 'INSERT INTO fest (filename, Date, file) VALUES (?, ?, ?)';

        pool.query(sql, [id.filename, id.Date, id.file], (error, results, fields) => {
            // console.log(results, "resultsserver");
            if (error) {
                return callBack(error);
            }
            // console.log(results)
            return callBack(null, results[0]);
        }

        )
    },
}