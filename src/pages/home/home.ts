
import { Component } from '@angular/core';
import { NavController,AlertController,Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Flashlight } from '@ionic-native/flashlight';
import{Crop}from '@ionic-native/crop';
import { ThrowStmt } from '@angular/compiler';

@Component({
 selector: 'page-home',
 templateUrl: 'home.html'
})
export class HomePage {
 public photos : any;
 public base64Image : string;
 isOn:boolean;
 constructor(public navCtrl: NavController,private camera: Camera,private alertCtrl : AlertController,private Platform:Platform,private flash:Flashlight,public crop:Crop) {

  this.Platform.ready().then(()=>{
    this.udateflashlight();
    })
 }
 ngOnInit() {
   this.photos = [];
 }
 
 takePhoto(){
   const options : CameraOptions = {
     quality: 50, // picture quality
     destinationType: this.camera.DestinationType.DATA_URL,
     encodingType: this.camera.EncodingType.JPEG,
     mediaType: this.camera.MediaType.PICTURE
   }

   this.camera.getPicture(options) .then((imageData) => {
     this.base64Image = "data:image/jpeg;base64," + imageData;
     this.photos.push(this.base64Image);
     this.photos.reverse();
   }, (err) => {
     console.log(err);
   });
}
deletePhoto(index) {
 this.photos.splice(index, 1);
let confirm =this.alertCtrl.create({
 title: 'Sure you want to delete this photo?',
 message:'',
 buttons:[
   {
     text: 'No',
     handler: () => {
       console.log('Disagree clicked');
     }
   },{
     text: 'Yes',
     handler: () =>{
       console.log('Agree clicked');
           this.photos.splice(index, 1);
     }
   }
 ]
});
confirm.present();
}
Gallery(){
  const options : CameraOptions = {
    quality: 100, // picture quality
    destinationType: this.camera.DestinationType.DATA_URL,
    sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    correctOrientation:true,
    saveToPhotoAlbum:true
  }
  this.camera.getPicture(options) .then((imageData) => {
    this.base64Image = "data:image/jpeg;base64," + imageData;
    this.photos.push(this.base64Image);
    this.photos.reverse();
  }, (err) => {
    console.log(err);
  });
  }
  
      toggle():void{
        this.flash.toggle();
        this.udateflashlight();
        } 
        udateflashlight():void{
        this.isOn=this.flash.isSwitchedOn();
    
        }
        
  CropPicture(){
let option={
  quality:100,
  targetHeight:100,
  targetWidth:100,
};

this.crop.crop(this.base64Image,option).then(newImgeUrl =>{

  this.base64Image= newImgeUrl;

},err =>{
  alert("Error is:"+ err);
});
  
}

}

    
 
 