import {environment} from '../environments/environment';

export const BASE_ENDPOINT = getEndpoint();

/* istanbul ignore next */
function getEndpoint() {
  return environment.production ?
    '' :
    'http://localhost:3000/';;
}
