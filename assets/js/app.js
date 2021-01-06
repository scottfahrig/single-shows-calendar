// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCMZj5I4ynCYX9rijrDdWSxrlpLnaK0sAI",
  authDomain: "single-show-calendar.firebaseapp.com",
  databaseURL: "https://single-show-calendar-default-rtdb.firebaseio.com",
  projectId: "single-show-calendar",
  storageBucket: "single-show-calendar.appspot.com",
  messagingSenderId: "554986401392",
  appId: "1:554986401392:web:bd2c514b417ec45d260eb5",
  measurementId: "G-3Z5S8G8021"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.database();

// Function to convert Firebase snapshot to JS array
function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var posts = childSnapshot.val();
        posts.key = childSnapshot.key;
        var x = childSnapshot.toString();
        document.getElementById("demo").innerHTML = x;

        returnArr.push(posts);

        
    });

    return returnArr;

    for (var [i] = 0; i < posts.length; i++) {
        var name = posts[i];
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item));
        ul.appendChild(li);
    }
};

firebase.database().ref('/posts').on('value', function(snapshot) {
    console.log(snapshotToArray(snapshot));

});