import mysql2 from "mysql2";
import express from "express";
import cors from "cors";

const app = express();

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());
app.use(cors());

let mysqlConnection = mysql2.createConnection({
	user: "GB4",
	password: "GB4",
	database: "GB4db",
	host: "localhost",
	// socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

app.get("/creat-table", (req, res) => {
	let userinfo = `CREATE TABLE if not exists userinfo(
    user_id int auto_increment,
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    email varchar(255) not null,
    password varchar(255) not null,
    PRIMARY KEY (user_id)
)`;

	let uploadFile = `CREATE TABLE if not exists uploadFile(
       file_id int auto_increment,
        title varchar(255) not null,
        description text not null,
        file varchar(255) not null,
        PRIMARY KEY (file_id)
    )`;
	mysqlConnection.query(userinfo, (err, results, fields) => {
		if (err) console.log(err);
	});
	mysqlConnection.query(uploadFile, (err, resutls, fields) => {
		if (err) console.log(err);
	});
	res.end("Data inserted successfully!");
});

// app.post("/upload_file", (req, res)=>{
//     const {Title_Name, Description, img} = req.body;

//     let insertTitle = `INSERT INTO title(titlename) VALUES(?)`;
//     let insertDescription = `INSERT INTO description(title_id, description) VALUES(?, ?)`;
//     let insertFile = `INSERT INTO file(title_id, file) VALUES(?, ?)`

//     mysqlConnection.query(insertTitle, [Title_Name], (err, results, fields)=>{
//         if(err){
//             console.log(err)
//         }

//         let id = results.insertId;

//     mysqlConnection.query(insertDescription, [id, Description], (err, results, fields)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     mysqlConnection.query(insertFile,[id, img], (err, result, field)=>{
//         if(err){
//             console.log(err)
//         }
//     })
//     })
// })

// console.log("Data inserted successfully!");
// Axios.post ("http://localhost:5500/insert")

app.post("/insert", (req, res) => {
	const firstName = req.body.firstName;
	const lastName = req.body.lastName;
	const userEmail = req.body.userEmail;
	const password = req.body.password;
	const sqlInsert = `INSERT INTO userinfo(
        firstName,
        lastName, 
        email,
        password
      ) 
      values(?, ?, ?, ? )  `;
	mysqlConnection.query(
		sqlInsert,
		[firstName, lastName, userEmail, password],
		(err, results, fields) => {
			if (err) {
				console.log(err);
			}
		}
	);
});

app.listen(5500, () => {
	console.log("server listen port 5500");
});
