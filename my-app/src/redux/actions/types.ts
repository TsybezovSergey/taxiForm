export enum Types {
  ADD_ORDER = "ADD_ORDER",
  SET_LOCATION = "SET_LOCATION",
  SET_TAXI_VARIANT = "SET_TAXI_VARIANT",
  SET_ERROR = "SET_ERROR",
} 

export interface Location {
  adress: string;
  coordinates: number[];
}

export interface Crew {
  source_time: string;
}

export interface Order {
  code: number;
  descr: string;
  data: Data[];
}
export interface Data {
  crew_id: string,
  car_mark: string,
  car_model: string,
  car_color: string,
  car_number: number,
  driver_name: string,
  driver_phone: string,
  lat: number,
  lon: number,
  distance: number,
}

export interface AddOrder {
  type: Types.ADD_ORDER;
  payload: Order;
}
export interface SetLocation {
  type: Types.SET_LOCATION;
  payload: Location;
}

export interface SetError {
  type: Types.SET_ERROR;
  payload: {
    message: string,
    adress: string,
    coordinates: number[],
  }
}
export type Actions = AddOrder | SetLocation | SetError;
