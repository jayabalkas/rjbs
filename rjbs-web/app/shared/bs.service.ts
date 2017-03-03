import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Response, Http } from '@angular/http';

import { IEntry } from './entry';
import { IReport } from '../shared/report';

@Injectable()
export class BSService {
  
  constructor(private _http: Http) { }
  
  saveEntry(entry: IEntry) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(entry);
    console.log("body",body);
    return this._http.post('https://rjbs-sevices.cfapps.io/saveEntry', body, options).map((res: Response) => res.json());
  }
   
  loadReport() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers })    
    console.log("loadReport");
    return this._http.get('https://rjbs-sevices.cfapps.io/showEntry', options).map((res: Response) => res.json());
  }
    
  getReport(report: IReport) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers })    
    let url = 'https://rjbs-sevices.cfapps.io/getReport?year=' + report.year + '&month=' + report.month;
    console.log("url", url);
    return this._http.get(url, options).map((res: Response) => res.json());
  }
  
}