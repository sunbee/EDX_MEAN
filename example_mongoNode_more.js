// JavaScript File
var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db) {
  if (error) {
    console.log(error);
    process.exit(1);
  }

  db.collection('movies').deleteMany({}, function(error, results) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
  });
  
  var doc = {
    title: "Jaws",
    year: 1975,
    director: "Steven Spielberg",
    rating: "PG",
    ratings: {
      critics: 80,
      audience: 97
    },
    screenplay: ["Peter Benchley", "Richard Gotlieb"]
  };
  


    db.collection('movies').insert(doc, function(error, result) {
    if (error) {
      console.log(error);
      process.exit(1);
    }
    
    var query;
    query = {year: 1975}; // Simple JSON field
    query = {year: 1975, rating: "PG"}; // Search multiple fields
    query = {screenplay: "Peter Benchley"}; // Search an array
    query = {'ratings.audience': {'$gte':  90}}; // Search nested fields with 
                        // dot operator for nested queries
                        // comparison operator (greater than)

    db.collection('movies').find(query).toArray(function(error, docs) {
      if (error) {
        console.log(error);
        process.exit(1);
      }

      console.log('Found docs query no. 1:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  });
});