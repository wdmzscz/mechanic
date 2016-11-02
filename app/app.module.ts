import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import{ headerComponent } from './component/header/headerComponent';
import { AppComponent } from './component/App/app.Component';

@NgModule({
	imports:[
	BrowserModule,
	FormsModule
	],
	declarations:[AppComponent, headerComponent],
	bootstrap:[AppComponent]
})

export class AppModule{}