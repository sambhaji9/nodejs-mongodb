var mongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017";

mongoClient.connect(url, function(err, database) {
    if (err) throw err;

    var dbo = database.db('mydb');
    dbo.collection('customers').insertOne({name: "Sambhaji Mane", address: "Johannesburg"}, function(err) {
        if (err) throw err;

        console.log("data inserted successfully");
        database.close();
    });
});