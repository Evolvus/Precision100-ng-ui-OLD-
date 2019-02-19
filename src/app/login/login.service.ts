import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isUserAuthenticated: boolean = false;
  isAuthenticated: Subject<boolean> = new Subject();;
  constructor() { 

  }
}
