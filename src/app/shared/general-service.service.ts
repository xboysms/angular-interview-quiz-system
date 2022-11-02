import { Injectable } from '@angular/core';
import { Observable, forkJoin, Subscription, of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralServiceService {
  public actionSubject: BehaviorSubject<any> = new BehaviorSubject<any>({action: "", data: null});
  public actionObs$: Observable<any> = new Observable();

  
  constructor() { 
    this.actionObs$ = this.actionSubject.asObservable();
  }

}
