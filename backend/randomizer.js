const { v4: uuidv4 } = require("uuid");
const geokit = require("geokit");

const auto = ["Chebvrolet", "LADA", "Hyundai", "Kia"];
const autoMark = ["Lacetti", "Vesta", "Solaris", "Rio"];
const color = ["черный", "серебристый", "белый", "синий"];
const carNumber = ["Е234КУ", "A298KK", "P900C", "E224TT", "M487BB"];
const lastName = ["Иванов", "Петров", "Сидоров", "Абельджон", "Тимошенко"];

const randomizer = (coords) => {
  const randomPhoneNum = "+79" + Math.floor(Math.random() * 10e8);
  const [lat, lng] = coords;
  const start = { lat, lng };
  const randomLat = Math.random() * (0.00999999 - -0.00999999) + -0.00999999;
  const randomLng = Math.random() * (0.00999999 - -0.00999999) + -0.00999999;
  const end = {};
  end.lat = lat + randomLat;
  end.lng = lng + randomLng;
  const distance = Math.floor(geokit.distance(start, end) * 1000);

  const autoRandom = Math.floor(Math.random() * auto.length);
  return {
        crew_id: uuidv4(),
        car_mark: auto[autoRandom],
        car_model: autoMark[autoRandom],
        car_color: color[Math.floor(Math.random() * color.length)],
        car_number: carNumber[Math.floor(Math.random() * carNumber.length)],
        driver_name: lastName[Math.floor(Math.random() * lastName.length)],
        driver_phone: randomPhoneNum,
        lat: end.lat,
        lon: end.lng,
        distance,
      }
};

module.exports = randomizer;
