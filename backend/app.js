const express = require("express");
const randomizer = require("./randomizer");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/v1/", async (req, res) => {
  console.log(req.body)
  try {
    const { lat } = req.body;
    const { lon } = req.body;
    const response = [
      randomizer([lat, lon]),
      randomizer([lat, lon]),
      randomizer([lat, lon]),
      randomizer([lat, lon]),
    ].sort((a, b) => a.distance - b.distance);
    res.send({ descr: "OK", code: 1, data: response });
  } catch {
    res.send({ descr: "ERROR", code: 0, data: [] });
  }
});

app.listen(8080, () => {
  console.log("==Сервер работает==");
});

