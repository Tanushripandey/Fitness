import { Component } from '@angular/core';
import { ActionSheetController, LoadingController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  photo : SafeResourceUrl;

  constructor( public actionSheetController: ActionSheetController,
                private sanitizer: DomSanitizer,
                public loadingController: LoadingController 
    ) {}

    async presentLoading() {
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 2000
      });
      await loading.present();
  
      const { role, data } = await loading.onDidDismiss();
      console.log('Loading dismissed!');
    }

    ionViewDidEnter() {
      this.photo;
    }

  async takePictureFromCamera() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.presentLoading();
      this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
      console.log('CameraData'+this.photo)
  }

  async takePictureFromGallery() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Photos
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  async  actionPerform(e) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Choose your options',
      buttons: [{
        text: 'Camera',
        icon: 'camera-outline',
        handler: () => {
          this.takePictureFromCamera();
        }
      }, {
        text: 'Choose from gallery',
        icon: 'folder-outline',
        handler: () => {
          this.takePictureFromGallery();
        }
      },
      {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  
}
