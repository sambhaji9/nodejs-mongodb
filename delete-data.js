var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

mongoClient.connect(url, function (err, database) {
    if (err) throw err;

    var dbo = database.db('mydb');
    dbo.collection('customers').deleteOne({address: 'wagholi'}, function(err, results) {
        if (err) throw err;

        console.log(results.result.n + ' document deleted');
        database.close();
    });
});