// Basic Express Framework

const express = require('express');
const app = express();

app.get('/hey', (req, res) => res.send('ho!'))

app.listen(8080)

// Connect express to js

const admin = require('firebase-admin');
const serviceAccount = require('./src/serviceAccountKey.json');
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
  return db.collection('sampleData').doc('react')
  .set(quoteData).then(() => 
  console.log('new Dialogue written to database'));
});

function getDialogue(){
  return new Promise(function(resolve, reject) {
  resolve({
  "quote":"I got Savi on my mindtest",
  "author":"Garbaref"
  });
})
}

// Get from database
var docRef = db.collection("sampleData").doc("react");

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
