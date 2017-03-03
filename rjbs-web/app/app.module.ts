import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent }  from './app.component';
import { BsheetModule } from './bsheet/bsheet.module'
import { WelcomeComponent } from './home/welcome.component';
import { ReportModule } from './report/report.module';

@NgModule({
  imports: [    
    CommonModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    ReportModule,
    BsheetModule
   ],
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
