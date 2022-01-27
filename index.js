// import our restaurants
const restaurants = require('./restaurants.json');

// check if this is correct by console.log()
console.log(restaurants[0].name)
//expected value 'Bolay'

// import a set of tools to talk to firebase and Firestore
const {initializeApp, applicationDefault, cert} = require('firebase-admin/app');
const {getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

// import our credentials
const credentials = require('./credentials.json');

//create firebase services
initializeApp({
    credential: cert(credentials)
});

// connect to Firestore
const db = getFirestore();

// create a collection called "restaurants"


// add each restaurant
db.collection('restaurants').add(restaurants[0]) // this will go into our database and add a restaurant as a doc with all that information
 .then(doc=>{
     console.log('Added restaurant', doc.id);
 })
 .catch(err =>{
      console.error(err);
 });

