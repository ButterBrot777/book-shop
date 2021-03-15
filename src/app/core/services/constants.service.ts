import { InjectionToken } from '@angular/core';

import { AppConstVersion } from '../models';

export const CONSTANTS = new InjectionToken<AppConstVersion>('Constants');
