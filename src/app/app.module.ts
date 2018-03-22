import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'; 
import {ReactiveFormsModule} from '@angular/forms';



import { AppComponent } from './app.component';
import { MatLoginComponent } from './mat-login/mat-login.component';


@NgModule({
  declarations: [
    AppComponent,
    MatLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
     MaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
