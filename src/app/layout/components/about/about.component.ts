import {Component, Inject, OnInit} from '@angular/core';
import {AppConstVersion} from '../../../models/app-const-version';
import {CONSTANTS} from '../../../core/services/constants.service';
import {RANDOM_STRING} from '../../../core/services/generator.service';
import {LocalStorageService} from '../../../core/services/local-storage.service';
import {ConfigOptionsService} from '../../../core/services/config-options.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    @Inject(CONSTANTS) private constants: AppConstVersion,
    @Inject(RANDOM_STRING) private randomString: string,
    private localStorage: LocalStorageService,
    private configOptionsService: ConfigOptionsService
  ) { }

  ngOnInit(): void {
    this.checkConstantService();
    this.checkStringGeneratorService();
  }

  checkConstantService(): void {
    if (this.constants.App === 'TaskManager' &&
    this.constants.Ver === '1.0') {
      console.log('Constants service works correct');
    } else {
      console.log('Constants service works wrong');
    }
  }

  checkStringGeneratorService(): void {
    if (this.randomString) {
      console.log('random string is: ', this.randomString);
    } else {
      console.log('random string was not generated');
    }
  }

  saveInLocalStorage(): void {
    this.localStorage.setItem('hello', 'world');
    console.log('key "hello" and value "world" was added into localStorage');
  }
  getFromLocalStorage(): void {
    const itemInLocalStorage = this.localStorage.getItem('hello');
    console.log('get hello from localStorage: ', itemInLocalStorage);
  }
  removeFromLocalStorage(): void {
    this.localStorage.removeItem('hello');
    console.log('item hello was removed');
  }

  setConfig(): void {
    this.configOptionsService.setOptions({login: 'Wasia513'});
    console.log('config options was added');
  }
  getOptions(): void {
    this.configOptionsService.getOptions(['login', 'email']);
  }
}
