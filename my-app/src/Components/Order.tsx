import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/init";
import { Dispatch } from "redux";
import { addOrderAsync } from "../redux/actions/addOrder";
import { setLocationAsync } from "../redux/actions/setLocation";
import car from "../Img/car.png";
import {
  Crew,
  ErrorMes,
  FormContainer,
  GosNumber,
  Img,
  Input,
  OrderContainer,
  Span,
  Button,
} from "./style/order";

export const OrderComponent: FC = () => {
  const [value, setValue] = useState("");
  const [button, setButton] = useState<boolean>(false);
  const dispatch = useDispatch<Dispatch<any>>();

  const adress = useSelector((state: State) => state.location.adress);

  const taxistsArr = useSelector((state: State) => state.crew.data);
  const { message } = useSelector((state: State) => state.error);

  const [messageErr, setMessageErr] = useState(message);

  useEffect(() => {
    setMessageErr(message);
  }, [message]);

  useEffect(() => {
    setValue(adress);
  }, [adress]);

  const orderHandler = async (): Promise<void> => {
    if (!value.trim()) {
      setMessageErr("поле не может быть пустым");
    }
    else {
      await dispatch(setLocationAsync(value));
      await dispatch(
        addOrderAsync({
          source_time: new Date()
            .toISOString()
            .replace(/T/, " ")
            .replace(/\..+/, ""),
        })
      );
    }
  };

  useEffect(() => {
    message ? setButton(true) : setButton(false);
  }, [message]);

  return (
    <>
      <OrderContainer>
        <Span>Откуда:</Span>
        <FormContainer>
          <Input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <ErrorMes>{messageErr}</ErrorMes>
        </FormContainer>
        <Span>Подходящий экипаж:</Span>
        <Crew>
          <Img src={car} alt="!" />
          {taxistsArr[0] ? (
            <>
              <span>{`К вам едет ${taxistsArr[0].car_color} ${taxistsArr[0].car_mark} ${taxistsArr[0].car_model}`}</span>
              <GosNumber>{taxistsArr[0].car_number}</GosNumber>
            </>
          ) : (
            "Тут пока ничего нет"
          )}
        </Crew>
      </OrderContainer>
      <Button animate={!button ? "visible" : "visbleRed"} onClick={orderHandler}>
        заказать
      </Button>
    </>
  );
};
