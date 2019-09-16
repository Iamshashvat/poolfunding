import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) { }
  uid: string;
  inventory: any;
  ngOnInit() {
    this.getInventory()
  }

  getInventory(){
    this.uid = this.afAuth.auth.currentUser.uid
    this.db.object(`NGO/${this.uid}/inventory`).valueChanges().subscribe(doc =>{
      this.inventory = doc;
      console.log(this.inventory);
    })


  }

}
