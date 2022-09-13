
const sqlite3 = require("sqlite3").verbose();
const dbname = "univers.db";

let db = new sqlite3.Database(dbname,(err)=>{
    if(err) throw err; 
    console.log("Base de nonnée initialisé dans le fichier :" + dbname);
});

//db.run('CREATE TABLE IF NOT EXISTS planetes(name varchar(25));');

/* db.run("insert into planetes(name) values(?)",["Mars"]);
db.run("insert into planetes(name) values(?)",["Terre"]);
db.run("insert into planetes(name) values(?)",["Pluton"]);
db.run("insert into planetes(name) values(?)",["Jupiter"]);
db.run("insert into planetes(name) values(?)",["Mercure"]);
 */
 
//db.run("create unique index rowid on planetes(name)");
//db.run("drop index rowid ");
//db.run("alter table planetes drop rowid ");

db.all("select rowid,* from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data);
}); 

//db.run("delete from planetes");
