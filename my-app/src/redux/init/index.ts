import { Data, Location, Order } from "../actions/types";

export interface State {
  crew: Order | { data: Data[] };
  location: Location;
  error: {
    message: string
  }
}

export const initialState: State = {
  crew: { data: [] },
  location: {
    adress: "",
    coordinates: [],
  },
  error: {
    message: "",
  }
};
