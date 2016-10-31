import {ngModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import{ headerComponent } from 'header/headerComponent';
import {mainComponent } from 'main/mainComponent';

@ngModule({
	imports:[
	BrowserModule,
	FormsModule
	],
	declarations:[mainComponent, headerComponent],
	bootstrap:[mainComponent, headerComponent]
})

export