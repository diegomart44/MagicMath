import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {
  private userIdSubject = new BehaviorSubject<string | null>(null);
  userId$ = this.userIdSubject.asObservable();

  constructor() {}

  setUserId(userId: string) {
    this.userIdSubject.next(userId);
  }

  getUserId(): string | null {
    return this.userIdSubject.getValue();
  }

  clearUserId() {
    this.userIdSubject.next(null);
  }
}
