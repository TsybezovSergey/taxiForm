import React from "react";
import { YMaps } from "react-yandex-maps";
import "./App.css";
import { AppContainerComponent } from "./Components/AppContainer";
//65ffae47-a906-4e0b-90c0-d927ac7ef987
//1a0fb3c4-1762-457e-bb13-107ce3d7e88c
function App() {
  return (
    <div className="App">
      <YMaps
        query={{
          apikey: "1a0fb3c4-1762-457e-bb13-107ce3d7e88c",
        }}
      >
        <AppContainerComponent />
      </YMaps>
    </div>
  );
}

export default App;
