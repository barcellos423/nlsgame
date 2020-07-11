function myFunction() {
var db;
var shortName = 'teste';
var version = '1.0';
var displayName = 'teste';
var maxSize = 65535;

db = openDatabase(shortName, version, displayName, maxSize);

db.transaction(function(tx){tx.executeSql('CREATE TABLE teste(id integer not null, nome text)')})

function sucesso(){
alert("inseriu")
};
function error(){
alert("esta com erro")
};

db.transaction(function(tx){tx.executeSql('INSERT INTO teste VALUES(1,"TESTE")')})
db.transaction(function(transaction) {
transaction.executeSql('INSERT INTO teste(id, nome) VALUES (?,?)',[5,"robson"], sucesso,error);
});

db.transaction(function(tx){tx.executeSql('SELECT * from teste',[],function(transaction, result){console.log(result)})});
    }