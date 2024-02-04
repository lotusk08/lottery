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
    title: "50.000.000 VNĐ",
    img: "../img/secrit.jpg"
  },
  {
    type: 2,
    count: 5,
    text: "Giải nhất",
    title: "40.000.000 VNĐ",
    img: "../img/mbp.jpg"
  },
  {
    type: 3,
    count: 5,
    text: "Giải nhì",
    title: "30.000.000 VNĐ",
    img: "../img/huawei.png"
  },
  {
    type: 4,
    count: 10,
    text: "Giải ba",
    title: "20.000.000 VNĐ",
    img: "../img/ipad.jpg"
  },
  {
    type: 5,
    count: 30,
    text: "Giải khuyến khích",
    title: "10.000.000 VNĐ",
    img: "../img/spark.jpg"
  }
];

/**
 * The number of prizes for one time corresponds to Prizes
 */
const EACH_COUNT = [1, 1, 5, 6, 7, 8, 9, 10];

/**
 * Card company name identification
 */
const COMPANY = "We are IN";

module.exports = {
  prizes,
  EACH_COUNT,
  COMPANY
};
