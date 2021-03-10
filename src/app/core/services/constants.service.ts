import {InjectionToken} from '@angular/core';
import {AppConstVersion} from '../../models/app-const-version';

export const CONSTANTS = new InjectionToken<AppConstVersion>('Constants');
