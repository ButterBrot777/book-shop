import {AppConstVersion} from '../models/app-const-version';

export enum BookCategories {
  Action = 'Action',
  Detective = 'Detective',
  Fantasy = 'Fantasy',
  Horror = 'Horror',
}

export const ConstantsService: AppConstVersion = {
  App: 'TaskManager',
  Ver: '1.0',
};
