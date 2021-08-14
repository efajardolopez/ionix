import { SET_PERMISSIONS } from "../constants";

export function setPermissions(data) {
  return {
    type: SET_PERMISSIONS,
    data,
  };
}
