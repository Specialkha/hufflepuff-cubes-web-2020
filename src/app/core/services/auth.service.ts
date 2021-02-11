import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpService } from '../http/user/http.service';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new BehaviorSubject<string>('');

  dataFromObservable = this.user$.asObservable();

  authToken:string;

  constructor() {
  }

  public notifyObservable(data: string) {
    if (data) {
      this.user$.next(data);
    };
  }
}
