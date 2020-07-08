import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
})
export class Page2Page implements OnInit {

  constructor(
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
 voltar(){
   this.navCtrl.navigateBack("home");
 }
}
