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
  const Http = new XMLHttpRequest();
  const url='https://single-show-calendar-default-rtdb.firebaseio.com/posts.json';
  Http.open("GET", url);
  Http.send();

  Http.onreadystatechange = (e) => {
    var data = (Http.responseText)
    document.getElementById("demo").innerHTML = JSON.stringify(data, undefined, 2);
  }