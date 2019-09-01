import roles from '../constants/roles';

export function getUserRole(rolesId) {
  switch (rolesId) {
    case roles.admin.id:
      return roles.admin.url;

    case roles.advertiser.id:
      return roles.advertiser.url;

    case roles.driver.id:
      return roles.driver.url;

    default:
      return roles.admin.url;
  }
}
