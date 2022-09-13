
const sqlite3 = require("sqlite3").verbose();
const dbname = "univers.db";

let db = new sqlite3.Database(dbname,(err)=>{
    if(err) throw err; 
    console.log("Base de nonnée initialisé dans le fichier :" + dbname);
});

//db.run("drop table planetes");

 //db.run('CREATE TABLE IF NOT EXISTS planetes(id INTEGER PRIMARY KEY AUTOINCREMENT,name varchar(25),size varchar(255),created_at datetime default current_timestamp not null);');

/* db.run("insert into planetes(name,size) values(?,?)",["Mars","3454645"]);
db.run("insert into planetes(name,size) values(?,?)",["Pluton","64654654"]);
db.run("insert into planetes(name,size) values(?,?)",["Jupiter","746464"]);
db.run("insert into planetes(name,size) values(?,?)",["Terre","564656565"]);
db.run("insert into planetes(name,size) values(?,?)",["Mercure","876464654"]);  */

 
//db.run("create unique index rowid on planetes(name)");
//db.run("drop index rowid ");
//db.run("alter table planetes drop rowid ");

/* db.all("select * from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data);
}); 
 */

/* db.each("select * from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data.id,data.name,data.size);
}); */
console.log("la premiere ligne :")
db.get("select * from planetes",(err,data)=>{
    if(err) throw err;
    console.log(data.id,data.name,data.size);
});
//db.run("delete from planetes");
