import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: "AIzaSyCVXukk_qq3UGvuCd1zfEmDJDAApEnuItw",
      authDomain: "http-client-42c13.firebaseapp.com",
      databaseURL: "https://http-client-42c13.firebaseio.com",
      projectId: "http-client-42c13",
      storageBucket: "http-client-42c13.appspot.com",
      messagingSenderId: "585660399583",
      appId: "1:585660399583:web:3a215ee8865604305b4e6a",
      measurementId: "G-QYL3BT912P"
    };
    firebase.initializeApp(config);
  }
}
