import { SET_PERMISSIONS } from "../constants";

const initialState = {
  permisssions_settings: false,
};

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
