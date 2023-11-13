import { PRIVATE_PATHES } from '../constants/pathes/private-pathes';
import { LOGIN, MAIN } from '../constants/pathes/common-pathes';
import { ADMIN } from '../constants/pathes/admin-pathes';
import { ROLE_ADMIN, ROLE_GUEST } from '../constants/role/role';

export const setHeaderNav = (role: string) => {
  const links = [MAIN];
  if (role === ROLE_ADMIN) {
    links.push(ADMIN);
  }
  if (role === ROLE_GUEST) {
    links.push(LOGIN);
  } else {
    links.push(...Object.values(PRIVATE_PATHES));
  }

  return links;
};
