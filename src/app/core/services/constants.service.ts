import {InjectionToken} from '@angular/core';

export interface Constants {
  App: string;
  Ver: string;
}

export const ConstantsService: Constants = {
  App: 'TaskManager',
  Ver: '1.0',
};

export const CONSTANTS = new InjectionToken<Constants>('Constants');
