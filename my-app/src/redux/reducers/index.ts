import { Actions, Types } from "../actions/types";
import { initialState, State } from "../init";

export const reducer = (state: State = initialState, action: Actions) => {
  switch (action.type) {
    case Types.ADD_ORDER:
      return {
        ...state,
        crew: action.payload
      };
    case Types.SET_LOCATION:
      return {
        ...state,
        location: action.payload,
        error: {
          message: "",
        }
      };
      case Types.SET_ERROR:
        return {
          ...state,
          location: {
            ...state.location,
            adress: action.payload.adress,
            coordinates: action.payload.coordinates
          },
          error: {
            message: action.payload.message
          }
        };
    default:
      return state;
  }
};
