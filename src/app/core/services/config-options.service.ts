import {Injectable} from '@angular/core';
import {LocalStorageService} from './local-storage.service';
import {ConfigOptions} from '../../shared/models/config-options';

@Injectable()
export class ConfigOptionsService {
  constructor(
    private localStorage: LocalStorageService
  ) {
  }

  // Partial применяется, когда нужно сделать все члены объекта необязательными
  setOptions(options: Partial<ConfigOptions>): void {
    for (const key in options) {
      if (key && options[key]) {
        this.localStorage.setItem(key, options[key]);
      }
    }
  }

  getOptions(optionsKeys: (keyof ConfigOptions)[]): Partial<ConfigOptions> {
    return optionsKeys.reduce((options, optionKey) => {
      const storedOption = this.localStorage.getItem(optionKey);
      if (storedOption) {
        options[optionKey] = storedOption as string;
      }
      return options;
    }, {});
  }
}
