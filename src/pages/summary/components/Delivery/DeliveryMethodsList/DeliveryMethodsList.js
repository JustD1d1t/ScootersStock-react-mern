import inpost from "../../../../../static/img/inpost.png";
import dpd from "../../../../../static/img/dpd.png";
import poczta from "../../../../../static/img/poczta.png";
export const DELIVERY_METHODS = [
  {
    id: 1,
    image: inpost,
    price: 8.99,
    deliveryTime: "Tomorrow you have",
    name: "inpost",
  },
  {
    id: 2,
    image: dpd,
    price: 12.99,
    deliveryTime: "Day after tomorrow you have",
    name: "dpd",
  },
  {
    id: 3,
    image: poczta,
    price: 3.99,
    deliveryTime: "3-4 days for delivery",
    name: "poczta",
  },
];
