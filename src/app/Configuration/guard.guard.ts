import { CanActivateFn, Router } from '@angular/router';
import { Util } from '../Util/util';

export const guard = () => {
  if (new Util().isLoggedIn()) return true;
  new Router().navigate(['./login']);
  return false;
};
