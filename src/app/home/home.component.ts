import { Component, OnInit } from "@angular/core";
import * as camera from 'nativescript-camera';
import * as OCRPlugin from 'nativescript-ocr';

var ocr = new OCRPlugin.OCR();


@Component({
   selector: "Home",
   moduleId: module.id,
   templateUrl: "./home.component.html",
   styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   public receiptText: string = '';

   constructor() {
      // Use the component constructor to inject providers.
   }

   ngOnInit(): void {
      // Init your component properties here.
   }

   public onAddImage() {
      camera.requestPermissions().then(
         () => { // success
            camera.takePicture().then(
               (image) => {
                  ocr.retrieveText({
                     image
                  }).then(
                     (result) => {
                        this.receiptText = result.text;
                     }
                  )
               },
               () => {

               }
            )
         },
         () => { // failure

         }
      );
   }
}
