import { Dispatch } from "redux";
import { FC, useEffect, useState } from "react";
import { Map, Placemark } from "react-yandex-maps";
import { useDispatch, useSelector } from "react-redux";
import { setLocationAsync } from "../redux/actions/setLocation";
import { State } from "../redux/init";
import { TaxistsComponent } from "./Taxists";
import { MapWrapper } from "./style/map";
import { PlacemarkComponent } from "./PlacemarkComponent";

type Coordinates = Array<number>;

export const YMap: FC = () => {
  const [coordinates, setCoordinates] = useState<Coordinates>([]);

  const location = useSelector((state: State) => state.location);
  const { message } = useSelector((state: State) => state.error);

  const dispatch = useDispatch<Dispatch<any>>();

  const mapHandler = async(e: any): Promise<void> => {
    const coords = e.get("coords");
    setCoordinates(coords);
    await dispatch(setLocationAsync(coords.reverse()));
  };

  useEffect(() => {
    if (!!location.coordinates.length){
      setCoordinates(location.coordinates.reverse());
    }
  }, [location]);

  const mapData = {
    center: [56.8492633030158, 53.20814187771305],
    zoom: 11,
  };

  return (
    <>
      <MapWrapper>
        <TaxistsComponent />
        <Map
          width={"640px"}
          height={"50vh"}
          onClick={(event: any) => {
            mapHandler(event);
          }}
          defaultState={mapData}
        >
          <Placemark
            geometry={coordinates}
            options={{
              preset: !message ? "islands#yellowDotIcon" : "islands#redDotIcon",
            }}
          />
          <PlacemarkComponent />
        </Map>
      </MapWrapper>
    </>
  );
};
