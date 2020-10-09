// create an express app
const express = require("express")
const app = express()

// use the express-static middleware
app.use(express.static("public"))

// define the first route
app.get("/", function (req, res) {
  res.send("<h1>Hello World!</h1>")
})

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
  () => console.log("Server is running..."));
  



const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
//initialize admin SDK using serciceAcountKey
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

// Pushes messages to database

getDialogue().then(result =>{
  console.log(result);
  const obj = result;
  const quoteData = {
    quote: obj.quote,
    author: obj.author
  };
  return db.collection('sampleData').doc('fax')
  .set(quoteData).then(() => 
  console.log('new Dialogue written to database'));
});

function getDialogue(){
  return new Promise(function(resolve, reject) {
  resolve({
  "quote":"I got Savi on my mind",
  "author":"Garry"
  });
})
}

// Get from database
var docRef = db.collection("sampleData").doc("newentry");

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});



/* Create chat bot
0. Reproduce (DONE)
1. Create webpage on node.js (DONE)
2. Get data from database (DONE)
3. Create chat feature to push messages to website & database
4. Deploy to Firebase
5. Push to Github

*/  