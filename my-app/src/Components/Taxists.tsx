import { FC } from "react";
import { useSelector } from "react-redux";
import { State } from "../redux/init";
import { TaxistsContainer } from "./style/taxists";

export const TaxistsComponent: FC = () => {
  const taxistsArr = useSelector((state: State) => state.crew.data);

  return (
    <TaxistsContainer>
      {taxistsArr.map((t, i) => {
        return <div key={t.crew_id}>{i+1}. {t.car_mark} {t.car_model} {t.car_color}</div>
      })}
    </TaxistsContainer>
  );
};
