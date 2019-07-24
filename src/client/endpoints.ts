import {environment} from '../environments/environment';

export const BASE_ENDPOINT = environment.production ?
  '' :
  'http://localhost:3000/';
