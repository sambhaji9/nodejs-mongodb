var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err, database) {
    if (err) throw err;

    var dbo = database.db("mydb");
    dbo.collection('customers').find({}).toArray(function(err, results) {
        if (err) throw err;

        console.log(results);
        database.close();
    });
});