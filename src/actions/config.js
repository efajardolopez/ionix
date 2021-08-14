import { SET_PERMISSIONS } from "../constants";

/**
 * Función que nos permitirá inyectar datos al reducer de manera de modificar uno o vario estados
 * dependiendo de lo que se envíe en data. En este caso para modificar el estado del permissions_settings
 * @export
 * @param {*} data
 * @returns
 */
export function setPermissions(data) {
  return {
    type: SET_PERMISSIONS,
    data,
  };
}
