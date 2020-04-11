import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from "@ionic/angular";
@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.scss'],
})
export class ModelComponent implements OnInit {
  @Input() modalTitle: string;
  @Input() content: string;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}
  async dismiss() {
    // dissmiss the pop-up on click of chiudi
    await this.modalCtrl.dismiss();
  }
}
