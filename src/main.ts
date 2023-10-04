import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { LogService } from './log.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <h2>Log message is : {{ logMessage }}!</h2>
    <a target="_blank" href="https://multivers-dev.github.io/angular-cookbook/en/">
      Learn more about Angular CookBook
    </a>
  `,
})
export class App {
  name = 'Angular CookBook';
  logMessage = '';
  constructor(private logService: LogService) {
    this.logMessage = this.logService.showLog();
  }
}

bootstrapApplication(App);
