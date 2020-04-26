var mongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

mongoClient.connect(url, function(err, database) {
    if (err) throw err;

    var dbo = database.db('mydb');

    var query = {address: 'jabalpur'};
    var newValue = { $set: {address: 'pune'}};

    dbo.collection('customers').updateOne(query, newValue, function(err, results) {
        if (err) throw err;

        console.log(results.result.n + ' documents updated');
        database.close();
    });
});