import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(){

  }

  ngOnInit(): void {
    firebase.default.initializeApp({
      apiKey: "AIzaSyAPIFVDVBrTxN-MoHeyujLGApnH-cT5j00",
      authDomain: "listado-personas-e94dd.firebaseapp.com",
    });
  }
  
  titulo = 'Listado de Personas';

}
