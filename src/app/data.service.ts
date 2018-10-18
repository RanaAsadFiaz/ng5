import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private items = new BehaviorSubject<any>(['The Initial Item', 'Another Item that you want to add']);
  item = this.items.asObservable();
  constructor() { }

  changeItem(item)
  {
    this.items.next(item);
  }
}
