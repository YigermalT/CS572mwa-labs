var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').mongoClient;



/* GET home page. */
// router.get('/', function(req, res, next) {
// mongoClient.connect('mongodb://127.0.0.1:27017/lab7',function(err,client){
//   if(err) throw err;
//   const db = client.db('lab7');

//   db.collection('Homework7').findOne({},fucntion(err, doc){
//     if(err) throw err;
//     console.log(doc);

//     client.close();
//   });
//   console.log('called findOne');
//   });


//   res.json("doc");
// });

module.exports = router;
