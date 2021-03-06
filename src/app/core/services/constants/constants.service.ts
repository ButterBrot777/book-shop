import { Injectable, InjectionToken } from '@angular/core';

import { Constants } from './models';

export const APP_CONFIG: Constants = {
  App: 'TaskManager',
  Ver: '1.0',
};

export const CONSTANTS = new InjectionToken<Constants>('Constants');

@Injectable()
export class ConstantsService {}
