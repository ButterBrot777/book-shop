import {User} from './user';

export interface ConfigOptions extends User{
  login: string;
  email: string;
}
