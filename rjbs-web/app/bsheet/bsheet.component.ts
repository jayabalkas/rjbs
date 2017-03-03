import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { BSService } from '../shared/bs.service';
import { IEntry } from '../shared/entry';

@Component({
    moduleId: module.id,
    templateUrl: 'bsheet.component.html'
})

export class BsheetComponent implements OnInit {

  public submitted: boolean;
  public bsForm: FormGroup;
  public pageTitle: String = 'Balance Sheet Entry';
  public status: String;
  public msgFlag: boolean = false;
  
  typeOfExps = ['Basic', 'Dress', 'Entertainment', 'Household', 'Medical'];
   
  constructor(private _fb: FormBuilder, private _bsService: BSService) {  	
  }

  ngOnInit() {  	  	
      this.createForm();
  }

  createForm() {
  	this.bsForm = this._fb.group({        
        entryDesc: ['', [<any>Validators.required, <any>Validators.minLength(5),<any>Validators.maxLength(50)]],
        typeOfExp: [this.typeOfExps[0], [<any>Validators.required]],
        storeName: ['', [<any>Validators.required, <any>Validators.minLength(3),<any>Validators.maxLength(50)]],
        expDate: ['', [<any>Validators.required, <any>Validators.minLength(10),<any>Validators.maxLength(10)]],
        amount: ['', [<any>Validators.required]]
    });
  }

  save(entry: IEntry, isValid: boolean) {
     this.submitted = true; // set form submit to true

     // check if model is valid
     // if valid, call API to save customer    
     console.log(entry, isValid);
     if (isValid) {
       this._bsService.saveEntry(entry).subscribe(
       data => {
       	this.msgFlag = true;
         // refresh the list
         console.log('Successfully saved!');
         this.status = 'Successfully saved!';
         return true;
       },
       error => {
       	 this.msgFlag = true;
       	 this.status = 'Error on saving Entry!';
         console.error('Error on saving Entry!');
         return Observable.throw(error);
       }
     );
     }
  }
  
  reset(){
  	this.bsForm.reset();
  	this.msgFlag = false;
  }
}