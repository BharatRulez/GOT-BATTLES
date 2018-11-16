import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  result:any;

  constructor(private _http: Http) { }

  getBattleList() {
    return this._http.get("http://13.127.163.244:3000/api/battle/list")
      .map(result => this.result = result.json());
  }

  getBattleCount(){
    return this._http.get("http://13.127.163.244:3000/api/battle/count")
    .map(result => this.result = result.json());
  }
  
  getStats(){
    return this._http.get("http://13.127.163.244:3000/api/battle/stats")
    .map(result => this.result = result.json() );
  }
  //  search(){
  //    return this._http.get("http://13.127.163.244:3000/api/battle/count")
  //  }

}
