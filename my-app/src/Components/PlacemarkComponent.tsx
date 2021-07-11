import { FC } from "react";
import { useSelector } from "react-redux";
import { Placemark } from "react-yandex-maps";
import { State } from "../redux/init";

export const PlacemarkComponent: FC = () => {
  const taxistsArr = useSelector((state: State) => state.crew.data);

  return (
    <>
      {taxistsArr.map(({ crew_id, lat, lon }) => {
        return (
          <Placemark
            key={crew_id}
            geometry={[lat, lon]}
            options={{
              preset: "islands#greenDotIcon",
            }}
          />
        );
      })}
    </>
  );
};
