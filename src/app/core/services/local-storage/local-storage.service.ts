// root: => https://firstclassjs.com/persist-data-using-local-storage-and-angular/
// => see how to use it in HTML file with async pipe
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class LocalStorageService {
  localStorage: Storage;

  changes$ = new Subject();

  constructor() {
    this.localStorage = window.localStorage;
  }

  // метод для установки значения: строки или объекта
  setItem(key: string, value: string | { [key: string]: any }): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.setItem(key, JSON.stringify(value));

      this.changes$.next({
        type: 'set',
        key,
        value
      });

      return true;
    }
    return false;
  }

  // получения значения: строки или объекта
  getItem<T>(key: string): T {
    if (this.isLocalStorageSupported) {
      return JSON.parse(this.localStorage.getItem(key));
    }
    return null;
  }

  // удаления значения по ключу
  removeItem(key: string): boolean {
    if (this.isLocalStorageSupported) {
      this.localStorage.removeItem(key);

      this.changes$.next({
        type: 'remove',
        key
      });

      return true;
    }
    return false;
  }

  get isLocalStorageSupported(): boolean {
    return !!this.localStorage;
  }
}
