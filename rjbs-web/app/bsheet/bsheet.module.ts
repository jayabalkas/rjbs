import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BsheetComponent } from './bsheet.component';
import { BSService } from '../shared/bs.service';

@NgModule({
  imports: [
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: 'bsheet', component: BsheetComponent }
    ])
   ],
  declarations: [ BsheetComponent ],
  providers: [BSService]
})
export class BsheetModule {
  
}
