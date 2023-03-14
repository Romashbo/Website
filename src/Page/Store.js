import { React } from "react";
import "../index.css";

import CardBlock from "../Components/CardBlock";
import ShopItem from "../Components/ShopItem";
import Popup from "../Components/Popup/Popup";

const Store = () => {
  const bmw = [
    {
      id: 1,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/x2.png"),
      title: "BMW X1",
      price: 4080000 / 80,
      description: "PETROL - DIESEL",
      series: "X",
      video: "https://www.youtube.com/watch?v=-dN-yZSJDLA",
      about:
        "Discover the all-new BMW X1. The second generation of this successful model, offers significantly more space for passengers and luggage, a cutting-edge premium ambience and functionality grounded in solid engineering. Alongside its market-leading dynamics and efficiency, a host of innovative equipment features also help to secure the new BMW X1 its stand-out position in the segment. Among the items on the options list are full-LED headlights, Dynamic Damper Control, the BMW Head-Up Display and the Driving Assistant Plus system",
    },
    {
      id: 2,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/x2.png"),
      title: "BMW X2",
      price: 4350000 / 80,
      description: "PETROL - DIESEL",
      series: null,
      className: null,
    },
    {
      id: 3,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/x3.png"),
      title: "BMW X3",
      price: 6550000 / 80,
      description: "PETROL - DIESEL",
      series: null,
      className: null,
    },
    {
      id: 4,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/XX4.png"),
      title: "BMW X4",
      price: 7000000 / 80,
      description: "PETROL - DIESEL",
      series: null,
      className: null,
    },
    {
      id: 5,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/x5.png"),
      title: "BMW X5",
      price: 8960000 / 80,
      description: "PETROL - DIESEL",
      series: true,
      className: "Roww",
    },
    {
      id: 6,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/21.png"),
      title: "BMW 2 series Coupe",
      price: 4870000 / 80,
      description: "PETROL - DIESEL",
      series: "2",
    },
    {
      id: 7,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/222.png"),
      title: "BMW 2 series Gran Coupe",
      price: 4100000 / 80,
      description: "PETROL - DIESEL",
      series: null,
    },
    {
      id: 8,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/31.png"),
      title: "BMW 3 series",
      price: 4900000 / 80,
      description: "PETROL - DIESEL",
      series: "3",
      className: "Roww",
    },
    {
      id: 9,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/441.png"),
      title: "BMW 4 series Coupe",
      price: 5520000 / 80,
      description: "PETROL - DIESEL",
      series: "4",
      className: "Roww",
    },
    {
      id: 10,
      image: require("/Users/romanbocarov/my-app/src/Components/Shop/42.png"),
      title: "BMW 4 series Gran Coupe",
      price: 5630000 / 80,
      description: "PETROL",
      series: null,
      className: null,
    },
    {
      id: 11,
      image:
        "https://www.bmw.tm/content/dam/bmw/common/all-models/4-series/convertible/2020/navigation/bmw-4-series-convertible-modelfinder.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1627487319143.png",
      title: "BMW 4 series Cabrio",
      price: 6270000 / 80,
      description: "PETROL",
      series: null,
      className: null,
    },
    {
      id: 12,
      image:
        "https://www.bmw.tm/content/dam/bmw/common/all-models/5-series/sedan/2020/navigation/bmw-5-series-sedan-POSI-modelfinder.png/jcr:content/renditions/cq5dam.resized.img.585.low.time1627487806451.png",
      title: "BMW 5 series",
      price: 6270000 / 80,
      description: "PETROL - DIESEL",
      series: "5",
      className: "Roww",
    },
  ];

  return (
    <div>
      <CardBlock />
      <ShopItem bmw={bmw} />
      <Popup bmw={bmw} />
    </div>
  );
};
export default Store;
