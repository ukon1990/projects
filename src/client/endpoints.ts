import {environment} from '../environments/environment';

export const BASE_ENDPOINT = environment.production ?
  '' :
  'localhost:3000/';
