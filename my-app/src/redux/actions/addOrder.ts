import { AddOrder, Crew, Types } from "./types";
import { Order } from "./types";
import { Dispatch } from "react";
import { State } from "../init";

export const addOrderAsync =
  ({ source_time }: Crew) =>
  async (dispatch: Dispatch<AddOrder>, getState: () => State) => {
    const { location } = getState();
    const { error } = getState();

    const [lon, lat] = location.coordinates;
    const { adress } = location;
    console.log(error.message);
    
    if (!error.message){
      const response = await fetch("/api/v1/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source_time,
          adress,
          lat,
          lon,
        }),
      });
      const res = await response.json();

      dispatch(addOrder(res));
    }
  };

const addOrder = ({ code, descr, data }: Order): AddOrder => {
  return {
    type: Types.ADD_ORDER,
    payload: {
      code,
      descr,
      data,
    },
  };
};
