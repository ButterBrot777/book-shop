import { Component, Inject, OnInit } from '@angular/core';

import {
  ConfigOptionsService,
  Constants,
  CONSTANTS,
  LocalStorageService,
  RANDOM_STRING,
} from '../../../core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  private constants: Constants;
  private randomString: string;
  private localStorage: LocalStorageService;
  private configOptionsService: ConfigOptionsService;

  constructor(
    @Inject(CONSTANTS) constants: Constants,
    @Inject(RANDOM_STRING) randomString: string,
    localStorage: LocalStorageService,
    configOptionsService: ConfigOptionsService
  ) {
    this.constants = constants;
    this.randomString = randomString;
    this.localStorage = localStorage;
    this.configOptionsService = configOptionsService;
  }

  public ngOnInit(): void {
    this.checkConstantService();
    this.checkStringGeneratorService();
  }

  private checkConstantService(): void {
    if (this.constants.App === 'TaskManager' && this.constants.Ver === '1.0') {
      console.log('Constants service works correct');
    } else {
      console.log('Constants service works wrong');
    }
  }

  private checkStringGeneratorService(): void {
    if (this.randomString) {
      console.log('random string is: ', this.randomString);
    } else {
      console.log('random string was not generated');
    }
  }

  private saveInLocalStorage(): void {
    this.localStorage.setItem('hello', 'world');
    console.log('key "hello" and value "world" was added into localStorage');
  }

  private getFromLocalStorage(): void {
    const itemInLocalStorage = this.localStorage.getItem('hello');
    console.log('get hello from localStorage: ', itemInLocalStorage);
  }

  private removeFromLocalStorage(): void {
    this.localStorage.removeItem('hello');
    console.log('item hello was removed');
  }

  private setConfig(): void {
    this.configOptionsService.setOptions({ login: 'Wasia513' });
    console.log('config options was added');
  }

  private getOptions(): void {
    this.configOptionsService.getOptions(['login', 'email']);
  }
}
