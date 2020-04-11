import { Component } from '@angular/core';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ModelComponent } from '../components/model/model.component';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalCtrl: ModalController,
              public actionSheetController: ActionSheetController
    ) {}

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModelComponent,
      componentProps: {
        modalTitle: 'Modal-Title',
        content: 'SATYANSHU!!'
      },
      cssClass: '',
      backdropDismiss: false,
      animated: false
    });
    modal.onDidDismiss().then(returnData => {
      if (returnData.data) {

      }
    });
    return await modal.present();
    }
  }