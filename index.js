// import our restaurants
const restaurants = require("./restaurants.json");

// check if this is correct by console.log()
// console.log(restaurants[0].name);
//expected value 'Bolay'

// import a set of tools to talk to firebase and Firestore
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

// import our credentials
const credentials = require("./credentials.json");

//create firebase services
initializeApp({
  credential: cert(credentials),
});

// connect to Firestore
const db = getFirestore();

// create a collection called "restaurants"
const restRef = db.collection('restaurants')


// add each restaurant
// restRef.add(restaurants[3]) // this will go into our database and add a restaurant as a doc with all that information
//  .then(doc=>{
//      console.log('Added restaurant', doc.id);
//  })
//  .catch(err =>{
//       console.error(err);
//  });

// read one document
// db.collection("restaurants")
//   .doc("fLhiCGRmKoJ20hm4VPPj")
//   .get()
//   .then((doc) => {
//     console.log(doc.id, "-->", doc.data()); // doc.data gets us the data from the document
//   })
//   .catch((err) => console.error(err));

// get all documents
restRef
  .get()
  .then((snapshot) => {
    //by convention we call getting a whole collection a snapshot
    snapshot.forEach((doc) => {
      console.log(doc.id, "-->", doc.data());
    });
  }) // callback function
  .catch(console.error()); // this is equivalent to (err) => console.error(err)

// querying a collection
restRef.where('name', '==', 'Bolay').get()
 .then(snapshot => {
     snapshot.forEach(doc => {
         console.log(doc.data())
     });
 })
 .catch(console.error);


