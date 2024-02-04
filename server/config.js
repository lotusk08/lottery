/**
* Prize setting
* Type: The unique logo, 0 is the positioning symbol of the default special prize, other prizes are not available
* Count: Number of prizes
* Title: Prize description
* Text: Title of prizes
* IMG: Picture address
*/
const prizes = [
  {
    type: 0,
    count: 1000,
    title: "",
    text: "Vòng quay ngẫu nhiên"
  },
  {
    type: 1,
    count: 3,
    text: "Giải đặc biệt",
    title: "50.000.000",
    img: "../img/dac biet.webp"
  },
  {
    type: 2,
    count: 5,
    text: "Giải nhất",
    title: "40.000.000",
    img: "../img/nhat.webp"
  },
  {
    type: 3,
    count: 5,
    text: "Giải nhì",
    title: "30.000.000",
    img: "../img/nhi.webp"
  },
  {
    type: 4,
    count: 10,
    text: "Giải ba",
    title: "20.000.000",
    img: "../img/ba.webp"
  },
  {
    type: 5,
    count: 30,
    text: "Giải khuyến khích",
    title: "10.000.000",
    img: "../img/kk.webp"
  }
];

/**
 * The number of prizes for one time corresponds to Prizes
 */
const EACH_COUNT = [1, 3, 5, 5, 5, 10];

/**
 * Card company name identification
 */
const COMPANY = "IN";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
