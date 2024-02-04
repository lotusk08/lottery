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
    text: "Giải",
    title: "đặc biệt",
    img: "../img/dac biet.webp"
  },
  {
    type: 2,
    count: 5,
    text: "Giải",
    title: "nhất",
    img: "../img/nhat.webp"
  },
  {
    type: 3,
    count: 5,
    text: "Giải",
    title: "nhì",
    img: "../img/nhi.webp"
  },
  {
    type: 4,
    count: 10,
    text: "Giải",
    title: "ba",
    img: "../img/ba.webp"
  },
  {
    type: 5,
    count: 30,
    text: "Giải",
    title: "khuyến khích",
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
