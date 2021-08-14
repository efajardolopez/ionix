import { SET_PERMISSIONS } from "../constants";
/**
 * Por default o estado inicial dejamos flag en false para que ingrese a Slide de configuración de permisos
 */
const initialState = {
  permisssions_settings: false,
};

/**
 * Definición de Reducer para modificar estado según action enviado
 */
const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PERMISSIONS:
      return {
        ...state,
        permissions_settings: action.data,
      };
      break;
    default:
      return state;
  }
};

export default configReducer;
