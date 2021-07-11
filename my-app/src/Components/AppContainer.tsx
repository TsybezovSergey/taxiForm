import { FC } from "react";
import { YMap } from "./Map";
import { OrderComponent } from "./Order";
import { AppContainer } from "./style/appContainer";

export const AppContainerComponent: FC = () => {
  return (
    <AppContainer>
      <OrderComponent />
      <YMap />
    </AppContainer>
  );
};
