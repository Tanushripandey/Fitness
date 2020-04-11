import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModalViewComponent } from '../components/modal-view/modal-view.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController,
              public actionSheetController: ActionSheetController
    ) {}

  // async presentModal() {
  //   const modal = await this.modalCtrl.create({
  //     component: ModalViewComponent
  //   });
  //   return await modal.present();
  // }

}
