import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { BSService } from '../shared/bs.service';
import { ReportComponent } from './report.component';

@NgModule({	
  imports: [
    HttpModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forChild([
      { path: 'report', component: ReportComponent }
    ])
   ],
  declarations: [ ReportComponent ],
  providers: [BSService]
})
export class ReportModule {
  
}
