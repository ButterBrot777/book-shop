import { NgModule } from '@angular/core';

import { ConfigOptionsService } from './config-options';
import { APP_CONFIG, CONSTANTS, ConstantsService } from './constants';
import { generatorFactory, GeneratorService, RANDOM_STRING } from './generator';
import { LocalStorageService } from './local-storage';

/**
 * Core services module
 */
@NgModule({
  providers: [
    ConfigOptionsService,
    ConstantsService,
    GeneratorService,
    { provide: CONSTANTS, useValue: APP_CONFIG },
    {
      provide: RANDOM_STRING,
      useFactory: generatorFactory(3),
      deps: [GeneratorService],
    },
    LocalStorageService,
  ],
})
export class ServicesModule {}
