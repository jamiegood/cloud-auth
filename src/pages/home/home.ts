import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import PouchDB from 'pouchdb';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  db: any;

  constructor(public navCtrl: NavController) {

    this.db = new PouchDB('cloudo');

    console.log(this.db);
  }

}
