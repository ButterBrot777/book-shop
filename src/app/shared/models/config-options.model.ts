import {User} from './user.model';

export interface ConfigOptions extends User {
  login: string;
  email: string;
}
