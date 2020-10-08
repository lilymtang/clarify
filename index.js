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
	return db.collection('sampleData').doc('inspiration')
	.set(quoteData).then(() => 
	console.log('new Dialogue written to database'));
});

function getDialogue(){
	return new Promise(function(resolve, reject) {
	resolve({
	"quote":"I'm Batman",
	"author":"Batman"
	});
})
}

/* Create chat bot
0. Reproduce
1. Create webpage on node.js
2. Write all database messages onto website
3. Create chat feature to push messages to website & database
4. Deploy to Firebase
5. Push to Github

*/