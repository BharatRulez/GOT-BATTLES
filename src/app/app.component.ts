import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Array<any>;
  count = 0;
  stats:{}

  constructor(private _dataService: DataService) {

    this._dataService.getBattleList()
      .subscribe(res => this.users = res.data);
    this._dataService.getBattleCount()
      .subscribe(res => this.count = res.data)
    this._dataService.getStats()
        .subscribe(res => this.stats = res.data)  
  }
  

}
