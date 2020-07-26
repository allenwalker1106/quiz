
// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyAuuOJcLK8f9n_cDcINDkHyDgthlNaGdaE",
authDomain: "hackathon-9c707.firebaseapp.com",
databaseURL: "https://hackathon-9c707.firebaseio.com",
projectId: "hackathon-9c707",
storageBucket: "hackathon-9c707.appspot.com",
messagingSenderId: "458524152427",
appId: "1:458524152427:web:1b9e4ec9e42b76916cd72e",
measurementId: "G-55306DNBJN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

async function   getQuestion(){
    firebase.firestore().collection("questions").get().then(function(querySnapshot) {
        let result =[]
        querySnapshot.forEach(function(dat) {
            // doc.data() is never undefined for query doc snapshots
            result.push(dat.data());
        });
        console.log(JSON.stringify(result));
    });
}