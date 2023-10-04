import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  showLog() {
    console.log('Test');
    return 'Test';
  }
}
