import http from "http";
import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "openapi",
  password: "",
});

appendFile.get("/users", (req, res) => {
  db.query("SELECT * FROM user", (err, results) => {
    if (err) {
      res.ststus(500).send("Internal Server Eror");
      return;
    }
    res.json(results);
  });
});
server.listen(3000, () =>
  console.log("Server berjalan di http:/localhost:3000")
);
