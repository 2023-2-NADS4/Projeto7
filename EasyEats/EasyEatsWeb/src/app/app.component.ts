import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'EasyEatsFrontAngularWeb';

  ngOnInit() {
    const firebaseConfig = {
      apiKey: "AIzaSyBwz9X50xBwW56Q1e-HXUOmwvqWYUrJACg",
      authDomain: "easyeatsfrontangularweb.firebaseapp.com",
      databaseURL: "https://easyeatsfrontangularweb-default-rtdb.firebaseio.com",
      projectId: "easyeatsfrontangularweb",
      storageBucket: "easyeatsfrontangularweb.appspot.com",
      messagingSenderId: "752463924633",
      appId: "1:752463924633:web:8ad431b975bd3e998e5708",
      measurementId: "G-591LKP8Q5F"
    };

    firebase.initializeApp(firebaseConfig)
    console.log('Sucesso!');
  }
}
