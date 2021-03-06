
import { Flashlight } from '@ionic-native/flashlight';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {HttpClientModule}from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Camera} from '@ionic-native/camera';
import{Crop}from '@ionic-native/crop';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   Camera,
   Flashlight,
Crop,
   
   
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
