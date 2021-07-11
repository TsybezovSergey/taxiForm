import { Dispatch } from "react";
import { Location, SetError, SetLocation, Types } from "./types";

type PropTypes = number[] | string;

export const setLocationAsync =
  (props: PropTypes) => async (dispatch: Dispatch<SetLocation | SetError>) => {
    if (Array.isArray(props)) {
      const response = await fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=1a0fb3c4-1762-457e-bb13-107ce3d7e88c&geocode=${props.join(
          ","
        )}&lang=RU&format=json`
      );
      const res = await response.json();
      const house =
        res.response.GeoObjectCollection.featureMember[0].GeoObject
          .metaDataProperty.GeocoderMetaData.kind;
      const adress =
        res.response.GeoObjectCollection.featureMember[0].GeoObject.name;
      if (house === "house") {
        dispatch(setLocation({ adress, coordinates: props }));
      } else dispatch(setError({ adress, coordinates: props, message: "неправильный адрес" }));
    }
    if (typeof props === "string") {
      const adress = props.replace(/ /gm, "+");
      const response = await fetch(
        `https://geocode-maps.yandex.ru/1.x/?apikey=1a0fb3c4-1762-457e-bb13-107ce3d7e88c&geocode=Ижевск,+${adress}&lang=RU&format=json`
      );
      const res = await response.json();
      const house =
        res.response.GeoObjectCollection.featureMember[0].GeoObject
          .metaDataProperty.GeocoderMetaData.kind;
      const coordinates =
        res.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos
          .split(" ")
          .map((e: string): number => Number(e));
      if (house === "house") {
        dispatch(setLocation({ adress: props, coordinates }));
      } else dispatch(setError({ adress: props, coordinates, message: "неправильный адрес" }));
    }
  };

const setLocation = ({ adress, coordinates }: Location): SetLocation => {
  return {
    type: Types.SET_LOCATION,
    payload: {
      adress,
      coordinates,
    },
  };
};
const setError = ({ adress, coordinates, message }: any): SetError => {
  return {
    type: Types.SET_ERROR,
    payload: {
      adress,
      message,
      coordinates,
    },
  };
};
