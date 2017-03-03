import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { BSService } from '../shared/bs.service';
import { IEntry } from '../shared/entry';
import { IReport } from '../shared/report';

@Component({
    moduleId: module.id,
    templateUrl: 'report.component.html'
})

export class ReportComponent implements OnInit {

  public entries: IEntry[];
  public pageTitle : String = 'Report';
  public submitted: boolean;
  public bsForm: FormGroup;
  public msgFlag: boolean = false;
  public status: String;
  
  reportTypes = ['-Select-','Monthly', 'Yearly'];
  months = ['-Select-','01','02','03','04','05','06','07','08','09','10','11','12'];
    
  constructor(private _fb: FormBuilder, private _bsService: BSService) {   
  }

  ngOnInit() {
     this.createForm();
     //this.loadReport();
  }
    
  createForm() {
    this.bsForm = this._fb.group({        
       reportType: [this.reportTypes[0], [<any>Validators.required]],
       month: [this.months[0], [<any>Validators.required]],
       year: ['', [<any>Validators.required, <any>Validators.minLength(4), Validators.pattern('[0-9]*')]] 
    });
  }
    
  monthValidation(){
      let flag: boolean = true;
      if(this.bsForm.controls['reportType'].getValue == 'Monthly' && this.bsForm.controls.month.value == '-Select-'){
          flag = false;
        }
      return flag;      
  }
    
  doClear() {
      this.bsForm.controls['month'].setValue(this.months[0]);
      this.bsForm.controls['year'].setValue('');
      this.entries = [];
      this.status = '';
  }
    
  save(report: IReport, isValid: boolean) {
     this.submitted = true; // set form submit to true

     // check if model is valid
     // if valid, call API to save customer
     console.log(report, isValid);
     if (isValid) {
       report.month = report.reportType == 'Yearly' ? 0 : report.month ;
       console.log('report', report);
       this._bsService.getReport(report).subscribe(
       data => {
        this.msgFlag = true;
         // refresh the list
         console.log('Report submitted!');
         this.entries = data;
         if(this.entries.length > 0){
            this.status = 'Report Loaded!';
         }
         else{
            this.status = 'No data found!';
         }
         return true;
       },
       error => {
         this.msgFlag = true;
         this.status = 'Error on get report!';
         console.error('Error on get report!');
         return Observable.throw(error);
       }
     );
     }
     else{
         
     }
  }

  loadReport() {
       this._bsService.loadReport().subscribe(
       data => {
       	 console.log('Successfully saved!');
         this.entries = data;
         return true;
       },
       error => {       	
         console.error('Error on loading report!');
         return Observable.throw(error);
       }
     );
  }
    
   reset(){
    this.bsForm.reset();
    this.entries = [];
    this.status = '';
    this.bsForm.controls['reportType'].setValue(this.reportTypes[0]);
    this.bsForm.controls['month'].setValue(this.months[0]);
  }
}